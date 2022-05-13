const addForm = document.querySelector(".form--add");
const searchForm = document.querySelector(".form--search");
const container = document.querySelector(".content");

// functions

const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(node || "div");

  if (txt) {
    const text = document.createTextNode(txt);
    element.textContent = txt;
  }
  if (attr) {
    element.setAttribute(attr, value);
  }
  container.appendChild(element);
};

const searchElements = (e, nameElement) => {
  e.preventDefault();
  const infoElement = document.querySelector(".result");
  infoElement.textContent = "";
  const elements = [...document.querySelectorAll(nameElement)];
  if (elements.length) {
    infoElement.innerHTML = `<p class="result__number-info"> W tym elemencie znalazłem ${elements.length} elementów - ${nameElement}</p>`;
    showInfo(elements, infoElement);
  } else {
    infoElement.innerHTML = `<p class="result__info"> W tym elemencie nie znalazłem żadnych elementów </p>`;
    return;
  }
};

const showInfo = (elements, info) => {
  elements.forEach((element) => {
    const item = document.createElement("div");
    item.className = "result__element-description";
    item.innerHTML = `
    <div>${element.nodeName}</div>
    <div>klasa/klasy - ${element.className}</div>
    <div>wysokość elementu - ${element.offsetHeight}</div>
    <div>szerokość elementu - ${element.offsetWidth}</div>
    <div>odległość od lewej krawędzi - ${element.offsetLeft}</div>
    <div>odległość od górnej krawędzi - ${element.offsetTop}</div>
    <div>liczba elementów dzieci - ${element.childElementCount}</div>
    `;
    info.appendChild(item);
  });
};

// listeners

addForm.addEventListener("submit", (e) =>
  addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.txt.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
  )
);
searchForm.addEventListener("submit", (e) =>
  searchElements(e, searchForm.elements["searching-element"].value)
);
