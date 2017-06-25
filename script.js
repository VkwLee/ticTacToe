class TicTacToe {

	constructor(input){

		this.board = [
			["x","o","x"],
			["o","o","o"],
			[null,null,"o"]
		];

	}
	
	gettingWinningPlayerByRow() {

		let player = null;
		let count = 0;
		
		for(let row = 0; row < this.board.length; row++){
			for (let field=0; field < this.board.length; field++){
				if (this.board[row][0] === this.board[row][1] && this.board[row][0] === this.board[row][2]) {
					player = this.board[row][0];	
				}
			}
		}
		console.log("player:" + player + " has won");
	}
}

let game1 = new TicTacToe();

// function readAllFields() {

// 	for(let i = 0; i < board.length; i++) {
// 	    let field = board[i];
// 	    for(let j = 0; j < field.length; j++) {
// 	        console.log("field[" + i + "][" + j + "] = " + field[j]);
// 	    }
// 	}
// }

//row
//diagonal
//column


