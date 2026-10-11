/**
 * Primary navigation model — used by the navbar, footer and mobile menu so
 * links can never drift out of sync.
 */

export interface NavItem {
  label: string;
  path: string;
  /** Optional in-page anchor appended to the path. */
  hash?: string;
}

export const mainNav: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Doctors", path: "/doctors" },
  { label: "Facilities", path: "/facilities" },
  { label: "FAQ", path: "/faq" },
];
