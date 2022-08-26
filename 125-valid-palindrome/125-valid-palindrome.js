/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     // Soln 1: Time O(n) Space O(1)
    var left = 0, right=s.length-1;
    while(left<=right) {
        while(!/^[a-z0-9]+$/i.test(s[left])) left++;
        while(!/^[a-z0-9]+$/i.test(s[right])) right--;

        if(left<=right && s[left].toLowerCase() != s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
};