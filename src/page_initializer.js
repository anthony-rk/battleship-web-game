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

    // Add Player divs
    const player1Div = component('div', 'Player 1');
    player1Div.classList.add("player-name-div");
    contentDiv.appendChild(player1Div);

    const player2Div = component('div', 'Computer');
    player2Div.classList.add("player-name-div");
    contentDiv.appendChild(player2Div);

    // Add Game Boards
    const player1GameBoard = component('div', '', 'player1-gameboard');
    player1GameBoard.classList.add("gameboard");
    contentDiv.appendChild(player1GameBoard);

    const player2GameBoard = component('div', '', 'player2-gameboard');
    player2GameBoard.classList.add("gameboard");
    contentDiv.appendChild(player2GameBoard);


    console.log("page intializer fn ran...");
};


export {
    pageInitializer,
}