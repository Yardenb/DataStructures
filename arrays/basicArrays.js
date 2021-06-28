class MyArr {
    constructor(){
        this.data = {};
        this.size = 0;
        for(const key in arguments){
            this.push(arguments[key]);
        }
    }

    push(newElement){
        this.data[this.size] = newElement;
        this.size++; 
        return this.size;
    }

    pop(){
        const elementToRemove = this.data[this.size -1];
        delete this.data[this.size -1 ];
        this.size--;
        return elementToRemove;
    }

    shift(){
        const elementToRemove = this.data["0"];
        delete this.data["0"];
        this.size--;
        for(let i=0 ;i<this.size ; i++){
            this.data[i] = this.data[i+1];
            delete this.data[i+1];
        
        }
        return elementToRemove;
    }
    unshift(newElement){
        
        for(let i= this.size; i>0; i--){
            this.data[i] = this.data[i-1];
        }
        this.data["0"] = newElement;
        this.size++;
        return this.size;
    }
    getElementByIndex(idx){
        return this.data[idx];
    }
    deleteByIndex(idx){
        const elementToRemove = this.data[idx];
        delete this.data[idx];

        for(let i=idx+1; i<this.size;i++){
           this.data[i-1] = this.data[i]; 
           delete this.data[i];
        }
        this.size--;
        return elementToRemove;
    }
    getAllArray(){
        return this.data;
    }
    //Todo - implement the following:
    //1. Delete all array
    //2.Reverse array

}

const myArr = new MyArr()
myArr.push('first');
myArr.push('second');
myArr.push('third');
myArr.push('4th');