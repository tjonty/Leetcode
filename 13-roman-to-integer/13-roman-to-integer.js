/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var data ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    
    var i = 0;
    var last = Infinity;
    var sum = 0;
    
    while(i<s.length) {
        if(last < data[s[i]]) {
            sum = sum - last + data[s[i]] - last;
        } else {
            last = data[s[i]];
            sum += data[s[i]]
        }
        i++;
    }
    return sum;
};