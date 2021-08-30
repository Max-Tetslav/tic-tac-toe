class TicTacToe {
    constructor() {
        this.symb = 'x';
        this.field = [];

        for (let i = 0; i < 3; i++) {
            this.field.push([]);
            for (let j = 0; j < 3; j++) {
                this.field[i].push(null);
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.symb;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.symb = (this.symb === 'x' ? 'o' : 'x');
        } else {
            return false;
        }
    }

    isFinished() {
        return this.isDraw() || this.getWinner() !== null;
    }

    getWinner() {
        if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
            return this.field[0][0];
        }

        if (this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0]) {
            return this.field[1][1];
        }

        for (let i = 0; i < this.field.length; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
                return this.field[i][0];
            }
        }

        for (let i = 0; i < this.field.length; i++) {
            if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                return this.field[0][i];
            }
        }
        return null;
    }

    noMoreTurns() {
        return !this.field.flat().includes(null);
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;