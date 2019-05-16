class Heap {
    constructor() {
        this.h = [];
        this.currsize = 0;
    }

    leftChild(i) {
        if ((2 * i + 1) < this.currsize) {
            return 2 * i + 1;
        }
        return null;
    }

    rightChild(i) {
        if ((2 * i + 2) < this.currsize) {
            return 2 * i + 2;
        }
        return null;
    }

    maxHeapify(node) {
        if (node < this.currsize) {
            let m = node;
            let lc = this.leftChild(node);
            let rc = this.rightChild(node);
            if (lc !== null && this.h[lc] > this.h[m]) {
                m = lc;
            }
            if (rc !== null && this.h[rc] > this.h[m]) {
                m = rc;
            }
            if (m !== node) {
                [this.h[node], this.h[m]] = [this.h[m], this.h[node]];
                this.maxHeapify(m);
            }
        }
    }

    buildHeap(a) {
        this.currsize = a.length;
        this.h = [...a];
        // console.log(a);
        // console.log(this.h);
        for (let i = Math.floor(this.currsize / 2); i > -1; i--) {
            this.maxHeapify(i);
        }
    }

    getMax() {
        if (this.currsize >= 1) {
            let me = this.h[0];
            [this.h[0], this.h[this.currsize - 1]] = [this.h[this.currsize - 1], this.h[0]];
            this.currsize--;
            this.maxHeapify(0);
            return me;
        }
        return null;
    }

    heapSort() {
        let size = this.currsize;
        while (this.currsize - 1 >= 0) {
            [this.h[0], this.h[this.currsize - 1]] = [this.h[this.currsize - 1], this.h[0]];
            this.currsize--;
            this.maxHeapify(0);
        }
        this.currsize = size;
    }

    insert(value) {
        this.h.push(value);
        let size = this.currsize;
        this.currsize++;
        while (this.h[size] > this.h[size / 2]) {
            [this.h[size / 2], this.h[size]] = [this.h[size], this.h[size / 2]];
            size = size / 2;
        }
    }

    display() {
        console.log(this.h);
    }
}

let array = [1, 2, 7, 8, 13, 23, 3, 5, 2];
let myHeap = new Heap();
myHeap.buildHeap(array);
myHeap.heapSort();
myHeap.display();