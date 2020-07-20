// Code for DOM Manipulation
import { handleFormSubmission } from "./battleship-game-logic";

const resetGameBoards = () => {
    // Left Board, Player 1
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = document.getElementById(i+'-player1-'+j);

            gameBoardSquare.innerHTML = '_';

            if (gameBoardSquare.classList.contains('ship-has-been-hit')) {
                gameBoardSquare.classList.remove('ship-has-been-hit');
            }
            if (gameBoardSquare.classList.contains('hit-and-miss')) {
                gameBoardSquare.classList.remove('hit-and-miss');
            }
            if (gameBoardSquare.classList.contains('has-a-ship')) {
                gameBoardSquare.classList.remove('has-a-ship');
            }
        }
    }

    // Right Board, Player 2 (Computer)
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = document.getElementById(i+'-computer-'+j);

            gameBoardSquare.innerHTML = '_';

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

// Add onclick for the Add Ship Forms to place the ships
const addOnclicksForFormSubmissions = (gameBoard) => {
    let submitDestroyerButton = document.getElementById("submit-destoyer-button");
    let submitSubmarineButton = document.getElementById("submit-submarine-button");
    let submitCruiserButton = document.getElementById("submit-cruiser-button");
    let submitBattleshipButton = document.getElementById("submit-battleship-button");
    let submitAircraftButton = document.getElementById("submit-aircraft-button");

    // Destroyer Submit Fn
    submitDestroyerButton.addEventListener("click", function() {
        let destroyerYCoordinate = parseInt(document.getElementById("y-number-destroyer").value);
        let destroyerXCoordinate = parseInt(document.getElementById("x-number-destroyer").value);
        let destroyerIsHorizontal = document.getElementById("t1-destroyer").value;

        if (destroyerIsHorizontal === 'Horizontal') {
            destroyerIsHorizontal = true;
        } else {
            destroyerIsHorizontal = false;
        }

        handleFormSubmission(gameBoard, 2, destroyerYCoordinate, destroyerXCoordinate, destroyerIsHorizontal, 'destroyer');
        updateBoardDisplay(gameBoard, 'player1');
    });

    // Submarine Submit Fn
    submitSubmarineButton.addEventListener("click", function() {
        let submarineYCoordinate = parseInt(document.getElementById("y-number-submarine").value);
        let submarineXCoordinate = parseInt(document.getElementById("x-number-submarine").value);
        let submarineIsHorizontal = document.getElementById("t1-submarine").value;

        if (submarineIsHorizontal === 'Horizontal') {
            submarineIsHorizontal = true;
        } else {
            submarineIsHorizontal = false;
        }

        handleFormSubmission(gameBoard, 3, submarineYCoordinate, submarineXCoordinate, submarineIsHorizontal, 'submarine');
        updateBoardDisplay(gameBoard, 'player1');
    });

    // Cruiser Submit Fn
    submitCruiserButton.addEventListener("click", function() {
        let cruiserYCoordinate = parseInt(document.getElementById("y-number-cruiser").value);
        let cruiserXCoordinate = parseInt(document.getElementById("x-number-cruiser").value);
        let cruiserIsHorizontal = document.getElementById("t1-cruiser").value;
        
        if (cruiserIsHorizontal === 'Horizontal') {
            cruiserIsHorizontal = true;
        } else {
            cruiserIsHorizontal = false;
        }

        handleFormSubmission(gameBoard, 3, cruiserYCoordinate, cruiserXCoordinate, cruiserIsHorizontal, 'cruiser');
        updateBoardDisplay(gameBoard, 'player1');
    });

    // Battleship Submit Fn
    submitBattleshipButton.addEventListener("click", function() {
        let battleshipYCoordinate = parseInt(document.getElementById("y-number-battleship").value);
        let battleshipXCoordinate = parseInt(document.getElementById("x-number-battleship").value);
        let battleshipHorizontal = document.getElementById("t1-battleship").value;
        
        if (battleshipHorizontal === 'Horizontal') {
            battleshipHorizontal = true;
        } else {
            battleshipHorizontal = false;
        }

        handleFormSubmission(gameBoard, 4, battleshipYCoordinate, battleshipXCoordinate, battleshipHorizontal, 'battleship');
        updateBoardDisplay(gameBoard, 'player1');
    });

    // Aircraft Submit Fn
    submitAircraftButton.addEventListener("click", function() {
        let aircraftYCoordinate = parseInt(document.getElementById("y-number-aircraft").value);
        let aircraftXCoordinate = parseInt(document.getElementById("x-number-aircraft").value);
        let aircraftHorizontal = document.getElementById("t1-aircraft").value;
        
        if (aircraftHorizontal === 'Horizontal') {
            aircraftHorizontal = true;
        } else {
            aircraftHorizontal = false;
        }

        handleFormSubmission(gameBoard, 5, aircraftYCoordinate, aircraftXCoordinate, aircraftHorizontal, 'aircraft carrier');
        updateBoardDisplay(gameBoard, 'player1');
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

            if (gameBoard.board[i][j].hasShip === true && playerName == 'player1'){
                gameBoardSquare.classList.add('has-a-ship');
                let shipName = gameBoard.board[i][j].shipID;

                gameBoardSquare.innerHTML = shipName[0];
            }
        }
    }
};

const setUpComputerGameboard = (gameBoard) => {
    let randomValue = Math.floor(Math.random() * 2 + 1);

    if (randomValue % 2 === 0) {
        gameBoard.addShip(2, 1, 1, true, 'destroyer');
        gameBoard.addShip(3, 3, 1, true, 'submarine');
        gameBoard.addShip(3, 4, 2, true, 'cruiser');
        gameBoard.addShip(4, 2, 8, false, 'battleship');
        gameBoard.addShip(5, 6, 4, true, 'aircraft carrier');
    }
    else {
        gameBoard.addShip(2, 1, 5, false, 'destroyer');
        gameBoard.addShip(3, 3, 4, true, 'submarine');
        gameBoard.addShip(3, 8, 3, true, 'cruiser');
        gameBoard.addShip(4, 5, 7, false, 'battleship');
        gameBoard.addShip(5, 1, 8, true, 'aircraft carrier');
    }
};

export {
    addOnclicks,
    resetGameBoards,
    addOnclicksForFormSubmissions,
    setUpComputerGameboard,
}
