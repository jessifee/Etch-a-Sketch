const container = document.querySelector(".container");
const clearBtn = document.getElementById("clearBtn");
const colorBtn = document.getElementById("colorBtn");
const whiteBtn = document.getElementById("whiteBtn");
const blackBtn = document.getElementById("blackBtn");

let mode = "white";
let size = 16;

colorBtn.addEventListener("click", function color() {
  mode = "color";
});
whiteBtn.addEventListener("click", function color() {
  mode = "white";
});
blackBtn.addEventListener("click", function color() {
  mode = "black";
});

//create grid
function makeGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.addEventListener("mousemove", changeColor);

    container.appendChild(cell);
  }
}

//changes color for targeted / mousemoved cells
function changeColor(e) {
  if (mode === "white") {
    e.target.style.backgroundColor = "blanchedalmond";
  } else if (mode === "color") {
    let colors = [
      "#C23B23",
      "#F39A27",
      "#EADA52",
      "#03C03C",
      "#579ABE",
      "#976ED7",
    ];
    const randomNumber = Math.floor(Math.random() * 6);
    let randomColor = colors[randomNumber];
    e.target.style.backgroundColor = randomColor;
  } else if (mode === "black") {
    e.target.style.backgroundColor = "black";
  }
}

// reset the canvas, user chooses new size
clearBtn.addEventListener("click", function clear() {
  container.innerHTML = "";
  let newSize = prompt("Choose the size of your next canvas");
  let size= Math.min(Math.max(parseInt(newSize), 1), 100);
  //let size = parseInt(newSize); //newSize is a string, parseInt changes it to a number
  makeGrid(size);
});

makeGrid(size);
