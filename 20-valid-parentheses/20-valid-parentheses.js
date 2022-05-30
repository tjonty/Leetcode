/**
 * @param {string} s
 * @return {boolean}
 */
// Time: O(n)
var isValid = function(s) {
    var stack = [];
//     can also solve this with object; storing values like:
    // var type = {
    //     ")" : "(",
    //     "}" : "{",
    //     "]" : "["
    // }
    var op = ["(", "{", "["];
    var cl = [")", "}", "]"];
    
    for(var i=0; i<s.length; i++) {
        if(op.includes(s[i])) stack.push(s[i]);
        else {
            if(cl.indexOf(s[i]) != -1){
                if(stack[stack.length-1] === op[cl.indexOf(s[i])]) stack.pop();
                else return false;
            }
        }
    }
    if(stack.length != 0) return false;
    return true;
};

// 1st Approach: if -> don't need to close in order.
// var data = {
//         "(" : 0,
//         "{" : 0,
//         "[" : 0
//     }
//     for(var i=0; i<s.length; i++) {
//         if(s[i] == "(" || s[i] == "[" || s[i] == "{") data[s[i]]++;
//         else if(s[i] == ")") data["("]--;
//         else if(s[i] == "}") data["{"]--;
//         else data["["]--;
//     }
//     if(data["("] != 0 || data["{"] != 0 || data["["] != 0) return false;
//     return true;