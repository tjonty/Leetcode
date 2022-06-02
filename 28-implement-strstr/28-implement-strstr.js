/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Time: O(n) | Space: O(1)
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
    // if(needle.length == 0) return 0;
    // for(var i=0;i<haystack.length;i++) {
    //     if(haystack.substr(i, needle.length) === needle) {
    //         return i;
    //     }
    // }
    // return -1;
};
// similar: 
//     while(haystack.substr(i, needle.length) === needle && i<haystack.length) { i++; };