/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
//     faster than single line code : Time : O(n) | Space : O(1)
    var i = a.length-1;
    var j = b.length-1;
    var carry = 0;
    var res = [];
    
    while(i>-1 || j>-1) {
        var num_a = i>-1 ? parseInt(a[i]) : 0;
        var num_b = j>-1 ? b.charAt(j) - "0" : 0;
        var total = (num_a + num_b + carry).toString(2);
        total = Number(total);
        res.push(total % 10);
        carry = Math.floor(total / 10);
        i--;
        j--;
    }
    
    if(carry === 1) res.push("1");
    
    return res.reverse().join("");
    
//     for large numbers Time: O(?) || Space: O(?)
// return (BigInt('0b' + a)+BigInt('0b' + b)).toString(2);
};
// for small numbers
// return (parseInt(a,2)+parseInt(b,2)).toString(2))