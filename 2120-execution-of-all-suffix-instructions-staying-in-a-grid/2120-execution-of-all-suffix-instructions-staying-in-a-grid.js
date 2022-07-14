/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
//     Time: O(n^2)
//     Space: O(n)
    let answers = []; // S(n) - length of s
//     T(n) * T(n)
    for (i = 0; i < s.length; i++) { // T(n)
        let movement = 0;
        let [row, col] = startPos;
        for (j = i; j < s.length; j++) { // T(n)
            if (s[j] == "R") col++;
            else if (s[j] == "L") col--;
            else if (s[j] == "D") row++;
            else row--;
            if(row>n-1 || col > n-1 || row < 0 || col < 0) {
                break;
            }
            movement++;
        }
        answers[i] = movement;
    }
    return answers;
};