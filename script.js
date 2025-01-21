const parentDiv = document.querySelector(".parentDiv");
const clearButton = document.querySelector("#clear");

const pixelCount = 16;

function gridDraw(pixelCount) {
    for (let i=0; i < pixelCount; i++) {
        const horizontalDiv = document.createElement("div");
        horizontalDiv.id = "horizontalDiv";
        for (let i=0; i < pixelCount; i++) {
            const gridBox = document.createElement("div");
            gridBox.id = "grid"
            horizontalDiv.appendChild(gridBox)
        }
        parentDiv.appendChild(horizontalDiv)
    }
}

gridDraw(16)

const sizeSubmit = document.querySelector("#sizeSubmit");
const sizeBox = document.querySelector("#sizeBox");

sizeSubmit.addEventListener("click", () => {
    if (isNaN(sizeBox.value) ||sizeBox.value > 64 || sizeBox.value < 2) {
        alert("Enter a number between 2 and 64")
        focus(sizeBox)
    }
    else {
        sizeBox.placeholder = sizeBox.value;
        parentDiv.replaceChildren();
        gridDraw(sizeBox.value);
        const grids = document.querySelectorAll("#grid");
        gridListener()
    }

})

function gridListener() {
    const grids = document.querySelectorAll("#grid");
    grids.forEach((grid) => {
        let opacity = 0.1;
        
        grid.addEventListener("mouseover", () => {
            opacity = Math.min(opacity + 0.1, 1.0);
            grid.style.background = `rgba(129, 7, 7, ${opacity})`;
        })
    })
}

clearButton.addEventListener("click", () => {
    const grids = document.querySelectorAll("#grid");
    grids.forEach((grid) => {
        grid.style.background = "rgba(129, 7, 7, 0)";
    })
})

sizeBox.placeholder = pixelCount;
gridListener()