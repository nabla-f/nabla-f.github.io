
export default class gameCheckerFunctions {

    static INDEXES = [0, 1, 2]
    static DIAG_INDEXES = [ [0, 1, 2], [2, 1, 0] ];

    static getValueFromArray(array, row, column) {
        return array[row][column]
    }

    static checkRows(boardArray, boardDim, playerClass) {
        for (let i=0; i < boardDim; i++) {
            let movesInLine = [];
            for (let column of this.INDEXES) {
                movesInLine.push(boardArray[i][column]);
            }

            if ( movesInLine.every( cell => cell == playerClass ) ) {return true;}
        }

        return false;
    }


    static checkColumns(boardArray, boardDim, playerClass) {
        for (let i=0; i < boardDim; i++) {
            let movesInLine = [];
            for (let row of this.INDEXES) {
                movesInLine.push(boardArray[row][i]);
            }

            if ( movesInLine.every( cell => cell == playerClass ) ) {return true;}
        }

        return false;
    }


    static checkDiags(boardArray, playerClass) {
        for (let diag of this.DIAG_INDEXES) {
            let movesInLine = [];
            for (let i=0; i <= 2; i++) {
                let move = boardArray[i][diag[i]];
                movesInLine.push(move);
            }

            if ( movesInLine.every( cell => cell == playerClass ) ) {return true;}
        }

        return false;
    }


    static checkWinner(boardData, boardDim, playerClass) {
        if ( this.checkRows(boardData, boardDim, playerClass)
            || this.checkColumns(boardData, boardDim, playerClass)
            || this.checkDiags(boardData, playerClass) ) {
            console.log("This function works, there's a winner!");
            return true
        }
        else {
            console.log('No winner this time');
            return false
        }
    }

    static checkDraw(moves) {
        if (moves >= 9) {
            return true;
        }
        else {
            return false
        }
    }
    
    constructor() {
        throw new Error(" This class can't be instantiated");
    }
}