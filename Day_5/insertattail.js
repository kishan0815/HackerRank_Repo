// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    var node = new SinglyLinkedListNode(data);
    var temp = head;
    if(temp == null){
        temp = node;
        return temp;
    }
    else{
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = node;
    }
    return head;
}