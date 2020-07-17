// Code for DOM Manipulation
import { handleFormSubmission } from "./battleship-game-logic";

const resetGameBoards = () => {
    // Left Board, Player 1
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = document.getElementById(i+'-player1-'+j);

            if (gameBoardSquare.classList.contains('ship-has-been-hit')) {
                gameBoardSquare.classList.remove('ship-has-been-hit');
            }
            if (gameBoardSquare.classList.contains('hit-and-miss')) {
                gameBoardSquare.classList.remove('hit-and-miss');
            }
        }
    }

    // Right Board, Player 2 (Computer)
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = document.getElementById(i+'-computer-'+j);

            if (gameBoardSquare.classList.contains('ship-has-been-hit')) {
                gameBoardSquare.classList.remove('ship-has-been-hit');
            }
            if (gameBoardSquare.classList.contains('hit-and-miss')) {
                gameBoardSquare.classList.remove('hit-and-miss');
            }
        }
    }
};

const addOnclicks = (player1, player2GameBoard, player2, player1GameBoard) => {
    // Add onclick for each spot on the game board
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = document.getElementById(i+'-computer-'+j);
            
            gameBoardSquare.addEventListener('click', () => {
                if (player2GameBoard.board[i][j].hitAndMiss === false && player2GameBoard.board[i][j].shipHasBeenHit === false) {
                        player1.attack(i, j);
                        updateBoardDisplay(player2GameBoard, 'computer');
        
                        // Run computer attack here
                        player2.computerAttack();
                        updateBoardDisplay(player1GameBoard, 'player1');
                }
                // Run game over check
                if (player2GameBoard.gameFinishedCheck() === true) {
                    console.log('GAME OVER, PLAYER 1 HAS WON!!');
                    alert('GAME OVER, PLAYER 1 HAS WON!!');
                    console.log(player2GameBoard);
                    setTimeout(function(){ resetGameBoards(); }, 1000);
                } else if (player1GameBoard.gameFinishedCheck() === true) {
                    console.log('GAME OVER, COMPUTER HAS WON!!')
                    alert('GAME OVER, COMPUTER HAS WON!!')
                    console.log(player1GameBoard);
                    setTimeout(function(){ resetGameBoards(); }, 1000);
                }
            });

        }
    }
};

const addOnclicksForFormSubmissions = (gameboard) => {
    let submitDestroyerButton = document.getElementById("submit-destoyer-button");
    let destoyerYCoordinate = document.getElementById("y-number-destroyer");
    let destoyerXCoordinate = document.getElementById("x-number-destroyer");
    let destoyerIsHorizontal = document.getElementById("t1-destroyer");

    submitDestroyerButton.addEventListener("click", function() {
        handleFormSubmission(gameBoard, 2, destoyerYCoordinate, destoyerXCoordinate, destoyerIsHorizontal, 'destroyer');
    });
};

// This will run after each attack on a board
const updateBoardDisplay = (gameBoard, playerName) => {
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = document.getElementById(i+'-' + playerName + '-'+j);

            if (gameBoard.board[i][j].shipHasBeenHit === true) {
                gameBoardSquare.classList.add('ship-has-been-hit');
            } else if (gameBoard.board[i][j].hitAndMiss === true) {
                gameBoardSquare.classList.add('hit-and-miss');
            } else {
                gameBoardSquare.classList.add('game-board-square');
            }
        }
    }
};

export {
    addOnclicks,
    resetGameBoards,
    addOnclicksForFormSubmissions
}
