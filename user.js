module.exports = class User {

	constructor(name){
		this.name = name;
		this.turn = 0;
	}

	makeMove(board,y,x) {

		if(isNaN(y) || isNaN(x) || x > 2 || y > 2 || x < 0 || y < 0) {
			console.log("Please give a valid coordinate!");
			return;
		} else if (board[y][x] === null) {
			board[y][x] = this.name;
			this.turn += 1;
		} else if (this.turn > 9) {
			console.log("Game has ended");
		}
		else {
			console.log("Please make another move! One that is still empty!");
		}	
	}
}

 