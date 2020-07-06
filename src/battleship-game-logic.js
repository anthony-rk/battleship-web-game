const sum = (a, b) => {
	return a + b;
};

// Ship Factory Function
const shipFactory = (shipLength) => {
	let isSunk = false;

	const hitArray = [];
	for (let i = 0; i < shipLength; i++) {
		hitArray.push(false);
	}
	const hit = (spotHit) => {
		hitArray[spotHit] = true;
	}

	return { shipLength, isSunk, hitArray, hit }
};

// After each hit, check if it should be sunk.
const shipIsSunk = (shipArray) => {
	// check if hitArray is ALL true, is so, ship isSunk = true;
	if (shipArray.includes(false)) {
		return false;
	} else { 
		return true;
	}
};

// Gameboard Factory Function
const gameBoardFactory = () => {
	const board = {
		1: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
		},
		2: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
		},
		3: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
		},
		4: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
		},
		5: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
		},
		6: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
		},
		7: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
		},
		8: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false
			},
		}
	}

	const addShip = (shipLength, xCoordinate, yCoordinate, isHorizontal) => {
		const ship = shipFactory(shipLength);

		// Place the ship on the board at the correct coordinates...
			// Make sure it can fit, compare shipLength to the board size from starting location

		// Horizontal 
		if (isHorizontal === true) {
			for (let i = 0; i < shipLength; i++) {
				board[xCoordinate + i][yCoordinate].hasShip = true;	
			};
		}
		if (isHorizontal === false) {
			// Vertical
			for (let i = 0; i < shipLength; i++) {
				board[xCoordinate][yCoordinate + i].hasShip = true;	
			};
		}
	}

	return { board, addShip };
  };


export {
	sum,
	shipFactory,
	shipIsSunk,
	gameBoardFactory
}
