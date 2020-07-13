// Code for DOM Manipulation

const addOnclicks = (player1, player2GameBoard, player2, player1GameBoard) => {
    // Add onclick for each spot on the game board
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = document.getElementById(i+'-computer-'+j);
            
            gameBoardSquare.addEventListener('click', () => {
                if (player2GameBoard.board[i][j].hitAndMiss === false && player2GameBoard.board[i][j].shipHasBeenHit === false) {
                    player1.attack(i, j);
                    console.log(player2GameBoard);
                    updateBoardDisplay(player2GameBoard, 'computer')
    
                    // Run computer attack here
                    player2.computerAttack()
                    updateBoardDisplay(player1GameBoard, 'player1')
                }
            })
        }
    };
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
