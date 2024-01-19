import { getPath } from "./app.js";

const renderBoard = () => {
  let color = "black";
  const boardBox = document.getElementById("game-board");

  while (boardBox.firstChild) {
    boardBox.removeChild(boardBox.firstChild);
  }

  for (let i = 0; i < 8; i++) {
    color = color === "black" ? "white" : "black";
    for (let j = 0; j < 8; j++) {
      color = color === "black" ? "white" : "black";
      boardBox.appendChild(createBox(i, j, color));
    }
  }
};

const createBox = (posY, posX, color) => {
  const box = document.createElement("div");
  box.id = `${posY}${posX}`;
  box.classList.add("box");
  box.style.backgroundColor = color;
  return box;
};

const submitBtn = () => {
  const submitBtn = document.getElementById("input-btn");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let path = getPath(getInput().startPos, getInput().endPos);
    renderBoard();
    updateMoves(path);
  });
};

const getInput = () => {
  const inputStart = document.getElementById("start-input").value;
  const inputEnd = document.getElementById("end-input").value;
  let startPos = inputStart.split(",").map(Number);
  let endPos = inputEnd.split(",").map(Number);
  return { startPos, endPos };
};

const updateMoves = (path) => {
  let counter = 0;
  for (let pos of path) {
    let box = document.getElementById(`${pos[0]}${pos[1]}`);
    if (counter === 0) {
      box.textContent = "Start";
      counter += 1;
    } else if (counter === path.length - 1) {
      box.textContent = "End";
    } else {
      box.textContent = counter;
      counter += 1;
    }
    box.style.backgroundColor = "red";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderBoard();
  submitBtn();
  getInput();
});
