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

    console.log(
      `Start: ${start}; \n End: ${end};\n Graph: ${JSON.stringify(graph)}`
    );
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
    console.log("gr", graph[1][2]);

    return graph;
  }
}

const game = new KnightsTravails();
game.knightsMove([3, 3], [4, 1]);
