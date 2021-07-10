class StackObj {
    constructor(){
        this.data = {};
        this.size = 0;
        this.maxSize = 10;
        console.log(typeof this.data);
    }

    push(value){
        if(!this.isFull()){
            this.data[this.size] = value;
            this.size++;
        }
        return this;
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
         const poppedElement = this.data[this.size -1];
         delete this.data[this.size - 1];
         this.size--;
         return poppedElement;
    }
    peak(){
        return this.data[this.size -1];
    }
    getRear(){
        if(this.isEmpty()){
            return null;
        }
        return this.data[0];
    }
    deleteAll(){
        this.data = {};
        this.size = 0;
    }
    isFull(){
        return this.size === this.maxSize;
    }
    isEmpty(){
        return this.size === 0;
    }
}

const myStack = new StackObj();