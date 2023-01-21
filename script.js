const container = document.querySelector("#container");

function makeRows(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  for (let i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

const promptButton = document.querySelector("#prompt-button");
const blackButton = document.querySelector("#black-button");
const rainbowButton = document.querySelector("#rainbow-button");
makeRows(16, 16);

function createGridPrompt() {
  container.textContent = "";
  let gridNumber = prompt("Number of squares per side? Under 100 please");
  if (gridNumber > 100) {
    alert("Please keep it below 100");
  } else {
      makeRows(gridNumber, gridNumber);
  };
};

const gridItems = document.querySelectorAll(".grid-item");
const background = document.querySelector(".background");

blackButton.addEventListener("click", function (e) {
 for (let i = 0; i < gridItems.length; i++) {	
  gridItems[i].addEventListener("mouseover", function (e) { 
    gridItems[i].classList.add("background");
    });
  };
});

rainbowButton.addEventListener("mouseover", function (e) {
  for(let i = 0; i < gridItems.length; i++) {
    let rgbGenOne = Math.floor(Math.random() * 255);
    let rgbGenTwo = Math.floor(Math.random() * 255);
    let rgbGenThree = Math.floor(Math.random() * 255);
    gridItems[i].addEventListener("mouseover", function (e) {
      gridItems[i].style.cssText = `background-color: rgb(${rgbGenOne},${rgbGenTwo},${rgbGenThree});`;
    });
  };
});

promptButton.addEventListener("click", createGridPrompt);

