// Code for Battleship Game //
const sum = (a, b) => {
	return a + b;
};

   // Ship Factory Function // 
  //					   //
 //						  //
// Ship Factory Function //
const shipFactory = (shipLength, yCoordinate, xCoordinate, isHorizontal, shipID) => {
	let isSunk = false;
	let hitArray = [];

	// Fill the hitArray with each location the ship is 
	if (isHorizontal === true) {
		for (let i = 0; i < shipLength; i++) {
			let hitObj = {
				y: yCoordinate,
				x: xCoordinate + i,
				isHit: false
			}
			hitArray.push(hitObj);
		}
	} else {
		for (let i = 0; i < shipLength; i++) {
			let hitObj = {
				y: yCoordinate + i,
				x: xCoordinate,
				isHit: false
			}
			hitArray.push(hitObj);
		}
	}
	
	// Call this when the Game Board is hit on a spot that hasShip === true
	const hit = (yCoordinate, xCoordinate) => {
		// find the spot in hitArray, set isHit to TRUE
		let arrayIndex = hitArray.findIndex((element) => {
			if (element.y === yCoordinate && element.x === xCoordinate) {
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


   // Player factory // 
  //                //
 //                //
// Player factory // 
const playerFactory = (name, enemyGameBoard) => {
	const attack = (yCoordinate, xCoordinate) => { 
		enemyGameBoard.receiveAttack(yCoordinate, xCoordinate);
	};

	const computerAttack = () => {
		let repeat = true;
		do {
			let randomXCoordinate = Math.floor(Math.random() * (9 - 1)) + 1;
			let randomYCoordinate = Math.floor(Math.random() * (9 - 1)) + 1;

			if (enemyGameBoard.board[randomYCoordinate][randomXCoordinate].shipHasBeenHit === false && enemyGameBoard.board[randomYCoordinate][randomXCoordinate].hitAndMiss === false) {
				repeat = false;
				enemyGameBoard.receiveAttack(randomYCoordinate, randomXCoordinate);
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

	const addShip = (shipLength, yCoordinate, xCoordinate, isHorizontal, shipID) => {
		const ship = shipFactory(shipLength, yCoordinate, xCoordinate, isHorizontal, shipID);

		// Place the ship on the board at the correct coordinates...
			// Make sure it can fit, compare shipLength to the board size from starting location

		// Horizontal 
		if (isHorizontal === true) {
			for (let i = 0; i < shipLength; i++) {
				board[yCoordinate][xCoordinate + i].hasShip = true;	
				board[yCoordinate][xCoordinate + i]['shipID'] = shipID;
			};
		} else {
			for (let i = 0; i < shipLength; i++) {
				board[yCoordinate + i][xCoordinate].hasShip = true;	
				board[yCoordinate + i][xCoordinate]['shipID'] = shipID;
			};
		}

		shipContainerObj[shipID] = ship;
	};

	// Update the shipFactory object as well as the game board 
	const receiveAttack = (yCoordinate, xCoordinate) => {
		if (board[yCoordinate][xCoordinate].hasShip === true) {
			board[yCoordinate][xCoordinate].shipHasBeenHit = true;
			
			// Call newShip.hit at this location as well
			let shipID = board[yCoordinate][xCoordinate].shipID;
			
			// now use the shipID to get the ship, i.e. submarine and run hit with x and y
			shipContainerObj[shipID].hit(yCoordinate, xCoordinate);

			// Add a check to see if the ship is sunk
			shipContainerObj[shipID].isSunk = shipContainerObj[shipID].shipIsSunk();


		} else {
			board[yCoordinate][xCoordinate].hitAndMiss = true;
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


// shipValidator(player1Gameboard, 2, 1, 1, false, 'destroyer')
const shipValidator = (gameBoard, shipLength, yCoordinate, xCoordinate, isHorizontal) => {
	let isValid = true;
	// Check if the shipLength from xCoord and yCoord fits in the board, first step.
	const maxX = xCoordinate + shipLength;
	const maxY = yCoordinate + shipLength;
	
	// Check if any of the spots have a shipID, and whether the ship will fall off the board
	if (isHorizontal === true) {
		if (maxX > 8) { 
			isValid = false; 
		} else {
			for (let i = 0; i < shipLength; i++) {
				if (gameBoard.board[yCoordinate][xCoordinate + i].hasShip === true) {
					isValid = false;
				}	
			}
		}

	// Case of Vertical ship placement
	} else {
		if (maxY > 8) {
			isValid = false; 
		} else {
			for (let i = 0; i < shipLength; i++) {
				if (gameBoard.board[yCoordinate + i][xCoordinate].hasShip === true) {
					isValid = false;
				}	
			}
		}
	};

	
	// Check if the ship has already been placed, could be in another function or on the HTML form validation step
	return isValid;
};

const handleFormSubmission = (gameBoard, shipLength, yCoordinate, xCoordinate, isHorizontal, shipID) => {
	const isValidForm = shipValidator(gameBoard, shipLength, yCoordinate, xCoordinate, isHorizontal);

	if (isValidForm === true) {
		gameBoard.addShip(shipLength, yCoordinate, xCoordinate, isHorizontal, shipID);
		console.log(gameBoard.board)
	} else { console.log("isValidForm is false...")}
};

export {
	sum,
	shipFactory,
	gameBoardFactory,
	playerFactory,
	shipValidator,
	handleFormSubmission
}
