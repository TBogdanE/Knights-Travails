const renderBoard = () => {
  let color = "black";
  const boardBox = document.getElementById("game-board");
  for (let i = 0; i < 8; i++) {
    color = (color === "black") ? "white" : "black";
    for (let j = 0; j < 8; j++) {
      boardBox.appendChild(createBox(i, j, color));
      color = (color === "black") ? "white" : "black";
    }
  }
};

const createBox = (posY, posX, color) => {
  console.log(posY, posX);
  const box = document.createElement("div");
  box.id = `${posY}${posX}`;
  console.log(box.id);
  box.classList.add("box");
  box.style.backgroundColor = color;
  return box;
};

renderBoard();
