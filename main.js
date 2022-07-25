// alert('Happy codding!');

let container = document.querySelector(".container");
let symbol = "X";

createGrid();

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", insertSymbol);
});

function insertSymbol() {
  //this.innerHTML = "X";
  this.removeEventListener("click", insertSymbol);
  symbol === "X" ? (symbol = "0") : (symbol = "X");
  this.innerHTML = symbol;
  checkWins();
}
function checkWins() {
  if (
    boxes[0].innerHTML === boxes[1].innerHTML &&
    boxes[0].innerHTML === boxes[2].innerHTML &&
    boxes[0].innerHTML !== ""
  ) {
    console.log("Pogodak");
    boxes[0].style.background = "tomato";
    boxes[1].style.background = "tomato";
    boxes[2].style.background = "tomato";
  }
}
function createGrid() {
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += '<div class="box"></div>';
  }
  container.innerHTML = text;
}
