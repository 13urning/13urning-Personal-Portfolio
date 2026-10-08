import { gsap } from "./gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Loaded on demand with import("lib/scroll") so ScrollTrigger (and the
   Observer it depends on) stay out of the homepage's first download. */
gsap.registerPlugin(ScrollTrigger);

/* Google Fonts load with display=swap, so text reflows after first paint.
   Re-measure trigger positions once the real fonts are in. */
if (typeof document !== "undefined" && document.fonts) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}

export { ScrollTrigger };
