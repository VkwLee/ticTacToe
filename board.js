/*  game board of 3 x 3
	two players: X and O
	X goes first, the players take turns after each move
	making a move is marking an empty cell on the game board; you cannot select a cell that is not empty
	the game ends if:
	either player has 3 cells in a row, column or diagonal (note: either diagonal!): that player wins
	no valid moves are possible (i.e. the board is full): the game is a draw
*/

const table = require('console.table');

class Board {

	constructor(){

		this.board = [
			[null,null,null],
			[null,null,null],
			[null,null,null]
		];
	}

	iterate() {
		let rows = [] ;
		let columns = [];
		for(let row = 0; row < this.board.length; row++) {
			rows.push(row);
		}
		for (let column = 0; column < this.board[0].length; column++){
			columns.push(column);	
		}
		return [rows, columns];
	}

	draw() {

		console.table(this.board);
	}
}

module.exports = Board;


