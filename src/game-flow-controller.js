// Code for controlling the flow of the game. 
import { playerFactory, gameBoardFactory } from './battleship-game-logic';

const setUpPlayerName = () => {
    let newPlayerName = prompt("What is your name?");
    return newPlayerName;
};

const gameFlowController = () => {

    // Run when START button clicked
    // Set up Game Boards
    const player1Gameboard = gameBoardFactory();
    const player2Gameboard = gameBoardFactory();

    // Set up player objects
    const player1Name = setUpPlayerName();
    const player1 = playerFactory(player1Name, player2Gameboard);
    const player2 = playerFactory('Computer', player1Gameboard);


    // Add Boats to the boards manually for testing
        // Need to get this info to tie into the Game Board on index.html
    player1Gameboard.addShip(2, 1, 1, false, 'destroyer');
    player1Gameboard.addShip(3, 3, 1, false, 'submarine');
    player1Gameboard.addShip(3, 1, 2, false, 'cruiser');
    player1Gameboard.addShip(4, 1, 3, false, 'battleship');
    player1Gameboard.addShip(5, 1, 4, false, 'aircraft carrier');

    player2Gameboard.addShip(2, 1, 1, false, 'destroyer');
    player2Gameboard.addShip(3, 3, 1, false, 'submarine');
    player2Gameboard.addShip(3, 1, 2, false, 'cruiser');
    player2Gameboard.addShip(4, 1, 3, false, 'battleship');
    player2Gameboard.addShip(5, 1, 4, false, 'aircraft carrier');


    // Make the turn attack loop until game over

        // Player 1 should attack first

        // Player 2 (Computer) attacks next






};

export {
    gameFlowController,
}