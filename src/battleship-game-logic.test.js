import { sum } from './battleship-game-logic';
import { shipFactory } from './battleship-game-logic';
import { shipIsSunk } from './battleship-game-logic';
import { gameBoardFactory } from './battleship-game-logic';
import { addShip } from './battleship-game-logic';

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
  const newShip = shipFactory(3);
  newShip.hit(3);
  expect(newShip.hitArray[3]).toBe(true);
});

test('Hits a ship, i.e. sets hitArray[i] to True (Length of 1)', () => {
  const newShip = shipFactory(1);
  newShip.hit(1);
  expect(newShip.hitArray[1]).toBe(true);
});

test('Sinks a Ship (length 1)', () => {
  const newShip = shipFactory(1);
  newShip.hit(0);
  newShip.isSunk = shipIsSunk(newShip.hitArray);

  expect(newShip.isSunk).toBe(true);
});

test('Sinks a Ship (length 5)', () => {
  const newShip = shipFactory(5);
  for (let i = 0; i < newShip.shipLength; i++) {
    newShip.hit(i);  
  }

  newShip.isSunk = shipIsSunk(newShip.hitArray);

  expect(newShip.isSunk).toBe(true);
});

// Gameboard factory tests
test('Creates a GameBoard Object', () => {
  const newGameBoard = gameBoardFactory();
  expect(newGameBoard.board['1']['1'].hasShip).toBe(false);
});

test('Places a ship of size 3 horizontally', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(3, 1, 1, true);

  expect(newGameBoard.board['1']['1'].hasShip).toBe(true);
  expect(newGameBoard.board['2']['1'].hasShip).toBe(true);
  expect(newGameBoard.board['3']['1'].hasShip).toBe(true);
});

test('Places a ship of size 3 vertically', () => {
  const newGameBoard = gameBoardFactory();
  newGameBoard.addShip(3, 1, 1, false);

  console.log(newGameBoard.board['1']['1']);
  console.log(newGameBoard.board['1']['2']);
  console.log(newGameBoard.board['1']['3']);

  expect(newGameBoard.board['1']['1'].hasShip).toBe(true);
  expect(newGameBoard.board['1']['2'].hasShip).toBe(true);
  expect(newGameBoard.board['1']['3'].hasShip).toBe(true);
});
