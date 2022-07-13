/**
 * @param {string} columnTitle
 * @return {number}
 */
// Time : O(n) | Space : O(1)
var titleToNumber = function(columnTitle) {
    let res = 0;
    for(i=0;i<columnTitle.length;i++){
        let d = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;

        res = res * 26 + d;
    }
    return res;
};