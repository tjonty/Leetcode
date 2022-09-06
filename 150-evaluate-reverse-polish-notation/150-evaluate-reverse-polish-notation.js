/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var operator = ['+', "-", "/", "*"];
    var stack = [];
    for(var token of tokens) {
        if(operator.includes(token) && stack.length != 0)
            stack.push(action(stack.pop(), stack.pop(), token));
        else 
            stack.push(token)
    }

    function action(a, b, op) {
        a = Number(a);
        b = Number(b);
        if(op == "+")
            return a+b;
        else if(op == "-")
            return b-a;
        else if(op == "*")
            return a*b;
        else 
            return Math.trunc(b/a);
    }

    return stack[0]
};