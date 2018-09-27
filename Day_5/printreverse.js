// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
    if(head == null){
            console.log("");
    }
    else{
        var curr = head;
        var list = [];
        while(curr.next != null){
            list.push(curr.data);
            curr = curr.next;
        }
        list.push(curr.data);
        for(var i = list.length - 1;i>=0;i--){
            console.log(list[i]);
        }
    }
}