/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
//     Time : O(n) Space O(n)
    if(!head) {
        return null;
    }
    
    const map = new Map();
    
	// Create the copy and map it to the origin
    let origin = head;
    while(origin) {
        const copy = new Node(origin.val);
        map.set(origin, copy);
        origin = origin.next;
    }
    
	// Now we have all the unlinked copied nodes
	// Get the next and random from origin then assign it to the copy
    origin = head;
    while(origin) {
        const copy = map.get(origin);
        copy.next = map.get(origin.next) || null;
        copy.random = map.get(origin.random) || null;
        origin = origin.next;
    }
    
	// Just return the copy of the head
    return map.get(head);
};