const container = document.querySelector("#sketch-container");

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
const boxes = document.querySelectorAll(".box");

function toBlack() {
    this.style.backgroundColor = "black";
}

boxes.forEach(div => div.addEventListener('mouseover', toBlack, {
    capture: false
}))