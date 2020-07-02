import { sum } from './battleship-game-logic';
import { shipFactory } from './battleship-game-logic';
import { shipIsSunk } from './battleship-game-logic';

test('TEST FOR JEST: Adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

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

// test('Creates a Ship Object with length of 5', () => {
//   const newShip = shipFactory(5);
//   expect(newShip.shipLength).toBe(5);
// });