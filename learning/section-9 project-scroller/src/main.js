import { Scroller } from "./Scroller.js";
document.addEventListener("DOMContentLoaded", () => {
  const scroller = new Scroller(".main");
  document.addEventListener("wheel", scroller.listenScroll);
  document.addEventListener("swipeUp", () => scroller.scroll(1));
  document.addEventListener("swipeDown", () => scroller.scroll(-1));
});
