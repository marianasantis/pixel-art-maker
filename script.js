const grid = document.getElementById("grid");
for (let lin = 0; lin < 16; lin++) {
  const newLine = document.createElement("div");
  newLine.className = "line";
  for (let col = 0; col < 16; col++) {
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    newLine.appendChild(newDiv);
  };
  grid.appendChild(newLine);
}; 

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
  square.addEventListener("mousedown", startPainting);
  square.addEventListener("mouseup", stopPainting);
  square.addEventListener("mouseover", keepPainting);
});

let mouseIsDown;
function startPainting(event) { 
  event.target.style.backgroundColor = "blue";
  mouseIsDown = true;
  event.preventDefault();myRange
}

function stopPainting(event) {
  mouseIsDown = false;
}

function keepPainting(event) {
  if (!mouseIsDown) return;
  event.target.style.backgroundColor = "blue";
}
