import { KnightsTravails } from "./app.js";

const renderBoard = () => {
  let color = "black";
  const boardBox = document.getElementById("game-board");
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
    updateMoves(getInput().startPos, getInput().endPos);
  });
};

const getInput = () => {
  const inputStart = document.getElementById("start-input").value;
  const inputEnd = document.getElementById("end-input").value;
  let startPos = inputStart.split(",").map(Number);
  let endPos = inputEnd.split(",").map(Number);
  return { startPos, endPos };
};

const updateMoves = (start, end) => {
  let game = new KnightsTravails();
  game.knightsMove(start, end);
};

document.addEventListener("DOMContentLoaded", () => {
  renderBoard();
  submitBtn();
  getInput();
});
