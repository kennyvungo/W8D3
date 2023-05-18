const { stdin } = require("process");
const Board = require("./board");
const HumanPlayer = require("./player")
const ComputerPlayer = require("./computer_player")
const rl = require("readline");
const reader = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Game {
    constructor (n, type) {
        this.board = new Board(n);
        this.player1 = new HumanPlayer("X");
        if (type === 'c') {
            this.player2 = new ComputerPlayer("O");
        } else {
            this.player2 = new HumanPlayer("O");
        }
        this.currentPlayer = this.player1;
        this.board.render();
    }

    swapPlayer () {
        this.currentPlayer = (this.currentPlayer === this.player1) ? this.player2 : this.player1;
    }

    playGame () {
        if (this.currentPlayer instanceof HumanPlayer) {
            reader.question(`Enter a position for player with ${this.currentPlayer.mark}! Syntax like '4 9'`, input => {
                let positions = input.split(" ").map(ele => Number(ele));
                let placed = this.board.placeMark(positions, this.currentPlayer.mark);
                this.board.render();
                if (!placed) {
                    console.log("not a valid position.")
                    this.playGame();
                }else {
                    if (this.board.won(this.currentPlayer.mark)) {
                        console.log(`Player with ${this.currentPlayer.mark} has won the game`);
                        reader.close();
                    }else if (!this.board.anyAvailablePositions()) {
                        console.log('This game is a draw');
                        reader.close();
                    }else {
                        this.swapPlayer();
                        this.playGame();
                    }
                }
            })
        }else {
            let positions = this.currentPlayer.getPosition(this.board);
            this.board.placeMark(positions, this.currentPlayer.mark);
            this.board.render();
            if (this.board.won(this.currentPlayer.mark)) {
                console.log(`Player with ${this.currentPlayer.mark} has won the game`);
                reader.close();
            }else if (!this.board.anyAvailablePositions()) {
                console.log('This game is a draw');
                reader.close();
            }else {
                this.swapPlayer();
                this.playGame();
            }
        }
    }
}

reader.question("computer or human opponent? c for computer h for human:", input =>{
    if (input === 'c') {
        const game = new Game(3, 'c');
        game.playGame();
    } else {
        reader.question("what size board?", inputs=> {
            const game = new Game(inputs, 'h');
            game.playGame();
        });
    }
});



