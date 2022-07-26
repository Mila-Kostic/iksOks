// alert('Happy codding!');

let container = document.querySelector(".container");
let symbol = "X";

createGrid();

let boxes = document.querySelectorAll(".box");

let lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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
  lines.forEach((line) => {
    let box1 = boxes[line[0]];
    let box2 = boxes[line[1]];
    let box3 = boxes[line[2]];

    if (
      box1.innerHTML === box2.innerHTML &&
      box1.innerHTML === box3.innerHTML &&
      box1.innerHTML !== ""
    ) {
      box1.style.background = "tomato";
      box2.style.background = "tomato";
      box3.style.background = "tomato";
      stopGame();
    }
  });
}

function stopGame() {
  boxes.forEach((box) => {
    box.removeEventListener("click", insertSymbol);
    //alert(symbol);
    console.log(symbol);
  });
}
// first manual way
// function checkWins() {
//   if (
//     boxes[0].innerHTML === boxes[1].innerHTML &&
//     boxes[0].innerHTML === boxes[2].innerHTML &&
//     boxes[0].innerHTML !== ""
//   ) {
//     console.log("Pogodak");
//     boxes[0].style.background = "tomato";
//     boxes[1].style.background = "tomato";
//     boxes[2].style.background = "tomato";
//   }  if (
//     boxes[3].innerHTML === boxes[4].innerHTML &&
//     boxes[3].innerHTML === boxes[5].innerHTML &&
//     boxes[3].innerHTML !== ""
//   )
// }

function createGrid() {
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += '<div class="box"></div>';
  }
  container.innerHTML = text;
}
