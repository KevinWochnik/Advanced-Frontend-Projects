import { Scroller } from "./Scroller.js";
document.addEventListener("DOMContentLoaded", () => {
  const scroller = new Scroller(".main");
  document.addEventListener("wheel", scroller.listenScroll);

});
