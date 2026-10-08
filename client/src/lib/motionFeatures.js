// Motion's animation features, split into their own chunk so the first
// download only carries the lightweight `m` components. Until this arrives,
// plates render and work; they just don't squash on press yet.
import { domAnimation } from "motion/react";

export default domAnimation;
