import { useEffect, useState } from "react";

/* Returns true once the element has entered the viewport (its top above
   `line` × viewport height). Uses rect checks on scroll instead of
   IntersectionObserver, whose callbacks are unreliable in some embedded
   renderers, plus timed re-checks, so a missed callback can never leave
   content hidden.
   Pass enabled=false to hold off until the element's size is real (e.g.
   until its image has loaded). */
export default function useSeen(ref, line = 0.88, enabled = true) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (seen || !enabled || !el) return undefined;

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      const r = el.getBoundingClientRect();
      if (r.top < vh * line && r.bottom > 0) setSeen(true);
    };
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    // re-check after fonts/images settle layout
    const t1 = setTimeout(check, 250);
    const t2 = setTimeout(check, 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [ref, seen, line, enabled]);

  return seen;
}
