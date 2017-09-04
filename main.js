const table = require('console.table');
const prompt = require('syncprompt');
const game = require('./game.js');

let tictactoe = new game();

tictactoe.gameStart();

while (!tictactoe.isGameOver()) { // isGameOver
	
	tictactoe.updateToTalTurns();

	console.log("\nTurn" + tictactoe.totalTurns + "\n");

	if(tictactoe.totalTurns % 2 !== 0) {
		console.log("Player " +  tictactoe.player1.name + " lets make your move!\n")
		let y = prompt('Give y coordinate --> ');
		let x = prompt('Give x coordinate --> ');
		tictactoe.player1.makeMove(tictactoe.gameBoard.board,y,x);		
	} else {
		console.log("Player " +  tictactoe.player2.name + " lets make your move!\n");
		let y = prompt('Give y coordinate --> ');
		let x = prompt('Give x coordinate --> ');
		tictactoe.player2.makeMove(tictactoe.gameBoard.board,y,x);
	}

	tictactoe.gameBoard.draw();
	tictactoe.updateWinnerStatus();	//updateWinnerStatus
}

tictactoe.printGameStatus();



