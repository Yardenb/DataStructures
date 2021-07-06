class ListNode {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        //TODO - create a method to create list from array
    }

    prepend(value){
        const newNode = new ListNode(value);
        if(!this.head){
            this.head = this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }
    append(value){
        const newNode = new ListNode(value);
        if(!this.head){
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
    deleteHead(){
        if(this.size === 0){
            return null;
        }
        const deletedNode = this.head;
        if(this.size === 1){
            this.deleteAll();
            this.size--;
            return deletedNode;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return deletedNode
    }
    deleteTail(){
        if(this.size === 0){
            return null;
        }
        const deletedNode = this.tail;
        if(this.size === 1){
            this.deleteAll();
            this.size--;
            return deletedNode;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return deletedNode;
    }
    deleteAll(){
        this.head = this.tail = null;
    }
}
//TODO:
//1. Find by value
//2. Delete by value
//3. Create array
//4. Create from array
//5. Reverse
const doubleLinked = new DoubleLinkedList();