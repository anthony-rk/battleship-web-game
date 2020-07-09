// Code for controlling the flow of the game. 
import { shipFactory, playerFactory, shipIsSunk, gameBoardFactory } from './battleship-game-logic';

const setUpPlayerName = () => {
    let newPlayerName = prompt("What is your name?");
    let newPlayer = playerFactory(newPlayerName);
    return newPlayer;
};

const gameFlowController = () => {

    // Run when START button clicked
    // Set up player objects
    const player1 = setUpPlayerName();
    const player2 = playerFactory('computer');

    // Set up Game Boards
    const player1Gameboard = gameBoardFactory();
    const player2Gameboard = gameBoardFactory();

    // Add Boats to the boards manually for testing


    // Make the turn attack loop until game over

        // Player 1 should attack first

        // Player 2 (Computer) attacks next






};

return {
    gameFlowController,
}