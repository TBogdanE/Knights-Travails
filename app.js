class KnightsTravails {
  constructor() {
    this.path = {};
    //those are the single moves the knight could do
    this.possibleMoves = [
      [1, 2],
      [-2, -1],
      [-2, 1],
      [2, -1],
      [2, 1],
      [-1, -2],
      [1, -2],
      [-1, 2],
    ];
  }

  knightsMove(start, end) {
    //checks if the start position isn't outside the game board
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
      console.error("Invalid starting position");
      return;
    }
    //checks if the end position isn't outside the game board
    if (end[0] < 0 || end[0] > 7 || end[1] < 0 || end[1] > 7) {
      console.error("Invalid ending position");
      return;
    }

    //starts the searching of the path
    const path = this.findPath(start, end);
    console.log(`Start: ${start}; \n End: ${end};\n}`);
    return path;
  }

  //searches fotr the path
  findPath(start, end) {
    //list - stores all the postions that we've already checked
    let visited = [];
    let queque = [[start]];

    while (queque.length > 0) {
      //takes the first element of the queque array
      let currentPath = queque.shift();
      let position = currentPath[currentPath.length - 1];

      //checks if the start position is the same as end position
      if (start[0] === end[0] && start[1] === end[1]) {
        console.log("The start position is the same with the end one");
        return start;
      }

      //check's if the actual position is the searched position
      if (position[0] === end[0] && position[1] === end[1]) {
        this.path = currentPath;
        console.log("Path:", currentPath);
        console.log("this.path", this.path);
        return this.path;
      }

      //check's if the position wasn't already checked
      if (!visited.some((v) => v[0] === position[0] && v[1] === position[1])) {
        visited.push(position);

        //for all the elements in the possible moves array, will create new paths
        for (const pos of this.possibleMoves) {
          //creates the next position based on the possible moves
          let next = [position[0] + pos[0], position[1] + pos[1]];

          //checks if the new position is in the board space
          if (next[0] >= 0 && next[0] < 8 && next[1] >= 0 && next[1] < 8) {
            let newPath = [...currentPath, next];
            //pushes the new path to the queque
            queque.push(newPath);
            console.log(
              `...currentPath: ${currentPath} \n next: ${next} = [${position[0]}, ${position[1]}] + [${pos[0]} ${pos[1]}] \n New path: ${newPath} \n\n `
            );
          }
        }
      }
    }
    console.error("No path was found");
    return null;
  }
}

const getPath = (start, end) => {
  let game = new KnightsTravails();
  let path = game.knightsMove(start, end);
  console.log(path);
  return path;
};
//const game = new KnightsTravails();
//game.knightsMove([3, 3], [3, 0]);

export { getPath };
