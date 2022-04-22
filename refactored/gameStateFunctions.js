// FUNCTIONS

export default class gameStateFunctions {
    
   static changeTurn(activePlayer, p1Class, p2Class) {
        //turnFlag = !turnFlag;
        const newPlayer = (activePlayer == p1Class) ? p2Class : p1Class
        return newPlayer
    }
    
    
    static storeMove(cell, boardArray, activePlayer) {
        console.log(`current state in storeMove(): `)
        console.log(boardArray);
        let coordinates = cell.dataset.coord.split(':')
        const [x, y] = coordinates;
        if (boardArray[x][y] === null) {
            boardArray[x][y] = activePlayer;
        }
    }
    

    static restartGame(state, startingPlayerClass) {
        state.activePlayer = startingPlayerClass;
        state.moves = 0;
        state.boardArray = [[null, null, null], [null, null, null], [null, null, null]];
        console.clear();
        console.log('GAME RESTARTED');
    }

    
    constructor() {
        throw new Error(" This class can't be instantiated");
    }
}



