/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var l1 = s1.length;
    var [l, r] = [0, l1-1];
    s1 = s1.split('').sort().join('');
    while(r<s2.length) {
        var temp_str = s2.slice(l, r+1).split('').sort().join('');
        if(temp_str === s1) return true;
        l++;
        r++;
    }
    return false;
};