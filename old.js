const container = document.querySelector(".container");
const clearBtn = document.getElementById("clearBtn");
const colorBtn = document.querySelector(".colorBtn");
const whiteBtn = document.querySelector(".whiteBtn");
const blackBtn = document.querySelector(".blackBtn");
//let mode= "white";
let size = 16;


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
  e.target.style.backgroundColor = "blanchedalmond";}

clearBtn.addEventListener("click", function clear() {
  container.innerHTML="";
  let newSize= prompt("Choose the size of your next canvas")
  let size = parseInt(newSize)
  makeGrid(size)
 
});

makeGrid(size);


