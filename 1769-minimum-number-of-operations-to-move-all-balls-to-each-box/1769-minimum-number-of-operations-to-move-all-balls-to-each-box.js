/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
//     Approach 1 : 
//     Time: O(n^2) | (n^2) + (n)
//     Space: O(n) | (n) + (n)
//     let idxones = []; // S(n) - if all have the 1's 
//     let answers = []; // S(n) - must be n for all boxes

//     // all the indexs of 1's
//     for(i=0;i<boxes.length;i++) { // T(n) - for all boxes
//         if(boxes[i] == "1") idxones.push(i);
//     }

// //     calculating the operations & answers[]
//     // T(n) - O(n) * O(n)
//     for(i=0;i<boxes.length;i++) { // T(n) - for all boxes
//         let op = 0;
//         for(j=0;j<idxones.length;j++) { // T(n) - if all have 1's
//             let diff = Math.abs(idxones[j] - i);
//             op += diff;
//         }
//         answers.push(op);
//     }
    
//     return answers
    
// Approach 2 :
//     Time: O(n) | (n) + (n)
//     Space : O(n) | (n)
    let answers = [];

    let onesCount = 0; let total = 0;
    for(i=0;i<boxes.length;i++) { // T(n)
        answers[i] = total;
        if(boxes[i] == "1") onesCount++;
        total += onesCount;
    }

    onesCount = 0; total = 0;
    for(r=boxes.length - 1;r>=0;r--) { // T(n)
        answers[r] += total;
        if(boxes[r] == "1") onesCount++;
        total += onesCount;
    }

    return answers;
};