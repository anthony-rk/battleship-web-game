const { gameBoardFactory } = require("./battleship-game-logic");
const { gameFlowController } = require("./game-flow-controller");

// Initializes the page upon load
const component = (newElement, newInnerHTML, newID) => {
    const element = document.createElement(newElement);
    element.innerHTML = newInnerHTML;
    if (newID) { element.setAttribute("id", newID) };

    return element;
};

const pageInitializer = () => {
    // Add Title / Header info
    document.body.appendChild(component('div', '', 'content-div'));
    let contentDiv = document.getElementById('content-div');
    contentDiv.appendChild(component('h1', 'Battleship!', 'title'));
    contentDiv.appendChild(component('h3', 'GitHub Link: https://github.com/anthony-rk/battleship-web-game', 'github-link'));

    // Add Start Button
    contentDiv.appendChild(component('div', '', 'start-button-div'));
    const startButtonDiv = document.getElementById('start-button-div');
    const startButton = component('button', 'Start!', 'start-button')
    startButton.addEventListener('click', () => {
        // Remove the console.log()
        console.log('start clicked');
        gameFlowController();

    })
    startButtonDiv.appendChild(startButton);


    // Add Player divs
    const player1Div = component('div', 'Player 1');
    player1Div.classList.add("player-name-div");
    contentDiv.appendChild(player1Div);

    const player2Div = component('div', 'Computer');
    player2Div.classList.add("player-name-div");
    contentDiv.appendChild(player2Div);

    // Add Game Boards
    
    // Left game board
    const player1GameBoard = component('div', '', 'player1-gameboard');
    player1GameBoard.classList.add("gameboard");
    contentDiv.appendChild(player1GameBoard);

    // Need to make 8x8 grid aka 2 for loops
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = component('div', '_', i+'-'+j);
            gameBoardSquare.classList.add("game-board-square");

            // add onclicks
            gameBoardSquare.addEventListener('click', function() {
                console.log("Hello" + ' ' + gameBoardSquare.id);
                // gameBoard1.receiveAttack(i, j);
            })
            player1GameBoard.appendChild(gameBoardSquare);
        }
    };

    // Right game board
    const player2GameBoard = component('div', '', 'player2-gameboard');
    player2GameBoard.classList.add("gameboard");
    contentDiv.appendChild(player2GameBoard);

    // Need to make 8x8 grid aka 2 for loops
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let gameBoardSquare = component('div', '_', i+'-'+j);
            gameBoardSquare.classList.add("game-board-square");

            // add onclicks
            gameBoardSquare.addEventListener('click', function() {
                console.log("Hello" + ' ' + gameBoardSquare.id);
                // gameBoard2.receiveAttack(i, j);
            })
            player2GameBoard.appendChild(gameBoardSquare);
        }
    };



    console.log("page intializer fn ran...");
};


export {
    pageInitializer
}