/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
// Soln 2 : efficient
    // Time : O(logm + logn) Space O(1)
    // m : num of rows
    // n : num of cols

    var [ROWS, COLS] = [matrix.length, matrix[0].length];

    var [top, bot] = [0, ROWS-1];
    while(top <= bot) {
        var row = Math.floor((top + bot) / 2);
        if(target > matrix[row][COLS-1])
            top = row + 1;
        else if(target < matrix[row][0])
            bot = row - 1;
        else   
            break;
    }

    if(top > bot)
        return false;

    row = Math.floor((top + bot) / 2);
    var [l, r] = [0, COLS - 1];

    while(l<=r){
        mid = Math.floor((l+r)/2);
        if(matrix[row][mid] == target)
            return true;
        else if(matrix[row][mid] > target)
            r = mid-1;
        else
            l = mid+1;
    }
    return false;
};

// Soln 1 : Worked but sometimes not efficient
    // Time : O(m logn) Space O(1)
    // m : num of rows
    // n : num of cols
//     for(var row of matrix) {
//         if(bst(row))
//             return true;
//     }

//     function bst(row) {
//         var [l,r] = [0, row.length];
//         var mid = Math.floor((l+r)/2);

//         while(l<=r){
//             var mid = Math.floor((l+r)/2);
//             if(row[r] < target)
//                 return;
//             else if(row[mid] == target)
//                 return true;
//             else if(row[mid] > target)
//                 r = mid-1;
//             else
//                 l = mid+1;
//         }
//     }

//     return false;