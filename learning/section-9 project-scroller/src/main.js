document.addEventListener("DOMContentLoaded", () => {
  console.log("works");

  const rootElement = document.querySelector(".main");
  const sections = [...document.querySelectorAll(".main__section")];

  document.addEventListener("wheel", (e) => {
    console.log("scroll");
  });
});
