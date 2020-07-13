// Code for DOM Manipulation

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
                    console.log(player2GameBoard)
                } else if (player1GameBoard.gameFinishedCheck() === true) {
                    console.log('GAME OVER, COMPUTER HAS WON!!')
                    console.log(player1GameBoard)
                }
            })
        }
    }
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
            }
        }
    }
};

export {
    addOnclicks,
    updateBoardDisplay,
}
