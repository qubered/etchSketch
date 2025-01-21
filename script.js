const parentDiv = document.querySelector(".parentDiv");

for (let i=0; i < 16; i++) {
    const horizontalDiv = document.createElement("div");
    horizontalDiv.id = "horizontalDiv";
    for (let i=0; i < 16; i++) {
        const gridBox = document.createElement("div");
        gridBox.id = "grid"
        horizontalDiv.appendChild(gridBox)
    }
    parentDiv.appendChild(horizontalDiv)
}


const grids = document.querySelectorAll("#grid");

grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.style.background = "red";
    })
})