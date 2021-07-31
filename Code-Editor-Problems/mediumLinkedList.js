class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

 class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }

    reverse(){
        let prev = null;
        let curr = this.head;

        while ( curr != null) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        this.head = prev
        this.print()
        return
    }
}

let list = new LinkedList;
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

list.print()
list.reverse()
// list.print()
