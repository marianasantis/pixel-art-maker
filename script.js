

const container = document.getElementById("container");
for (let lin = 0; lin < 16; lin++) {
  const newLine = document.createElement("div");
  newLine.className = "line";
  for (let col = 0; col < 16; col++) {
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    newLine.appendChild(newDiv);
  };
  container.appendChild(newLine);
}; 

/*
let mouseIsDown;
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
  square.addEventListener("mousedown", () => {
    mouseIsDown = true;
  });
  square.addEventListener("mouseup", () => {
    mouseIsDown = false;
  });
  square.addEventListener("mouseover", () => {
    if (mouseIsDown) {
      square.style.backgroundColor = "blue";
    } 
  });
});
*/

let mouseIsDown;
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
  square.addEventListener("mousedown", startPainting);
  square.addEventListener("mouseup", stopPainting);
  square.addEventListener("mouseover", keepPainting);
});

function startPainting(event) { 
  event.target.style.backgroundColor = "blue";
  mouseIsDown = true;
  event.preventDefault();
}

function stopPainting(event) {
  mouseIsDown = false;
}

function keepPainting(event) {
  if (!mouseIsDown) return;
  event.target.style.backgroundColor = "blue";
}





// when i click on any square = isMouseDown true
// isMouseDown is gonna become false when theres a mouseUp event on any square
// u need to prevent dragging action so it can work

