/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
//     Modified version from Video
    // Time: O(n+m) n = l1 length; m = l2.length
    var dummy = new ListNode();
    var head = dummy;
    var carry = 0;
    while(l1 || l2 || carry) {
        l1_val = l1 ? l1.val : 0;
        l2_val = l2 ? l2.val : 0;
        
//         New Digit
        var sum = l1_val + l2_val + carry;
        carry = Math.floor(sum/10);
        sum = sum % 10;
        dummy.next = new ListNode(sum);
        
//         Update Ptrs
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        dummy = dummy.next;
    }
    
    return head.next;

};

    // Time: O(n+m) n = l1 length; m = l2.length
//     var dummy = new ListNode(null);
//     var head = dummy;
//     var carry = 0;
//     while(l1 || l2) {
//         l1_val = l1 == undefined ? 0 : l1.val;
//         l2_val = l2 == undefined ? 0 : l2.val;
//         var sum = l1_val + l2_val + carry;
//         if(sum >= 10){
//             var temp = sum-10;
//             dummy.next = new ListNode(temp);
//             carry = 1
//         } else {
//             var temp = sum
//             dummy.next = new ListNode(val = temp);
//             carry = 0;
//         }
//         l1 = l1 == undefined ? null : l1.next;
//         l2 = l2 == undefined ? null : l2.next;
//         dummy = dummy.next;
//     }
//     if(carry == 1)
//         dummy.next = new ListNode(1);
    
//     return head.next;
