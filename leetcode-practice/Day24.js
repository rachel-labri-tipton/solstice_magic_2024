// Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // initialize previous and next pointers to null 
    let previousNode = null
    let nextNode = null 

    //set current pointer to the head node 
    let currentNode = head

    while (currentNode !== null) {
        //set the next pointer to the next node in the list 
        nextNode = currentNode.next

        //reverse the current node's pointer to point to the previous node 
        currentNode.next = previousNode

        // set the previous pointer to the current node 
        previousNode = currentNode

        // move the current pointer to the next node 
        currentNode = nextNode
    }

    head = previousNode

    // return the new head pointer 
            
    return head
};

console.log(reverseList([1,2,3,4,5])) // [5,4,3,2,1]
console.log(reverseList([1, 2])) // [2,1]

// Time complexity O(n)
// Space complexity O(1)


// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]
