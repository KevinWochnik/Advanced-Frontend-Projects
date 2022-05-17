import { AnimBg } from "./AnimBg.js";
document.addEventListener("DOMContentLoaded", () => {
  const animBg = new AnimBg(".anim-bg");

  document.addEventListener("mousemove", animBg.listenCursorMove);
});
