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
    let opacity = 0.1;
    
    grid.addEventListener("mouseover", () => {
        opacity = Math.min(opacity + 0.2, 1.0);
        grid.style.background = `rgba(129, 7, 7, ${opacity})`;
    })
})