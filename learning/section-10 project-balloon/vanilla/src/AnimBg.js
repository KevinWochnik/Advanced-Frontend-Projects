export class AnimBg {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
  }
  listenCursorMove = (e) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const positionX = clientX - centerX;
    const positionY = clientY - centerY;

    this.elements.forEach((element) => {
      this.moveElement(element, positionX, positionY);
    });
  };
  moveElement = (element, positionX, positionY) => {
      const ratioX = -element.attributes.ratiox.value;
      const ratioY = -element.attributes.ratioy.value;

    element.style.transform = `translate(${positionX * ratioX}px, ${
      positionY * ratioY
    }px)`;
  };
}
