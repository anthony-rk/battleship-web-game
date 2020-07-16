import { sum, playerFactory } from './battleship-game-logic';
import { shipFactory } from './battleship-game-logic';
import { gameBoardFactory, shipValidator } from './battleship-game-logic';

// Check that Jest is working
test('TEST FOR JEST: Adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Ship Factory tests
test('Creates a Ship Object with length of 5', () => {
  const newShip = shipFactory(5);
  expect(newShip.shipLength).toBe(5);
});

test('Creates a Ship Object with length of 3', () => {
  const newShip = shipFactory(3);
  expect(newShip.shipLength).toBe(3);
});

test('Hits a ship, i.e. sets hitArray[i] to True', () => {
  const newShip = shipFactory(3, 1, 1, true);
  newShip.hit(1, 1);

  expect(newShip.hitArray[0]['isHit']).toBe(true);
});

test('Hits a ship, i.e. sets hitArray[i] to True', () => {
  const newShip = shipFactory(3, 1, 1, true);
  newShip.hit(2, 1);

  expect(newShip.hitArray[1]['isHit']).toBe(true);
});

test('Hits a ship, i.e. sets hitArray[i] to True (Length of 1)', () => {
  const newShip = shipFactory(1, 1, 1, true);
  newShip.hit(1, 1);
  expect(newShip.hitArray[0]['isHit']).toBe(true);
});

test('Sinks a Ship (length 1)', () => {
  const newShip = shipFactory(1, 1, 1, true);
  newShip.hit(1, 1);
  newShip.isSunk = newShip.shipIsSunk();

  expect(newShip.isSunk).toBe(true);
});

test('Sinks a Ship (length 5)', () => {
  const newShip = shipFactory(5, 1, 1, true);
  for (let i = 1; i <= newShip.shipLength; i++) {
    newShip.hit(i, 1);  
  };

  newShip.isSunk = newShip.shipIsSunk();

  expect(newShip.isSunk).toBe(true);
});

// Gameboard factory tests
test('Creates a GameBoard Object.', () => {
  const newGameBoard = gameBoardFactory();
  expect(newGameBoard.board['1']['1'].hasShip).toBe(false);
});

test('Places a ship of size 3 horizontally.', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(3, 1, 1, true);

  expect(newGameBoard.board['1']['1'].hasShip).toBe(true);
  expect(newGameBoard.board['2']['1'].hasShip).toBe(true);
  expect(newGameBoard.board['3']['1'].hasShip).toBe(true);
});

test('Places a ship of size 3 vertically.', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(3, 1, 1, false);

  expect(newGameBoard.board['1']['1'].hasShip).toBe(true);
  expect(newGameBoard.board['1']['2'].hasShip).toBe(true);
  expect(newGameBoard.board['1']['3'].hasShip).toBe(true);
});

test('Creates a GameBoard Object with 5 ships.', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(2, 1, 1, false, 'destroyer');
  newGameBoard.addShip(3, 3, 1, false, 'submarine');
  newGameBoard.addShip(3, 1, 2, false, 'cruiser');
  newGameBoard.addShip(4, 1, 3, false, 'battleship');
  newGameBoard.addShip(5, 1, 4, false, 'aircraft carrier');

  expect(newGameBoard.shipContainerObj['destroyer'].shipID).toBe('destroyer');
  expect(newGameBoard.shipContainerObj['submarine'].shipID).toBe('submarine');
  expect(newGameBoard.shipContainerObj['cruiser'].shipID).toBe('cruiser');
  expect(newGameBoard.shipContainerObj['battleship'].shipID).toBe('battleship');
  expect(newGameBoard.shipContainerObj['aircraft carrier'].shipID).toBe('aircraft carrier');
});

test('Attacks a spot on the Game Board and hits a ship.', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(3, 1, 1, false, 'submarine');
  newGameBoard.receiveAttack(1, 1);
  
  expect(newGameBoard.board['1']['1'].shipHasBeenHit).toBe(true);
});

test('Attacks a spot on the Game Board and misses.', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(3, 1, 1, false, 'submarine');
  newGameBoard.receiveAttack(7, 7);
  
  expect(newGameBoard.board['7']['7'].shipHasBeenHit).toBe(false);
  expect(newGameBoard.board['7']['7'].hitAndMiss).toBe(true);
});

// GameBoard needs to take in the Ship Factory so that we know what ship is where..
test('Attacks a spot on the Game Board and sinks a ship.', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(3, 1, 1, false, 'submarine');

  newGameBoard.receiveAttack(1, 1);
  newGameBoard.receiveAttack(1, 2);
  newGameBoard.receiveAttack(1, 3);
  
  // Checks the Hit data on the Game Board
  expect(newGameBoard.board['1']['1'].shipHasBeenHit).toBe(true);
  expect(newGameBoard.board['1']['2'].shipHasBeenHit).toBe(true);
  expect(newGameBoard.board['1']['3'].shipHasBeenHit).toBe(true);

  // Checks the Hit data on the submarine ship in the shipContainerObj object
  expect(newGameBoard.shipContainerObj['submarine'].hitArray[0].isHit).toBe(true);
  expect(newGameBoard.shipContainerObj['submarine'].hitArray[1].isHit).toBe(true);
  expect(newGameBoard.shipContainerObj['submarine'].hitArray[2].isHit).toBe(true);
  
  newGameBoard.shipContainerObj['submarine'].isSunk = newGameBoard.shipContainerObj['submarine'].shipIsSunk();
  expect(newGameBoard.shipContainerObj['submarine'].isSunk).toBe(true);
});

