/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l = 1;
    var r = x;

    if(x < 2) return x;

    while(l<r) {
        mid = l + Math.floor((r-l)/2);
        if(mid*mid == x) return mid;
        else if(mid*mid > x) r = mid;
        else l= mid+1;
    }

    return l-1;
};