/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(var row of matrix) {
        console.log("1");
        if(bst(row))
            return true;
    }

    function bst(row) {
        var [l,r] = [0, row.length];
        var mid = Math.floor((l+r)/2);

        while(l<=r){
            var mid = Math.floor((l+r)/2);
            if(row[r] < target){
                return;
            }
            else if(row[mid] == target){
                return true;
            }
            else if(row[mid] > target){
                r = mid-1;
            }
            else {
                l = mid+1;
            }
        }
    }

    return false;
};