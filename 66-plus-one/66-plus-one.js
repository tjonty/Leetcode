/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Time: O(n) | Space: O(1)
var plusOne = function(digits) {    
    var len = digits.length;
    if(digits[len-1] + 1 >= 10) {
        digits[len-1] = 0;
        var i = len-2;
        while(i>=0) {
            if(digits[i]+1 >= 10) digits[i] = 0;
            else {
                digits[i] += 1;
                return digits
            }
            i--;
        }
        if(digits[0] == 0) digits.unshift(1);
    }
    else digits[len-1] += 1;
    
    return digits;
};

// Another Aproach from discussion - work
// return [...(BigInt(digits.join(""))+1n).toString()];

// Another - not worked for long string
// num = parseInt(digits.join(''));
// num++;
// return [...String(num).split('')]