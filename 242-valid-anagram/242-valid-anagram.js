/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // soln 1 Time O(S) Space O(S+T) Optimal
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

//     Soln 2: Time O(nlogn) Space(1) Not optimal
//     var arrS = [...s];
//     var arrT = [...t];
//     if(s.length != t.length) return false;

//     arrS.sort();arrT.sort();

//     for(var i=0;i<s.length;i++){
//         if(arrS[i] != arrT[i]) 
//             return false;
//     }
//     return true;
