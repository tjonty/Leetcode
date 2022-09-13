/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // Soln : 
    // Time : O( log(max(piles)) * n)
    // n : length of piles
    // Space : O(1)
    var [l, r] = [0, Math.max(...piles)];
    var mid, hrs;
    res = r;

    while(l<=r) {
        mid = Math.floor((l+r)/2);
        hrs = 0;
        for(var p of piles)
            hrs += Math.ceil(p/mid);
        
        if(hrs <= h) {
            res = Math.min(res, mid);
            r = mid - 1;
        }
        else 
            l = mid + 1
    }

    return res;
};