test('Knows when all ships have been sunk.', () => {
  const player2Gameboard = gameBoardFactory();
  player2Gameboard.addShip(2, 1, 1, true, 'destroyer');
  player2Gameboard.addShip(3, 3, 1, true, 'submarine');
  player2Gameboard.addShip(3, 1, 2, true, 'cruiser');
  player2Gameboard.addShip(4, 1, 3, true, 'battleship');
  player2Gameboard.addShip(5, 1, 4, true, 'aircraft carrier');

  const player1 = playerFactory('Anthony', player2Gameboard);
  
  player1.attack(1, 1);
  player1.attack(2, 1);

  player1.attack(3, 1);
  player1.attack(4, 1);
  player1.attack(5, 1);

  player1.attack(1, 2);
  player1.attack(2, 2);
  player1.attack(3, 2);

  player1.attack(1, 3);
  player1.attack(2, 3);
  player1.attack(3, 3);
  player1.attack(4, 3);

  player1.attack(1, 4);
  player1.attack(2, 4);
  player1.attack(3, 4);
  player1.attack(4, 4);
  player1.attack(5, 4);
  
  expect(player2Gameboard.gameFinishedCheck()).toBe(true);
});

test('Knows when all ships have been sunk from another player attacking the gameboard', () => {
  const player2Gameboard = gameBoardFactory();
  player2Gameboard.addShip(2, 1, 1, true, 'destroyer');
  player2Gameboard.addShip(3, 3, 1, true, 'submarine');
  player2Gameboard.addShip(3, 1, 2, true, 'cruiser');
  player2Gameboard.addShip(4, 1, 3, true, 'battleship');
  player2Gameboard.addShip(5, 1, 4, true, 'aircraft carrier');

  const player1 = playerFactory('Anthony', player2Gameboard);
  
  player1.attack(1, 1);
  player1.attack(2, 1);

  player1.attack(3, 1);
  player1.attack(4, 1);
  player1.attack(5, 1);

  player1.attack(1, 2);
  player1.attack(2, 2);
  player1.attack(3, 2);

  player1.attack(1, 3);
  player1.attack(2, 3);
  player1.attack(3, 3);
  player1.attack(4, 3);

  player1.attack(1, 4);
  player1.attack(2, 4);
  player1.attack(3, 4);
  player1.attack(4, 4);
  player1.attack(5, 4);
  
  expect(player2Gameboard.gameFinishedCheck()).toBe(true);
});


// Tests for the Player Object
test('Has 2 Players, one Human and one Computer', () => {
  const player1Gameboard = gameBoardFactory();
  const player2Gameboard = gameBoardFactory();

  const player1 = playerFactory('Anthony', player2Gameboard);
  const player2 = playerFactory('Computer', player1Gameboard);

  expect(player1.name).toBe("Anthony");
  expect(player2.name).toBe("Computer");
});

test('Player 1 can attack Player 2\'s GameBoard', () => {
  // const player1Gameboard = gameBoardFactory();
  const player2Gameboard = gameBoardFactory();
  player2Gameboard.addShip(2, 1, 1, false, 'destroyer');

  const player1 = playerFactory('Anthony', player2Gameboard);
  
  player1.attack(1, 1);
  expect(player1.enemyGameBoard.board['1']['1'].shipHasBeenHit).toBe(true);
});

// Tests for shipValidator() function
test('Validation for ship placement return True when the board is empty and 1st ship is placed', () => {
  const player1Gameboard = gameBoardFactory();

  let validatorResult = shipValidator(player1Gameboard, 2, 1, 1, false, 'destroyer');
    
  expect(validatorResult).toBe(true);
});

test('Validation for ship placement return False when the board is not big enough for the ship', () => {
  const player1Gameboard = gameBoardFactory();

  let validatorResult = shipValidator(player1Gameboard, 2, 8, 8, false, 'destroyer');
  
  expect(validatorResult).toBe(false);
});

test('Validation for ship placement return False when the board already has a ship in a spot', () => {
  const player1Gameboard = gameBoardFactory();
  player1Gameboard.addShip(2, 1, 1, false, 'destroyer');

  let validatorResult = shipValidator(player1Gameboard, 2, 1, 1, false, 'destroyer');
  
  expect(validatorResult).toBe(false);
});

test('Validation for 5th (Last) ship placement return False when the board already has a ship in a spot', () => {
  const player1Gameboard = gameBoardFactory();
  player1Gameboard.addShip(2, 1, 1, true, 'submarine');
  player1Gameboard.addShip(3, 1, 2, true, 'cruiser');
  player1Gameboard.addShip(4, 1, 3, true, 'battleship');
  player1Gameboard.addShip(5, 1, 4, true, 'aircraft carrier');

  console.log(player1Gameboard.board)

  let validatorResult = shipValidator(player1Gameboard, 2, 4, 4, false, 'destroyer');
  
  expect(validatorResult).toBe(false);
});