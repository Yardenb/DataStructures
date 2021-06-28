class LinkListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(node){
        //If it's the first element
        if(!this.tail){
            this.tail = node;
        }
        //Link the new node
        node.next = this.head;
        //Update head pointer
        this.head = node;

        return this;
    }

    append(node){
        //If it's the first element
        if(!this.head){
            this.head = node;
        } else {
            //Link the new node
            this.tail.next = node;
        }
        //Update tail to point at the new node
        this.tail = node;

        return this;
    }
    deleteHead(){
        //0 elements in list
        if(!this.head){
            return this;
        }
        this.head = this.head.next;
        return this;
    }
    deleteTail(){
        //If there are no elements
        if(!this.tail){
            return this;
        }
        //If there is 1 element
        if(!this.head.next){
            this.head = this.tail = null
        }
        let currentNode = this.head;
        let nextNode = currentNode.next;
        while(nextNode.next){
            currentNode = nextNode;
            nextNode = nextNode.next;
        }
        this.tail = currentNode;
        this.tail.next = null;
        return this;
    }
    //TODO - implement the following:
    //1. Delete head - DONE
    //2. Delete tail - DONE
    //3. Delete by value 
    //4. Find by value
    //5. Reverse
    //6. Create array from list
    //7. Create list from array
    //8. Delete all
}

const list = new SingleLinkedList();
const node = new LinkListNode('test');
const node2 = new LinkListNode('test 2');
const node3 = new LinkListNode('test 3');
list.append(node);
list.append(node2);
list.append(node3);