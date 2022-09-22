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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)
        return null;
//     Option 1 for swaping and calling at same time
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
//     Option 2 for swaping and calling at diff time
    // var tmp = root.left;
    // root.left = root.right;
    // root.right = tmp;
    
    // invertTree(root.left);
    // invertTree(root.right);
    
    return root
};