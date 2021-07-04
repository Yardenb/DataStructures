class LinkListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(arr){
        this.head = null;
        this.tail = null;
        this.size = 0;
        if(arr){
            this.createFromArray(arr);
        }
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
            this.tail.next = node;
        }
        //Update tail to point at the new node
        this.tail = node;

        this.size++;
        return this;
    }
    //Returns the deleted node
    deleteHead(){
        if(!this.head){
            return this;
        }
        const deletedNode = this.head;
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
    //Returns the desired node/null
    findByValue(value){
        let currentnode = this.head;
        while(currentnode){
            if(this._isEqual(value, currentnode.data)){
                return currentnode;
            }
            currentnode = currentnode.next;
        }
        return null;
    }
    deleteAll(){
        while(this.head){
            this.deleteHead();
        }
    }
    deleteByValue(valueToDelete){
        if(!this.head){
            return;
        }
        let currentNode = this.head;
        if(this._isEqual(valueToDelete, currentNode.data)){
            return this.deleteHead();
        }
        
        let nextNode = currentNode.next;
        while(nextNode){
            if(this._isEqual(valueToDelete, nextNode.data)){
                currentNode.next = nextNode.next;
                this.size--;
                //If the deleted node was the tail - reassign the tail
                if(!currentNode.next){
                    this.tail = currentNode;
                }
                return nextNode;
            }
            currentNode = nextNode;
            nextNode = currentNode.next;
        }
    }
    createArray(){
        let currentNode = this.head;
        const arr = [];
        while(currentNode){
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr;
    }
    //Should be private
    createFromArray(arr){
        for(let i = 0; i < arr.length ; i++){
            this.append(new LinkListNode(arr[i]))
        }
    }
    //TODO - implement the following:
    //1. Reverse

}

const list = new SingleLinkedList();
const node = new LinkListNode('test');
const node2 = new LinkListNode('test 2');
const node3 = new LinkListNode('test 3');
list.append(node);
list.append(node2);
list.append(node3);
console.log(list);