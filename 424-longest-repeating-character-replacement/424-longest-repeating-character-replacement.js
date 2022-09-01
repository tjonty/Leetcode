/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
//     Soln Time O(n) Space O(n)
    var count = new Array(26).fill(0);
    var res = 0;

    var l = 0;
    var maxf = 0;
    for(var r=0;r<s.length;r++) {
        count[s[r].charCodeAt(0) - "A".charCodeAt(0)]++;
        maxf = Math.max(maxf, count[s[r].charCodeAt(0) - "A".charCodeAt(0)]);

        if((r-l+1) - maxf > k) {
                        count[s[l].charCodeAt(0) - "A".charCodeAt(0)]--;
            l++;
        }

        res = Math.max(res, r-l+1);
    }

    return res;
};