/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var str0 = strs[0];
    var idx = 0;
    var match_str = "";
    var flag = true;
    
    while(idx < str0.length) {
        flag = true;
        for(var i=1; i<strs.length; i++) {
            if(strs[i][idx] != str0[idx]) {
                flag = false;
            }
        }   
        if(flag) {
            match_str = match_str.concat(str0[idx]);
            idx++;
        }
        else {
            return match_str;
        }
    }
    
    return match_str;
};

// Approach 1: fail
// var length = strs[0].length;
//     var idx = 0;
//     var longest = 0;
//     if(strs.length == 1) return strs[0];
//     for(i=1;i<strs.length;i++) {
//         idx=0;
//         while(strs[0][idx] == strs[i][idx] && idx<length){
//             idx++;
//         }
//         if(longest > idx) return strs[0].substring(0, idx);
//         longest = idx;
//      }
//     return strs[0].substring(0, longest);