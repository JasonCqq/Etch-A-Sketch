function createGrid(gridHeight, gridWidth){
    document.getElementById("grid-container").innerHTML = '';
    for (let i = 1; i <= gridWidth; i++) {
        const rowCreate = document.createElement("div");
        rowCreate.setAttribute('id', `row row${i}`)
        document.getElementById("grid-container").appendChild(rowCreate);
        for (let i = 0; i <= gridHeight; i++) {
            const divCreate = document.createElement("div");
            divCreate.setAttribute('class', `test test${i}`);
            divCreate.appendChild(document.createTextNode(""));
            rowCreate.appendChild(divCreate);
        }
    }
}

function hoverEffect(){
    const hover = Array.from(document.querySelectorAll('.test'));
    for (const div of hover) {
        div.addEventListener("mouseover", function() {
        this.style.backgroundColor = 'red';
        });
    }
}

function changeSize(){
    document.getElementById("submit-btn").addEventListener("click", function(event) {
        event.preventDefault();
        let height = parseInt(document.getElementById("grid-height").value);
        let width = parseInt(document.getElementById("grid-width").value);
        createGrid(height, width);
    });
}

changeSize();
hoverEffect();

