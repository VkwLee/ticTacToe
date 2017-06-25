/*  game board of 3 x 3
	two players: X and O
	X goes first, the players take turns after each move
	making a move is marking an empty cell on the game board; you cannot select a cell that is not empty
	the game ends if:
	either player has 3 cells in a row, column or diagonal (note: either diagonal!): that player wins
	no valid moves are possible (i.e. the board is full): the game is a draw
*/

//row
//diagonal
//column

class TicTacToe {

	constructor(){

		this.board = [
			[null,null,null],
			[null,null,null],
			[null,null,null]
		];

		this.turn = 1;
		this.player = null;
		this.winner = null;
		console.table(this.board);
		console.log("Turn 1");
		console.log("Player X lets make your first move!");
	}


	
	gettingWinningPlayerByRow() {

		
		let count = 0;
		
		for(let row = 0; row < this.board.length; row++){
			for (let field=0; field < this.board.length; field++){
				if (this.board[row][0] === this.board[row][1] && this.board[row][0] === this.board[row][2]) {
					this.winner = this.board[row][0];	
				}
			}
		}

		if(this.winner !== null){
			console.log("Player:" + this.winner + " has won");
		}
		
	}

	gettingWinningPlayerByColumn(){

	}

	gettingWinningPlayerByDiagonal(){
		
	}

	makeMove(y,x) {	
		if (this.board[y][x] === null) {
			this.player = (this.player === "X") ? "O" : "X";
			this.turn += 1;
			this.board[y][x] = this.player;
			console.table(this.board);
		} else {
			console.log("Please make another move! One that is still empty!")
		}
		
		if(this.turn <= 9 ) {
			this.player = (this.player === "X") ? "O" : "X";
			console.log("Turn: "+ this.turn + "\n" +"Player "+this.player+" lets make your move!");
			this.player = (this.player === "X") ? "O" : "X";
			this.getWinner();
		} else {
			this.isGameOver();
		}

	}

	getWinner(){
		this.gettingWinningPlayerByRow();
	}

	isGameOver(){
		console.log("game is over");
	}
}

let game = new TicTacToe();






