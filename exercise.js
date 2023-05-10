const buttonOne = document.querySelector("button");
const buttonTwo = document.getElementById("change-bg");

const paragraphOne = document.body.children[2].children[1];
const paragraphThree = document.body.children[2].children[3];

function removeParagraph() {
  paragraphThree.remove();
}
function changeColor(event) {
  paragraphOne.className = "blue";
}
buttonOne.addEventListener("click", removeParagraph);
buttonTwo.addEventListener("click", changeColor);
