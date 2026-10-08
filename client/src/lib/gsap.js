import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* One place to register GSAP plugins. Only homepage components import this
   module, so the Art page bundle never carries GSAP. ScrollTrigger lives in
   ./scroll and is loaded on demand: it only drives the marble's run down
   the page, so it stays out of the first download. */
gsap.registerPlugin(useGSAP);

/* Authored sequences only run when the visitor hasn't asked for reduced
   motion; everyone else gets the finished, static drawing. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

export { gsap, useGSAP };
