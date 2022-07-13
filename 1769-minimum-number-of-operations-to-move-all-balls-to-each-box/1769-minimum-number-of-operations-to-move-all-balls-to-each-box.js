/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let idxones = [];
    let answers = [];

    // all the indexs of 1's
    for(i=0;i<boxes.length;i++) {
        if(boxes[i] == "1") idxones.push(i);
    }

//     calculating the operations & answers[]
    for(i=0;i<boxes.length;i++) {
        let op = 0;
        for(j=0;j<idxones.length;j++) {
            let diff = Math.abs(idxones[j] - i);
            op += diff;
        }
        answers.push(op);
    }
    
    return answers
};