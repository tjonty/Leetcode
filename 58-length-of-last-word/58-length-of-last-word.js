/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count = 0;
    for(var i=s.length-1 ;i>=0 ;i--) {
        if(s[i] != ' '){
            count++;
        }
        if(s[i] == ' ' && count > 0) return count;
    }
    return count;
};