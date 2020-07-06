const sum = (a, b) => {
	return a + b;
};

// Ship Factory Function
const shipFactory = (shipLength, xCoordinate, yCoordinate, isHorizontal) => {
	let isSunk = false;
	const hitArray = [];

	if (isHorizontal === true) {
		for (let i = 0; i < shipLength; i++) {
			let hitObj = {
				x: xCoordinate + i,
				y: yCoordinate,
				isHit: false
			}
			hitArray.push(hitObj);
		}
	} else {
		for (let i = 0; i < shipLength; i++) {
			let hitObj = {
				x: xCoordinate,
				y: yCoordinate + i,
				isHit: false
			}
			hitArray.push(hitObj);
		}
	}
	
	// Call this when the Game Board is hit on a spot that hasShip === true
	const hit = (xCoordinate, yCoordinate) => {
		// find the spot in hitArray, set isHit to TRUE
		let arrayIndex = hitArray.findIndex((element) => {
			if (element.x === xCoordinate && element.y === yCoordinate) {
			  return true;
			}
		  });
		// console.log(arrayIndex + " this is the array index found")
		hitArray[arrayIndex]['isHit'] = true;
	};

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
	};

	const receiveAttack = (xCoordinate, yCoordinate) => {
		if ((board[xCoordinate][yCoordinate].shipHasBeenHit === false && board[xCoordinate][yCoordinate].hitAndMiss === false)) {
			if (board[xCoordinate][yCoordinate].hasShip === true) {
				board[xCoordinate][yCoordinate].shipHasBeenHit = true;
				// Call newShip.hit at this location as well

			} else {
				board[xCoordinate][yCoordinate].hitAndMiss = true;
			};
		} 
		// Catch case if the spot was already targeted before.. 
		else {
			return false;
		}
	};


	return { board, addShip, receiveAttack };
  };


export {
	sum,
	shipFactory,
	shipIsSunk,
	gameBoardFactory
}
