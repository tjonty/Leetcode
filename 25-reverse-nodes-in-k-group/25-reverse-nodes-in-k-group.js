/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var dummy = new ListNode(null, head);
    groupPrev = dummy;
    
    while(true) {
        kth = getKth(groupPrev, k);
        if(!kth)
            break;
        groupNext = kth.next;
        
//         reverse Group
        var [prev, curr] = [kth.next, groupPrev.next];
        
        while(curr != groupNext) {
            tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }
        
        tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }
    
    return dummy.next;
    
    function getKth(curr, k) {
        while(curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
    
};