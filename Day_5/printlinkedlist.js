// Complete the printLinkedList function below.
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    var node = head;
    while(node != null){
        console.log(node.data);
        node = node.next;
    }
}