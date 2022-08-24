/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    // Soln 2: Time O(n^2) Space O(n^2)

    var cols = {};
    var rows = {};
    var squares = {};
    var num;

    for(var r=0;r<board.length;r++) {
        for(var c=0;c<board.length;c++) {
            num = board[r][c];

            if(num == ".") continue;

            var grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

            if(!cols[c]) cols[c] = new Set();
            if(!rows[r]) rows[r] = new Set();
            if(!squares[grid]) squares[grid] = new Set();

            if(
                rows[r].has(num) ||
                cols[c].has(num) ||
                squares[grid].has(num)
            ) return false;

            cols[c].add(num);
            rows[r].add(num);
            squares[grid].add(num);
        }
    }

    return true;
};

// Soln 1: Time (n^2) Space O(1)

// var valuesAlreadySeen = [];

//     for (var row = 0; row < board.length; row++) {
//         valuesAlreadySeen = [];
//         for (var col = 0; col < board[0].length; col++) {
//             if (board[row][col] != '.') {
//                 if (valuesAlreadySeen.indexOf(board[row][col]) != -1) {
//                     return false;
//                 }
//                 valuesAlreadySeen.push(board[row][col]);
//             }
//         }
//     }

//     for (var col = 0; col < board[0].length; col++) {
//         valuesAlreadySeen = [];
//         for (var row = 0; row < board.length; row++) {
//             if (board[row][col] != '.') {
//                 if (valuesAlreadySeen.indexOf(board[row][col]) != -1) {
//                     return false;
//                 }
//                 valuesAlreadySeen.push(board[row][col]);
//             }
//         }
//     }

//     for (var row = 0; row < board.length-2; row+=3) {
//         valuesAlreadySeen = [];
//         for (var col = 0; col < board.length-2; col+=3) {
//             valuesAlreadySeen = [];
//             for (var i = row; i < row + 3; i++) {
//                 for (var j = col; j < col + 3; j++) {
//                     if (board[i][j] != '.') {
//                         if (valuesAlreadySeen.indexOf(board[i][j]) != -1) {
//                             return false;
//                         }
//                         valuesAlreadySeen.push(board[i][j]);
//                     }
//                 }
//             }
//         }
//     }

//     return true;