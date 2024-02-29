const container = document.querySelector("#sketch-container");
const newButton = document.querySelector("#new-grid").addEventListener("click",newGrid);
let mouseDown = false;

window.addEventListener("mousedown", () => {
    mouseDown = true;
    console.log(mouseDown);
})
window.addEventListener("mouseup", () => {
    mouseDown = false;
    console.log(mouseDown);
})

function default16x16() {
    let i = 0;
    while (i < 256) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        container.appendChild(newDiv);
        i++;
    }
}

default16x16();
let boxes = document.querySelectorAll(".box");

function toBlack() {
    if (mouseDown === false) {
        return
    } else {
    this.style.backgroundColor = "black";
    }
}

boxes.forEach(div => div.addEventListener('mouseover', toBlack, {
    capture: false
}))

function newGrid() {
  boxes = 0;
  let gridSize = prompt("Enter the desired grid size.");
  gridSize = Number(gridSize);
  if (gridSize === NaN || gridSize === undefined || gridSize <= 0 || gridSize > 100) {
    alert("Please enter a valid grid size.");
    return;
  } else {
  removeChild()
  let boxsize = (750 / gridSize);
  let i = 0
  while (i < gridSize * gridSize) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.minWidth = `${boxsize}px`;
    newDiv.style.minHeight = `${boxsize}px`;
    container.appendChild(newDiv);
    i++;
  }
  boxes = document.querySelectorAll(".box");
  boxes.forEach(div => div.addEventListener('mouseover', toBlack, {
    capture: false
  }))
 }
}

function removeChild() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}