/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// Time: O(nlongn) | Space: O(1)
var findTheDifference = function(s, t) {
    let i = 0;
    t = t.split('').sort().join('');
    s = s.split('').sort().join('');
    console.log(s, t);
    while(i<s.length) {
        if(t[i] !== s[i]) return t[i];
        i++;
    }
    return t[i];
};