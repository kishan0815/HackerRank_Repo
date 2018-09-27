// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
    var temp1 = head;
    var temp2 = null;
    var temp3 = null;
    while(temp1!=null){
        temp2 = temp1.next;
        temp1.next = temp3;
        temp3 = temp1;
        temp1 = temp2;
    }
    for(var i=0;i<positionFromTail;i++){
        temp3 = temp3.next;
    }
    return temp3.data;
}