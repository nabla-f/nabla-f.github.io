// FUNCTIONS

export default class UIFunctions {
    static paintCell(cell, playerClass) {
        console.log('cell clicked: ' + cell.id);
        cell.classList.add(playerClass);
        cell.setAttribute('data-disabled', 'true');
    }
    
    static paintWinner(screen, playerClass) {
        screen.screen.classList.add(`${playerClass}winner`);
        screen.img.classList.add(`${playerClass}win-img`);
    }
    
    static paintDraw(screen) {
        screen.screen.classList.add(`drawgame`);
        screen.text.innerText = '...is a draw...';
    }

    static changeTurnHover(cells, activePlayer, p1Class, p2Class) {
        cells.forEach( cell => cell.classList.remove(`${p1Class}Turn`) );
        cells.forEach( cell => cell.classList.remove(`${p2Class}Turn`) );
        cells.forEach( cell => {
            if (!cell.hasAttribute('data-disabled')) {
                cell.classList.add(`${activePlayer}Turn`);
            }
        })
    }

    static restartGameUI(cells, screen) {
        cells.forEach( cell => cell.classList.remove('player1') );
        cells.forEach( cell => cell.classList.remove('player2') );
        cells.forEach( cell => cell.classList.remove('player2Turn') );
        cells.forEach( cell => cell.classList.add('player1Turn') );
        cells.forEach( cell => cell.removeAttribute('data-disabled') );
        screen.screen.classList.remove('player1winner');
        screen.screen.classList.remove('player2winner');
        screen.screen.classList.remove('drawgame');
        screen.img.classList.remove('player1win-img');
        screen.img.classList.remove('player2win-img');
        screen.text.innerText = 'Winner is ';
    }
}
