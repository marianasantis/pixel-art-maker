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
  addListeners();
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

function addListeners() {
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
  event.target.style.backgroundColor = "blue";
  mouseIsDown = true;
  event.preventDefault();
}

function stopPainting() {
  mouseIsDown = false;
}

function keepPainting(event) {
  if (!mouseIsDown) return;
  event.target.style.backgroundColor = "blue";
}
