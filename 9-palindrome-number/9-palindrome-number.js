/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var num = x;
    var num2 = 0;
    while(num > 0){
        var digit = num%10;
        num2 += digit * 10**(num.toString().length-1);
        num = parseInt(num/10);
    }
    
    if(x == num2) {
        return true;
    } else {
        return false;
    }
};