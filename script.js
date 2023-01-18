const container = document.querySelector("#container");

function makeRows(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  for (let i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div");
    cell.textContent = (i + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16,16);

const gridItems = document.querySelectorAll(".grid-item");

for (let i = 0; i < (gridItems.length); i++) {	
  gridItems[i].addEventListener("mouseover", function (e) { 
  gridItems[i].classList.toggle("black-background");
    });
};
