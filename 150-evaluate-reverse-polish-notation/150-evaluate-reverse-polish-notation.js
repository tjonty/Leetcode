/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // Nice Way :::
    var OPERATORS = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
    };
    var stack = [];
    for (var token of tokens) {
        if (token in OPERATORS) {
            var rhs = stack.pop();
            var lhs = stack.pop();
            stack.push(OPERATORS[token](lhs, rhs));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
};

 // Soln 1: Worked but More Code:- 
    // Time O(n) Space O(1)
   
//     var operator = ['+', "-", "/", "*"];
//     var stack = [];
//     for(var token of tokens) {
//         if(operator.includes(token) && stack.length != 0)
//             stack.push(action(stack.pop(), stack.pop(), token));
//         else 
//             stack.push(token)
//     }

//     function action(a, b, op) {
//         a = Number(a);
//         b = Number(b);
//         if(op == "+")
//             return a+b;
//         else if(op == "-")
//             return b-a;
//         else if(op == "*")
//             return a*b;
//         else 
//             return Math.trunc(b/a);
//     }

//     return stack[0]