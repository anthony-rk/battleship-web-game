// Code for controlling the flow of the game. 
import { playerFactory, gameBoardFactory } from './battleship-game-logic';
import { addOnclicks, resetGameBoards, addOnclicksForFormSubmissions } from './game-flow-DOM';

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

    addOnclicksForFormSubmissions(player1Gameboard);


    // Set up player objects
    // const player1Name = setUpPlayerName();
    const player1Name = 'anthony';
    const player1 = playerFactory(player1Name, player2Gameboard);
    const player2 = playerFactory('computer', player1Gameboard);

    // Show the forms for placing ships on the board
        // Needs to look cleaner
    document.getElementById('forms-div').style.visibility = 'visible';


    // Add Boats to the boards manually for testing
        // Need to get this info to tie into the Game Board on index.html
    // player1Gameboard.addShip(2, 1, 1, true, 'destroyer');
    // player1Gameboard.addShip(3, 3, 1, true, 'submarine');
    // player1Gameboard.addShip(3, 1, 2, true, 'cruiser');
    // player1Gameboard.addShip(4, 1, 3, true, 'battleship');
    // player1Gameboard.addShip(5, 1, 4, true, 'aircraft carrier');

    player2Gameboard.addShip(2, 1, 1, true, 'destroyer');
    player2Gameboard.addShip(3, 3, 1, true, 'submarine');
    player2Gameboard.addShip(3, 4, 2, true, 'cruiser');
    player2Gameboard.addShip(4, 5, 2, true, 'battleship');
    player2Gameboard.addShip(5, 6, 2, true, 'aircraft carrier');


    // Add onclicks to the gameboard
    addOnclicks(player1, player2Gameboard, player2, player1Gameboard);

};

export {
    gameFlowController,
    setUpPlayerName
}