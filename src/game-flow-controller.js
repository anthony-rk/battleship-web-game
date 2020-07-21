// Code for controlling the flow of the game. 
import { playerFactory, gameBoardFactory } from './battleship-game-logic';
import { addOnclicks, resetGameBoards, addOnclicksForFormSubmissions, setUpComputerGameboard } from './game-flow-DOM';

const setUpPlayerName = () => {
    let newPlayerName = prompt("What is your name?");
    return newPlayerName;
};

const gameFlowController = () => {
    // Run when START button clicked

    // Reset the board in case it is a second round
    resetGameBoards();

    // Set up Game Boards
    const player1Gameboard = gameBoardFactory();
    const player2Gameboard = gameBoardFactory();

    if (!!player1Gameboard) {
        addOnclicksForFormSubmissions(player1Gameboard);
    };

    // Set up player objects
    // const player1Name = setUpPlayerName();
    const player1Name = 'anthony';
    const player1 = playerFactory(player1Name, player2Gameboard);
    const player2 = playerFactory('computer', player1Gameboard);

    // Add Computer's Ships to their board
    setUpComputerGameboard(player2Gameboard);

    // Show the forms for placing ships on the board
        // Needs to look cleaner
    document.getElementById('forms-div').style.visibility = 'visible';

    // Wait until all 5 ships are on the board before starting the Match
    const matchStartButton = document.getElementById('match-start');

    matchStartButton.addEventListener('click', () => {
        if (player1Gameboard.shipsOnBoard === 5) {
            addOnclicks(player1, player2Gameboard, player2, player1Gameboard);
            document.getElementById('forms-div').style.visibility = 'hidden';
        }
    });

};

export {
    gameFlowController,
    setUpPlayerName
}