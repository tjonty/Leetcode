/**
 * @param {string[]} strs
 * @return {string}
 */
// Time : O(n*m) | m length of strs | n length of first string
var longestCommonPrefix = function(strs) {
    var idx = 0;
    var flag = true;
    
    while(idx < strs[0].length) {
        flag = true;
        for(var i=1; i<strs.length; i++) {
            if(strs[i][idx] != strs[0][idx]) {
                flag = false;
            }
        }   
        if(!flag) {
            return strs[0].slice(0, idx);
        }
        idx++;
    }
    
    return strs[0];
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