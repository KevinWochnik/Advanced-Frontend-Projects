document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector(".main");
  const sections = [...document.querySelectorAll(".main__section")];
  let currentSectionIndex = 0;
  let isThrottled = false;

  document.addEventListener("wheel", (e) => {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 1000);
    const scrollDirection = e.wheelDelta < 0 ? 1 : -1;
    if (scrollDirection === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (scrollDirection === -1) {
      const firstSection = currentSectionIndex === 0;
      if (firstSection) return;
    }
    currentSectionIndex = currentSectionIndex + scrollDirection;
    console.log(currentSectionIndex);

    sections[currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  });
});
