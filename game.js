//this is the main
const table = require('console.table');
const prompt = require('syncprompt');
const user = require('./user.js');
const board = require('./board.js');


module.exports = class Game {

	constructor(){
		this.winner = null;
		this.totalTurns = 0;
		this.player1 = null;
		this.player2 = null;
		this.gameBoard = null;
	}

	gameStart () {

		this.player1 = new user('X');
		this.player2 = new user('O');
		this.gameBoard = new board();

		if (this.player1 && this.player2 && this.gameBoard) {
			this.isPlaying = true;
			this.gameBoard.draw();
		} else {
			console.log("Can't play TicTacToe without players or board!");
			this.isPlaying = false;
		}
	}

	updateToTalTurns () {
		this.totalTurns = this.player1.turn + this.player2.turn + 1 ;
	}

	isGameOver(){
		return this.totalTurns >= 9 || this.winner !== null;
	}

	printGameStatus() {
		if(this.totalTurns >= 9 ) {
			console.log("Game is over with a draw");
		}

		if(this.winner !== null && this.winner !== undefined) {
			console.log("Player: " + this.winner + " has WON!!!!!!!");
			console.log("Game is over");
		}
	}

	updateWinnerStatus() {
		let result = this.gameBoard.iterate();
		let rows = result[0];
		let columns = result[1];
		
		for (let row of rows) {
			this.updateWinnerStatusByRow(row);
		}

		for (let column of columns) {
			this.updateWinnerStatusByColumn(column);
		}

		this.updateWinnerStatusByDiagonal();		
	}

	updateWinnerStatusByRow(row) {
		if (this.gameBoard.board[row][0] !== null && this.gameBoard.board[row][0] === this.gameBoard.board[row][1] &&
			this.gameBoard.board[row][0] === this.gameBoard.board[row][2]) {
			this.winner = this.gameBoard.board[row][0];	
		}		
	}

	updateWinnerStatusByColumn(column) {
		if(this.gameBoard.board[0][column] !== null && this.gameBoard.board[0][column] === this.gameBoard.board[1][column] &&
		   this.gameBoard.board[0][column] === this.gameBoard.board[2][column]){
			this.winner = this.gameBoard.board[0][column];
		}
	}

	updateWinnerStatusByDiagonal() {
		if(this.gameBoard.board[0][0] !== null && this.gameBoard.board[0][0] === this.gameBoard.board[1][1] &&
		   this.gameBoard.board[0][0] === this.gameBoard.board[2][2]){
		   this.winner = this.gameBoard.board[0][0];
		}
		if(this.gameBoard.board[0][2] !== null && this.gameBoard.board[0][2] === this.gameBoard.board[1][1] &&
		   this.gameBoard.board[0][2] === this.gameBoard.board[2][0]){
		   this.winner = this.gameBoard.board[0][2];
		}
	}	
}



