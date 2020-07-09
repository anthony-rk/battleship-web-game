import { sum } from './battleship-game-logic';
import { shipFactory } from './battleship-game-logic';
import { shipIsSunk } from './battleship-game-logic';
import { gameBoardFactory } from './battleship-game-logic';

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
  newShip.isSunk = shipIsSunk(newShip.hitArray);

  expect(newShip.isSunk).toBe(true);
});

test('Sinks a Ship (length 5)', () => {
  const newShip = shipFactory(5, 1, 1, true);
  for (let i = 1; i <= newShip.shipLength; i++) {
    newShip.hit(i, 1);  
  };

  newShip.isSunk = shipIsSunk(newShip.hitArray);

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
  
  newGameBoard.shipContainerObj['submarine'].isSunk = shipIsSunk(newGameBoard.shipContainerObj['submarine'].hitArray);

  expect(newGameBoard.shipContainerObj['submarine'].isSunk).toBe(true);
});

//
//
//
//
//
test('Knows when all ships have been sunk.', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(2, 1, 1, false, 'destroyer');
  newGameBoard.addShip(3, 3, 1, false, 'submarine');
  newGameBoard.addShip(3, 1, 2, false, 'cruiser');
  newGameBoard.addShip(4, 1, 3, false, 'battleship');
  newGameBoard.addShip(5, 1, 4, false, 'aircraft carrier');

  newGameBoard.receiveAttack(1, 1);
  newGameBoard.receiveAttack(2, 1);
  newGameBoard.shipContainerObj['destroyer'].isSunk = shipIsSunk(newGameBoard.shipContainerObj['destroyer'].hitArray);

  newGameBoard.receiveAttack(3, 1);
  newGameBoard.receiveAttack(4, 1);
  newGameBoard.receiveAttack(5, 1);
  newGameBoard.shipContainerObj['submarine'].isSunk = shipIsSunk(newGameBoard.shipContainerObj['submarine'].hitArray);

  newGameBoard.receiveAttack(1, 2);
  newGameBoard.receiveAttack(2, 2);
  newGameBoard.receiveAttack(3, 2);
  newGameBoard.shipContainerObj['cruiser'].isSunk = shipIsSunk(newGameBoard.shipContainerObj['cruiser'].hitArray);

  newGameBoard.receiveAttack(1, 3);
  newGameBoard.receiveAttack(2, 3);
  newGameBoard.receiveAttack(3, 3);
  newGameBoard.receiveAttack(4, 3);
  newGameBoard.shipContainerObj['battleship'].isSunk = shipIsSunk(newGameBoard.shipContainerObj['battleship'].hitArray);

  newGameBoard.receiveAttack(1, 4);
  newGameBoard.receiveAttack(2, 4);
  newGameBoard.receiveAttack(3, 4);
  newGameBoard.receiveAttack(4, 4);
  newGameBoard.receiveAttack(5, 4);
  newGameBoard.shipContainerObj['aircraft carrier'].isSunk = shipIsSunk(newGameBoard.shipContainerObj['aircraft carrier'].hitArray);
  
  expect(newGameBoard.gameFinishedCheck()).toBe(true);
});

// Tests for the Player Object
test('Has 2 Players, one Human and one Computer', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.playerOne.name = 'Anthony';

  expect(newGameBoard.playerOne.name).toBe("Anthony");
  expect(newGameBoard.playerTwo.name).toBe("Computer");
});

test('Computer can select a random spot to strike, but not the same spot twice.', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.playerTwo.attack();
});

// Tests for the Game loop
test('Game loop get a user name on start.', () => {
  const newGameBoard = gameBoardFactory();

  expect(newGameBoard.playerOne.name).toBe("Anthony");
});