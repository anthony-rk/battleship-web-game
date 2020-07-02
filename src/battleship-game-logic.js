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


export {
	sum,
	shipFactory,
	shipIsSunk
}
