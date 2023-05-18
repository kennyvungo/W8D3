class ComputerPlayer {
    constructor (mark) {
        this.mark = mark;
    }

    nextPossibleBoards (mark, board) {
        const result = [];
        for (let i = 0; i < board.size; i++) {
            for (let j = 0; j < board.size; j++) {
                if (board.empty([i,j])) {
                    let temp = board.dup();
                    temp.placeMark([i,j], mark);
                    result.push(temp);
                }
            }
        }
        return result;
    }

    winningBoard (mark, board) {
        // if (!board.anyAvailablePositions) {
        //     if (board.won(this.mark)) {
        //         return true;
        //     }else {
        //         return false;
        //     }
        if (board.won(this.mark)) {
            return true;
        }else if (board.won("X")) {
            return false;
        } else if (!board.anyAvailablePositions()) {
            return false;
        // }
        // }
        } else {
            let childrenBoards = this.nextPossibleBoards(mark, board);
            let nextMark = (mark === "X") ? "O" : "X";

            if (mark === this.mark) {
                for (let i = 0; i < childrenBoards.length ; i++) {
                    if (this.winningBoard(nextMark, childrenBoards[i])) {
                        return true;
                    }
                }
                return false;
            } else {
                let temp = true;
                for (let i = 0; i < childrenBoards.length ; i++) {
                    temp = temp && this.winningBoard(nextMark, childrenBoards[i]);
                }
                return temp;
            }

        }
    }

    losingBoard (mark, board) {
        // if (!board.anyAvailablePositions) {
        if (board.won("X")) {
            return true;
        } else if (board.won(this.mark)) {
            return false;
        } else if (!board.anyAvailablePositions()) {
            // console.log("is a draw!!")
            return false;
        // }
            // if (board.won("X")) {
            //     return true;
            // } else {
            //     return false;
            // }
        } else {
            let childrenBoards = this.nextPossibleBoards(mark, board);
            let nextMark = (mark === "X") ? "O" : "X";

            if (mark !== this.mark) {
                for (let i = 0; i < childrenBoards.length ; i++) {
                    if (this.losingBoard(nextMark, childrenBoards[i]) === true) {
                        // childrenBoards[i].render();
                        // console.log("this is why we lost right here.")
                        return true;
                    }
                }
                return false;
            } else {
                let temp = true;
                for (let i = 0; i < childrenBoards.length ; i++) {
                    temp = temp && this.losingBoard(nextMark, childrenBoards[i]);
                }
                return temp;
            }
        }
    }

    getPosition (board) {
        const nextBoards = this.nextPossibleBoards(this.mark, board);
        const wins = [];
        const neutrals = [];
        // console.log("made it this far")
        // nextBoards.forEach((nextB)=> {
        //     nextB.render();
        //     console.log(this.winningBoard("X", nextB));
        //     console.log(this.losingBoard("X", nextB));
        //     });
        // nextBoards[0].render();
        // console.log(this.losingBoard("X", nextBoards[0]));
        for (let i = 0; i < nextBoards.length; i++) {
            if (this.winningBoard("X", nextBoards[i])) {
                wins.push(nextBoards[i].prevMove)
            }
        }

        for (let i = 0; i < nextBoards.length; i++) {
            if (this.losingBoard("X", nextBoards[i]) === false) {
                neutrals.push(nextBoards[i].prevMove)
            }
        }
        // console.log(wins, "wins");
        // console.log(neutrals, "neutrals")
        if (wins != 0) {
            let idx = Math.floor(Math.random() * wins.length);
            return wins[idx];
        }
        if (neutrals != 0) {
            let idx = Math.floor(Math.random() * neutrals.length);
            // console.log(idx, "idx");
            // console.log(neutrals[idx], "pos");
            return neutrals[idx];
        }
        let idx = Math.floor(Math.random() * nextBoards.length);
        return nextBoards[idx];
    }

}

module.exports = ComputerPlayer;