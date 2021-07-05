import { SingleLinkedList } from '../linkedLists/basicLinkedList.js';
export class QueueFromLinkedList {
    constructor(){
        this.data = new SingleLinkedList();
        this.maxSize = 5;
    }
    enqueue(element){
        if(this.data.size >= this.maxSize){
            return;
        }
        return this.data.append(element);
    }
    dequeue(){
        return this.data.deleteHead();
    }
    isEmpty(){
        return !this.data.head;
    }
    isFull(){
        return this.data.size === this.maxSize;
    }
    getFront(){
        return this.data.head;
    }
    getRear(){
        return this.data.tail;
    }
    deleteAll(){
        this.data.deleteAll()
    }
}
const linkedQueue = new QueueFromLinkedList();
linkedQueue.enqueue(1);
linkedQueue.enqueue(2);
linkedQueue.enqueue(3);
console.log(linkedQueue);
linkedQueue.dequeue();
console.log(linkedQueue);
