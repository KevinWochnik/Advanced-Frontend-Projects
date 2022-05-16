export class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = [...document.querySelectorAll(".main__section")];

    const currentSectionIndex = this.sections.findIndex(
      this.isScrolledIntoView
    );
    this.currentSectionIndex = Math.max(currentSectionIndex, 0);
  }
  isScrolledIntoView = (element) => {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = Math.floor(rect.bottom);
    const isVisible = element >= 0 && elementBottom <= window.innerHeight;
    return isVisible;
  };
  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };
  listenScroll = (e) => {
    if (this.isThrottled) return;
    this.isThrottled = true;
    setTimeout(() => {
      this.isThrottled = false;
    }, 1000);
    const scrollDirection = e.wheelDelta < 0 ? 1 : -1;
    this.scroll(scrollDirection);
  };
  scroll = (scrollDirection) => {
    if (scrollDirection === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (scrollDirection === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) return;
    }
    this.currentSectionIndex = this.currentSectionIndex + scrollDirection;
    this.scrollToCurrentSection();
  };
}
