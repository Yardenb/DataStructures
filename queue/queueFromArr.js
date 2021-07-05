class QueueWithArray {
    constructor(){
        this.data = [];
        this.maxSize = 5;
    }

    enqueue(element){
        if(this.data.length >= this.maxSize){
            return;
        }
        this.data.unshift(element);
        return this;
    }
    dequeue(){
        this.data.pop();
        return this;
    }
    isEmpty(){
        return this.data.length === 0;
    }
    isFull(){
        return this.data.length === this.maxSize;
    }
    //Front element - the first element to be popped
    getFront(){
        if(this.isEmpty()){
            return;
        }
        const lastElementIdx = this.data.length -1;
        return this.data[lastElementIdx];
    }
    getRear(){
        return this.data[0];
    }
    deleteAll(){
        this.data = [];
    }
}
const queueWithArray = new QueueWithArray();
queueWithArray.enqueue(1);
queueWithArray.enqueue(12);
queueWithArray.enqueue(3);
console.log(queueWithArray);
