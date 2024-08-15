buildGrid(16);

function buildGrid(sliderValue) {
  const grid = document.getElementById("grid");
  for (let lin = 0; lin < sliderValue; lin++) {
    const newLine = document.createElement("div");
    newLine.className = "line";
    for (let col = 0; col < sliderValue; col++) {
      const newDiv = document.createElement("div");
      newDiv.className = "square";
      newLine.appendChild(newDiv);
    };
    grid.appendChild(newLine);
  }; 
  addMouseListeners();
}

const slider = document.getElementById("slider");
slider.addEventListener("input", () => {
  const grid = document.getElementById("grid");
  grid.textContent = "";
  buildGrid(slider.value);
  changeSizeText(slider.value);
});

function changeSizeText(size) {
  const sizeText = document.getElementById("size-text");
  sizeText.textContent = size + "x" + size;
}

function addMouseListeners() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mousedown", startPainting);
    square.addEventListener("mouseover", keepPainting);
  });
  const pageCont = document.getElementById("page-container")
  pageCont.addEventListener("mouseup", stopPainting);
}

let mouseIsDown;
function startPainting(event) { 
  paint(event);
  mouseIsDown = true;
  event.preventDefault();
}

function keepPainting(event) {
  if (!mouseIsDown) return;
  paint(event);
}

function paint(event) {
  if (eraseBtn.classList.contains("active")) {
    event.target.style.backgroundColor = "#F0F1FF";
  } else if (randomizeBtn.classList.contains("active")) {
    event.target.style.backgroundColor = getRandomColor();
  } else {
    const colorPicker = document.getElementById("color-picker");
    event.target.style.backgroundColor = colorPicker.value;
  }
}

function stopPainting() {
  mouseIsDown = false;
}

const eraseBtn = document.getElementById("erase-btn");
eraseBtn.addEventListener("click", activateEraser);

function activateEraser() {
  eraseBtn.classList.toggle("active");
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clear);

function clear() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.backgroundColor = "#F0F1FF";
  });
}

const randomizeBtn = document.getElementById("randomize-btn");
randomizeBtn.addEventListener("click", activateRandomizer);

function activateRandomizer() {
  randomizeBtn.classList.toggle("active");
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}