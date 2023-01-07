/* 

  - Create 16x16 grid of divs within "container" div
  - idea
    - create an array
    - loop values in there up to 255
    - reference the array values in a function
    - assign the parameter as variable to increment

*/

const containerDiv = document.querySelector("#container");
const varArray = [];

let i = 0;
while (i < 255) {
  varArray[i] = `div${i}`;
  i++;
};

function createDivFromArray(arrayValue) {
  const arrayValue = document.createElement("div");
};
