// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    var node = new SinglyLinkedListNode(data);
    var curr = head;
    if(head == null){
        head = node;
        return head;
    }
    else{
        for(var i=0;i<position-1;i++){
            curr = curr.next;
        }
        var temp = curr.next; 
        curr.next = node;
        node.next = temp;
        return head;
    }
}