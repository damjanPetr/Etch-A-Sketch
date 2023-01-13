const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const range = document.querySelector(".range");
const displayrange = document.querySelector(".displayRange");
// GENELARE DIVS
function generateDivs(num) {
  for (let i = 0; i < num; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);
  }
}

// function generateDivsRange(num) {
//   for (let i = 0; i < num.value; i++) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     container.appendChild(card);
//   }
// }
range.addEventListener("mousemove", () => {
  container.innerHTML = "";
  const number = range.value;
  displayrange.textContent = number;

  generateDivs(number);
});
// MAKE grid
btn.addEventListener("click", (e) => {
  container.innerHTML = "";
  const promp = prompt("Enter number of rows");
  if (promp <= 100) {
    generateDivs(promp);
  } else {
    alert("Please inter a number bellow 100");
  }
});
