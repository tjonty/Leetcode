/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var valuesAlreadySeen = [];

    for (var row = 0; row < board.length; row++) {
        valuesAlreadySeen = [];
        for (var col = 0; col < board[0].length; col++) {
            if (board[row][col] != '.') {
                if (valuesAlreadySeen.indexOf(board[row][col]) != -1) {
                    return false;
                }
                valuesAlreadySeen.push(board[row][col]);
            }
        }
    }

    for (var col = 0; col < board[0].length; col++) {
        valuesAlreadySeen = [];
        for (var row = 0; row < board.length; row++) {
            if (board[row][col] != '.') {
                if (valuesAlreadySeen.indexOf(board[row][col]) != -1) {
                    return false;
                }
                valuesAlreadySeen.push(board[row][col]);
            }
        }
    }

    for (var row = 0; row < board.length-2; row+=3) {
        valuesAlreadySeen = [];
        for (var col = 0; col < board.length-2; col+=3) {
            valuesAlreadySeen = [];
            for (var i = row; i < row + 3; i++) {
                for (var j = col; j < col + 3; j++) {
                    if (board[i][j] != '.') {
                        if (valuesAlreadySeen.indexOf(board[i][j]) != -1) {
                            return false;
                        }
                        valuesAlreadySeen.push(board[i][j]);
                    }
                }
            }
        }
    }

    return true;
};