/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
//     Soln 1 : Worked but Not optimal 
//     Time : O(n logn) Space: O(1)
    for(var row of matrix) {
        if(bst(row))
            return true;
    }

    function bst(row) {
        var [l,r] = [0, row.length];
        var mid = Math.floor((l+r)/2);

        while(l<=r){
            var mid = Math.floor((l+r)/2);
            if(row[r] < target)
                return;
            else if(row[mid] == target)
                return true;
            else if(row[mid] > target)
                r = mid-1;
            else
                l = mid+1;
        }
    }

    return false;
};