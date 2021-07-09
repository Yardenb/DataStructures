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
        this.size = 0;
    }
    findByValue(value){
        let nextNode = this.head;
        while(nextNode){
            if(nextNode.data === value){
                return nextNode;
            }
            nextNode = nextNode.next;
        }
        return null;
    }
    findAllByValue(value){
        let nextNode = this.head;
        let foundNodes = [];
        while(nextNode){
            if(nextNode.data === value){
                foundNodes.push(nextNode)
            }
            nextNode = nextNode.next;
        }
        return foundNodes;
    }
    deleteByValue(value){
        const nodeToDelete = this.findByValue(value);
        return this.deleteNode(nodeToDelete);
    }
    deleteNode(nodeToDelete){
        if(!nodeToDelete){
            return null;
        }
        const prev = nodeToDelete.prev;
        const next = nodeToDelete.next;
       
        if(!prev){//Then it's the head
            return this.deleteHead()
        }
        if(!next){//Then it's the tail
            return this.deleteTail()
        }
        prev.next = next;
        next.prev = prev;
        this.size--;
        return nodeToDelete;
    }
    deleteAllByValue(value){
        const nodesToDelete = this.findAllByValue(value);
        for(let i =0 ; i < nodesToDelete.length; i++){
            this.deleteNode(nodesToDelete[i]);
        }
        return this;
    }
    createArrayFromList(){
        const arr = [];
        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr;
    }
    createListFromArray(arr){
        for(let i = 0; i < arr.length; i++){
            this.append(arr[i]);
        }
        return this;
    }
    reverse(){
        
        let currentNode = this.tail;
        this.tail = this.head;
        this.head = currentNode;

        while(currentNode){
            const temp = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = temp;
            currentNode = currentNode.next;
        }
        return this;
    }
}
const doubleLinked = new DoubleLinkedList();