import { useEffect } from "react";

/* Scroll-reveal runtime for [data-reveal] elements (from the design's
   bundler runtime): reveals once when an element enters the viewport,
   honoring an optional per-element data-reveal-delay in milliseconds.
   Uses rect checks on scroll instead of IntersectionObserver — IO
   callbacks are unreliable in some embedded/headless renderers, and a
   missed callback would leave the page at opacity 0. */
export default function useReveal() {
  useEffect(() => {
    const pending = new Set(document.querySelectorAll("[data-reveal]"));
    if (!pending.size) return undefined;

    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      pending.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          const delay = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
          setTimeout(() => el.setAttribute("data-shown", "1"), delay);
          pending.delete(el);
        }
      });
      if (!pending.size) detach();
    };
    // Plain check on scroll — no rAF: backgrounded/embedded renderers
    // throttle rAF to zero, which would leave content at opacity 0.
    const onScroll = check;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    // re-check after fonts/images settle layout
    const t1 = setTimeout(check, 250);
    const t2 = setTimeout(check, 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      detach();
    };
  }, []);
}
