class Board {
    constructor (n) {
        this.size = n;
        const temp = Array.from({length: n}).fill("_");
        this.grid = []
        for (let i = 0; i < n; i++){
            this.grid.push(temp.deepDup());
        }
    }

    empty (pos) {
        return (this.grid[pos[0]][pos[1]] === "_");
    }

    render () {
        for (let i = 0; i < this.size; i++) {
            console.log(this.grid[i].join(" "));
        }
    }

    anyAvailablePositions () {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.grid[i][j] == "_") {
                    return true;
                }
            }
        }
        return false;
    }

    placeMark (pos, mark) {
        if (this.empty(pos)){
            this.grid[pos[0]][pos[1]] = mark;
            this.prevMove = pos;
            return true;
        }else{
            return false;
        }
    }

    won_horizonatal (mark) {
        for (let i = 0; i < this.size; i++) {
            let temp = true;
            for (let j = 0; j < this.size; j++) {
                temp = temp && (this.grid[i][j] === mark);
            }
            if (temp) return true;
        }
        return false;
    }

    won_vertical (mark) {
        for (let i = 0; i < this.size; i++) {
            let temp = true;
            for (let j = 0; j < this.size; j++) {
                temp = temp && (this.grid[j][i] === mark);
            }
            if (temp) return true;
        }
        return false;
    }

    won_diagonal (mark) {
        let temp = true;
        let temp2 = true;
        for (let i = 0; i < this.size; i++) {
            temp = temp && (this.grid[i][i] === mark);
            temp2 = temp2 && (this.grid[i][this.size - i - 1] === mark);
        }
        if (temp || temp2) return true;
        return false;
    }

    won (mark) {
        return (this.won_vertical(mark) || this.won_diagonal(mark) || this.won_horizonatal(mark));
    }

    // winner () {

    // }

    dup () {
        const dupedBoard = new Board(this.size);
        dupedBoard.grid = this.grid.deepDup();
        return dupedBoard; 
    }
};

Array.prototype.deepDup = function() {
    if (this.length === 1){
        return [this[0]];
    }
    return this.map(function(el) {
        if (el instanceof Array){
            return el.deepDup();
        }else{
            return el;
        }
    });
};

// const board = new Board(3);
// board.placeMark([1,1],"X");
// board.placeMark([2,2],"X");
// board.placeMark([0,1],"X");
// console.log(board.grid);
// // console.log(board.empty([0,0]));
// // console.log(board.empty([0,1]));
// console.log(board.won_horizonatal("X"));
// console.log(board.won_vertical("X"));
// console.log(board.won_diagonal("X"));
// board.render();

// console.log([0,5,7,[3,5,6]].deepDup())

module.exports = Board;