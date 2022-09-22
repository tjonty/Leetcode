/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
//     Soln 3: Iterative DFS
    //     Time : O(n) Space: O(h)::worst: O(n)
    var stack = [[root, 1]];
    var res = 0;
    while(stack.length != 0) {
        var [node ,depth] = stack.pop();
        
        if(node) {
            res = Math.max(res, depth);
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }
    return res;
//     Soln 2: Iterative BFS | no need to use BFS in this question
//     Time : O(n) Space: O(h)::worst: O(n)
//     if(!root)
//         return 0;
    
//     var q = [root];level=0;
//     while(q.length != 0) {
//         for(var val of q){
//             var node = q.shift();
//             if(node.left)
//                 q.push(node.left);
//             if(node.right)
//                 q.push(node.right);
//         }
//         level++;
//     }
//     return level;
//     Soln 1 : Recursive DFS | 45% 100ms
//     Time : O(n) Space: O(h)::worst: O(n)
//     if(!root)
//         return 0;
    
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};