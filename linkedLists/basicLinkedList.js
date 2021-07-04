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
        this.size = 0;
    }
    //Returns list
    prepend(node){
        //If it's the first element
        if(!this.tail){
            this.tail = node;
        }
        //Link the new node
        node.next = this.head;
        //Update head pointer
        this.head = node;

        this.size++;
        return this;
    }
    //Returns list
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

        this.size++;
        return this;
    }
    //Returns the deleted node
    deleteHead(){
        //0 elements in list
        if(!this.head){
            return this;
        }
        let deletedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return deletedNode;
    }
    //Returns the deleted node
    deleteTail(){
        //If there are no elements
        if(!this.tail){
            return this;
        }

        let deletedNode;

        //If there is 1 element
        if(!this.head.next){
            deletedNode = this.head;
            this.head = this.tail = null
            this.size--;
            return deletedNode;
        }
        let currentNode = this.head;
        let nextNode = currentNode.next;
        //Go until we have tail in our nextNode
        while(nextNode.next){
            currentNode = nextNode;
            nextNode = nextNode.next;
        }
        deletedNode = nextNode;
        this.tail = currentNode;
        this.tail.next = null;
        this.size--;
        return deletedNode;
    }
    _isEqual(data1, data2){
        return data1 === data2;
    }

    //TODO - implement the following:
    //1. Delete by value 
    //2. Find by value
    //3. Reverse
    //4. Create array from list
    //5. Create list from arrays
    //6. Delete all
    //7. Add size property
}

const list = new SingleLinkedList();
const node = new LinkListNode('test');
const node2 = new LinkListNode('test 2');
const node3 = new LinkListNode('test 3');
list.append(node);
list.append(node2);
list.append(node3);