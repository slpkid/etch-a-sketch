const container = document.querySelector("#sketch-container");
const newButton = document.querySelector("#new-grid").addEventListener("click",newGrid);
let mouseDown = false;

window.addEventListener("mousedown", () => {
    mouseDown = true;
})
window.addEventListener("mouseup", () => {
    mouseDown = false;
})

function randomRGB(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

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

function draw() {
    if (mouseDown === false) {
        return
    } else {
        const hue = randomRGB(0,360);
        const saturation = `${randomRGB(0,100)}%`;
        const lightness = `${randomRGB(0,100)}%`;
        this.style.backgroundColor = 'hsl(' + hue + ',' + saturation + ',' + lightness + ')';
    }
}

function toBlack() {
    if (mouseDown === false) {
        return
    } else {
        this.style.backgroundColor = "black";
    }
}

boxes.forEach(div => div.addEventListener('mouseover', draw, {
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
  boxes.forEach(div => div.addEventListener('mouseover', draw, {
    capture: false
  }))
 }
}

function removeChild() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}
