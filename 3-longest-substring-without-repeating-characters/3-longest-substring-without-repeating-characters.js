/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Soln: Time O(n) Space O(n)
    // Sliding Window Approach

    var set = new Set();
    var l = 0, result = 0;

    for(var r=0;r<s.length;r++) {
        while(set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }

        set.add(s[r]);
        result = Math.max(result, set.size);
    }
    return result;
};