export const message = (info) => console.log(info);
export const type = (info) => {
  const p = document.createElement("p");
  p.textContent = info;
  document.querySelector("div").appendChild(p);
};
