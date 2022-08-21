/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        // soln 1 Time O(n) Space O(n)
    var data_s = {};
    var data_t = {};
    
    if(s.length != t.length) return false;

    for(var i=0;i<s.length;i++){
        data_s[s[i]] ? data_s[s[i]]++ : data_s[s[i]] = 1;
        data_t[t[i]] ? data_t[t[i]]++ : data_t[t[i]] = 1;
    }

    for(var i in data_s){
        if(data_s[i] != data_t[i])
            return false;
    }

    return true;
};