// Code for Battleship Game
const sum = (a, b) => {
	return a + b;
};

// Ship Factory Function
const shipFactory = (shipLength, xCoordinate, yCoordinate, isHorizontal, shipID) => {
	let isSunk = false;
	let hitArray = [];

	// Fill the hitArray with each location the ship is 
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
		hitArray[arrayIndex]['isHit'] = true;
	};

	// After each hit, check if it should be sunk.
	const shipIsSunk = () => {
		// check if hitArray is ALL true, is so, ship isSunk = true;
		let checkIfSunk = false;
		for (let i = 0; i < hitArray.length; i++) {
			if (hitArray[i].isHit === false) { 
				return false;
			}
			else checkIfSunk = true;
		}
		return checkIfSunk;
	};

	return { shipLength, isSunk, hitArray, hit, shipID, shipIsSunk }
};

// Player factory
const playerFactory = (name, enemyGameBoard) => {
	const attack = (xCoordinate, yCoordinate) => { 
		enemyGameBoard.receiveAttack(xCoordinate, yCoordinate);
	};

	const computerAttack = () => {
		let repeat = true;
		do {
			let randomXCoordinate = Math.floor(Math.random() * (9 - 1)) + 1;
			let randomYCoordinate = Math.floor(Math.random() * (9 - 1)) + 1;

			if (enemyGameBoard.board[randomXCoordinate][randomYCoordinate].shipHasBeenHit === false && enemyGameBoard.board[randomXCoordinate][randomYCoordinate].hitAndMiss === false) {
				repeat = false;
				enemyGameBoard.receiveAttack(randomXCoordinate, randomYCoordinate);
			}
		} while (repeat === true)
	};

	return { name, attack, computerAttack, enemyGameBoard };
};

// Gameboard Factory Function
const gameBoardFactory = () => {
	const shipContainerObj = {
		'destroyer': {}, 
		'submarine': {}, 
		'cruiser': {},
		'battleship': {},
		'aircraft carrier': {}
	};

	const board = {
		1: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
		},
		2: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
		},
		3: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
		},
		4: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
		},
		5: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
		},
		6: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
		},
		7: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
		},
		8: { 
			1: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			2: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			3: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			4: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			5: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			6: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			7: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
			8: {
				hasShip: false,
				shipHasBeenHit: false,
				hitAndMiss: false,
				shipID: 'NA'
			},
		}
	}

	const addShip = (shipLength, xCoordinate, yCoordinate, isHorizontal, shipID) => {
		const ship = shipFactory(shipLength, xCoordinate, yCoordinate, isHorizontal, shipID);

		// Place the ship on the board at the correct coordinates...
			// Make sure it can fit, compare shipLength to the board size from starting location

		// Horizontal 
		if (isHorizontal === true) {
			for (let i = 0; i < shipLength; i++) {
				board[xCoordinate + i][yCoordinate].hasShip = true;	
				board[xCoordinate + i][yCoordinate]['shipID'] = shipID;
			};
		} else {
			for (let i = 0; i < shipLength; i++) {
				board[xCoordinate][yCoordinate + i].hasShip = true;	
				board[xCoordinate][yCoordinate + i]['shipID'] = shipID;
			};
		}

		shipContainerObj[shipID] = ship;
	};

	// Update the shipFactory object as well as the game board 
	const receiveAttack = (xCoordinate, yCoordinate) => {
		if (board[xCoordinate][yCoordinate].hasShip === true) {
			board[xCoordinate][yCoordinate].shipHasBeenHit = true;
			
			// Call newShip.hit at this location as well
			let shipID = board[xCoordinate][yCoordinate].shipID;
			
			// now use the shipID to get the ship, i.e. submarine and run hit with x and y
			shipContainerObj[shipID].hit(xCoordinate, yCoordinate);

			// Add a check to see if the ship is sunk
			shipContainerObj[shipID].isSunk = shipContainerObj[shipID].shipIsSunk();


		} else {
			board[xCoordinate][yCoordinate].hitAndMiss = true;
		};
	};

	// Check if the Game if Over (Only start calling once 17 turn have gone, the minimum to win)
	const gameFinishedCheck = () => {
		// loop through shipContainerObj to check is isSunk is true for all 5 ships
		if ( shipContainerObj['submarine'].isSunk === true && shipContainerObj['destroyer'].isSunk === true && shipContainerObj['cruiser'].isSunk === true && shipContainerObj['battleship'].isSunk === true && shipContainerObj['aircraft carrier'].isSunk === true) {
			return true;
		} else {
			return false;
		}
	};

	return { board, addShip, receiveAttack, shipContainerObj, gameFinishedCheck, };
  };


export {
	sum,
	shipFactory,
	gameBoardFactory,
	playerFactory
}
