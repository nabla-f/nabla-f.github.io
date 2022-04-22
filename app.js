// IMPORTS;

import checker from './refactored/gameCheckerFunctions.js';
import game from './refactored/gameStateFunctions.js';
import ui from './refactored/UIFunctions.js';

// CONFIG

const P1_CLASS = 'player1'; // Defined in styles.css
const P2_CLASS = 'player2'; // Defined in styles.css

// STATE

let state = {
    activePlayer: P1_CLASS,
    boardArray: [[null, null, null], [null, null, null], [null, null, null]],
    boardDim: 3,
    moves: 0
}

let view = {
    button: null,
    cells: null,
    resultScreen: {
        screen: null,
        text: null,
        img: null
    }
};


// WAIT FOR THE DOM

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main();
});

// MAIN FUNCTION

function main() {

    // GET ELEMENTS FROM DOM AND ADD EVENT LISTENERS
    view.button = document.querySelector("#resetBtn");
    view.cells = document.querySelectorAll(".cell");
    view.resultScreen.screen = document.querySelector("#done");
    view.resultScreen.text = document.querySelector('.lead');
    view.resultScreen.img = document.getElementById('winnerImg');
    view.button.addEventListener('click', () => {ui.restartGameUI(view.cells, view.resultScreen)});
    view.button.addEventListener('click', () => {game.restartGame(state, P1_CLASS); console.log(state)});
    view.cells.forEach( cell => cell.addEventListener('click', turn) );
    view.cells.forEach( cell => cell.classList.add('player1Turn') );

    // GAME FLOW FUNCTION EXECUTED EACH TIME A PLAYER MAKES A MOVE
    function turn() {
        console.log(`Now playing: ${state.activePlayer}`)

        let cell = this; // currently clicked cell

        if (!cell.hasAttribute('data-disabled')) {
            game.storeMove(cell, state.boardArray, state.activePlayer);
            state.moves += 1

            ui.paintCell(cell, state.activePlayer);
            
            if (checker.checkWinner(state.boardArray, state.boardDim, state.activePlayer)) {
                ui.paintWinner(view.resultScreen, state.activePlayer)
            }
            else if (checker.checkDraw(state.moves)) {
                ui.paintDraw(view.resultScreen);
            }
            else {
                state.activePlayer = game.changeTurn(state.activePlayer, P1_CLASS, P2_CLASS);
                ui.changeTurnHover(view.cells, state.activePlayer, P1_CLASS, P2_CLASS);
            }
        }
    };
};