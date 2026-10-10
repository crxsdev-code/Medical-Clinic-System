/**
 * Lightweight render smoke test — no test framework required.
 *
 *   npm run check
 *
 * Renders every route with Vite's SSR pipeline and fails if a page throws
 * or renders empty output. Useful before shipping a change.
 */
import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/doctors",
  "/facilities",
  "/faq",
  "/contact",
  "/definitely-not-a-page",
];

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

let failures = 0;

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");

  for (const route of ROUTES) {
    try {
      const router = createMemoryRouter([{ path: "*", element: createElement(App) }], {
        initialEntries: [route],
      });

      const html = renderToString(createElement(RouterProvider, { router }));

      const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const problems = [];

      if (text.length < 80) {
        problems.push(`rendered only ${text.length} characters`);
      }

      // Duplicate element ids break aria references
      const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
      const duplicates = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
      if (duplicates.length > 0) {
        problems.push(`duplicate ids: ${duplicates.join(", ")}`);
      }

      // Every page must expose exactly one h1
      const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
      if (h1Count !== 1) {
        problems.push(`expected exactly one <h1>, found ${h1Count}`);
      }

      if (problems.length > 0) {
        failures += 1;
        console.error(`✗ ${route} — ${problems.join("; ")}`);
      } else {
        console.log(`✓ ${route} (${html.length} bytes, ${ids.length} ids, 1 h1)`);
      }
    } catch (error) {
      failures += 1;
      console.error(`✗ ${route} failed:`, error);
    }
  }
} catch (error) {
  failures += 1;
  console.error("✗ Failed to load the app:", error);
} finally {
  await vite.close();
}

if (failures > 0) {
  console.error(`\n${failures} route(s) failed.`);
  process.exit(1);
}

console.log("\nAll routes rendered successfully.");
