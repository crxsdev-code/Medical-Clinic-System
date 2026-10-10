import { useCallback, useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** id of the element that labels the dialog (title). */
  labelledBy: string;
  describedBy?: string;
  children: ReactNode;
  /** Extra classes for the dialog panel. */
  panelClassName?: string;
  /** Panel colour scheme — "dark" is used by the facility lightbox. */
  tone?: "light" | "dark";
  /** Hide the built-in close button (e.g. custom gallery chrome). */
  hideCloseButton?: boolean;
}

/**
 * Accessible dialog shell used by the doctor profile and the facility
 * lightbox: portals to <body>, locks background scroll, traps focus,
 * closes on Escape / backdrop click and restores focus on close.
 */
export default function Modal({
  open,
  onClose,
  labelledBy,
  describedBy,
  children,
  panelClassName = "",
  tone = "light",
  hideCloseButton = false,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  // Lock scroll + remember the previously focused element
  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const raf = window.requestAnimationFrame(() => {
      const panel = panelRef.current;
      const target = panel?.querySelector<HTMLElement>(FOCUSABLE) ?? panel;
      target?.focus();
    });

    return () => {
      window.cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      onKeyDown={handleKeyDown}
      role="presentation"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="animate-fade-in absolute inset-0 h-full w-full cursor-default bg-deep/70 backdrop-blur-[2px]"
        tabIndex={-1}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        tabIndex={-1}
        className={[
          "relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-xl shadow-lift outline-none",
          "sm:rounded-xl",
          "animate-dialog-in",
          tone === "dark"
            ? "bg-deep text-white ring-1 ring-white/10 sm:max-w-4xl"
            : "bg-white text-ink sm:max-w-2xl",
          panelClassName,
        ].join(" ")}
      >
        {!hideCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={[
              "absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border transition sm:right-5 sm:top-5",
              tone === "dark"
                ? "border-white/20 bg-white/10 text-white hover:bg-white hover:text-deep"
                : "border-line bg-white text-navy hover:bg-mist",
            ].join(" ")}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body,
  );
}
