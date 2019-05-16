class Stack {
    constructor() {
        this.top = 0;
        this.stack = [];
    }

    push(value) {
        this.stack[this.top] = value;
        this.top++;
    }

    pop() {
        if (this.top === 0) {
            return null;
        }
        this.top--;
        let result = this.stack[this.top];
        // delete this.stack[this.top]; // that leaves null on stack
        this.stack = this.stack.slice(0, this.top);
        return result;
    };

    size() {
        return this.top;
    }

    view() {
        console.log(this.stack.join());
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.view();
console.log("size: " + myStack.size());
console.log("pop(): " + myStack.pop());
console.log("size: " + myStack.size());
myStack.view();
