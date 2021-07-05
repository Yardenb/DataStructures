class StackFromArr {
    constructor(){
        this.data = [];
        this.size = 0;
        this.maxSize = 10;
    }
    push(element){
        if(this.data.length >= this.maxSize){
            return;
        }
        this.data.push(element);
        this.size++;
        return this;
    }
    pop(){
        if(this.size === 0){
            return;
        }
        this.data.pop();
        this.size--;
        return this;
    }
    deleteAll(){
        this.data = [];
        this.size = 0;

    }
    peek(){
        return this.data[this.size -1];
    }
    isEmpty(){
        return this.size === 0;
    }
    isFull(){
        return this.size === this.maxSize;
    }
    getRear(){
        return this.data[0];
    }
}

const myStack = new StackFromArr();