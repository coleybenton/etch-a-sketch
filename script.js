/* 

  - Create 16x16 grid of divs within "container" div
  - idea
    - create an array
    - loop values in there up to 255
    - reference the array values in a function
    - assign the parameter as variable to increment

*/

// let gridTotal = prompt(number) then number x number
const containerDiv = document.querySelector("#container");
const varArray = [];

let i = 0;
while (i < 255) {
  varArray[i] = `div${i}`;
  i++;
};

function createDivFromArray(arrayValue) {
  arrayValue = document.createElement("div");
  containerDiv.appendChild(arrayValue);
};

for (let i = 0; i < 255; i++) {
  createDivFromArray(varArray[i]);
};

const startingPointDiv = containerDiv.firstElementChild;

for (let i = 0; i < 255; i++) {
  let targetDiv = startingPointDiv.nextElementSibling;
}
