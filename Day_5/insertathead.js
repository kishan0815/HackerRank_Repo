// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    var node = new SinglyLinkedListNode(data);
    var curr = head;
    if(head == null){
        head =  node;
        return head;
    }
    else{
        head = node;
        head.next = curr;
        return head;
    }
}