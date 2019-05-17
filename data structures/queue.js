class Queue {
    /*FIFO*/
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue[this.queue.length] = value;
    }

    dequeue() {
        if (this.queue.length === 0) {
            return null
        }
        let retval = this.queue[0];
        this.queue.splice(0, 1);
        return retval;
    }

    length() {
        return this.queue.length;
    }

    display() {
        console.log(this.queue.join());
    }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(3);
myQueue.enqueue(6);
myQueue.enqueue(2);
myQueue.display();
myQueue.dequeue();
console.log(myQueue.dequeue());
myQueue.display();
