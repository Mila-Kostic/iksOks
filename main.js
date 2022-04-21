// alert('Happy codding!');

let container = document.querySelector('.container');
let symbol = "X";

createGrid();

let boxes = document.querySelectorAll('.box');

boxes.forEach(box=>{
    box.addEventListener('click',insertSymbol)
})

function createGrid() {
    let text = '';
    for (let i = 0; i < 9; i++) {
        text += '<div class="box"></div>'
        
    }
    container.innerHTML = text;
}

function insertSymbol(){
    //this.innerHTML = "X";
    this.removeEventListener('click', insertSymbol);
    (symbol === "X") ? symbol = "0" : symbol = "X";
    this.innerHTML = symbol;
}