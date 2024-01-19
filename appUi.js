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

const updateMoves = (path, index = 0) => {
  let pos = path[index];

  let box = document.getElementById(`${pos[0]}${pos[1]}`);
  if (index === 0) {
    box.textContent = "Start";
  } else if (index === path.length - 1) {
    box.textContent = "End";
  } else {
    box.textContent = index;
  }

  box.style.backgroundColor = "red";

  setTimeout(() => {
    updateMoves(path, index + 1);
  }, 500); // 0.5 second delay
};

document.addEventListener("DOMContentLoaded", () => {
  renderBoard();
  submitBtn();
  getInput();
});
