class KnightsTravails {
  constructor() {
    this.path = {};
    this.possibleMoves = [
      [-2, -1],
      [-2, 1],
      [2, -1],
      [2, 1],
      [-1, -2],
      [1, -2],
      [-1, 2],
      [1, 2],
    ];
  }

  knightsMove(start, end) {
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
      console.error("Invalid starting position");
      return;
    }
    if (end[0] < 0 || end[0] > 7 || end[1] < 0 || end[1] > 7) {
      console.error("Invalid ending position");
      return;
    }
    const graph = this.createGraph();
    const path = this.findPath(start, end, graph);
    console.log(`Start: ${start}; \n End: ${end};\n}`);
  }

  createGraph() {
    let graph = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push([]);
      }
      graph.push(row);
    }
    return graph;
  }

  findPath(start, end, graph) {
    let visited = [];
    let queque = [[start]]; // Note: Each element of the queue is now an array representing a path
    let path = [];

    while (queque.length > 0) {
      let currentPath = queque.shift();
      let position = currentPath[currentPath.length - 1];

      if (position[0] === end[0] && position[1] === end[1]) {
        console.log("Path:", currentPath);
        return currentPath;
      }

      if (!visited.some((v) => v[0] === position[0] && v[1] === position[1])) {
        visited.push(position);

        for (const pos of this.possibleMoves) {
          let next = [position[0] + pos[0], position[1] + pos[1]];
          let newPath = [...currentPath, next];
          queque.push(newPath);
        }
      }
    }

    return null; // If the loop completes without finding the destination, there's no path
  }
}

const game = new KnightsTravails();
game.knightsMove([3, 3], [7, 7]);
