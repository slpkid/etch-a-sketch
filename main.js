const container = document.querySelector("#sketch-container")

function default16x16() {
    let i = 0
    while (i < 16) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box")
        container.appendChild(newDiv);
        i++;
    }
}

default16x16();