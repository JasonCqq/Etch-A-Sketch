function createGrid(height, width){
    for (let i = 1; i <= width; i++) {
        const rowCreate = document.createElement("div");
        rowCreate.setAttribute('id', `row row${i}`)
        document.getElementById("grid-container").appendChild(rowCreate);
        for (let i = 0; i <= height; i++) {
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


createGrid(16, 32);
hoverEffect();


