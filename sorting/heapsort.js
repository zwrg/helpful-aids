import {mySort} from "../imports/arrayHelper";

// convert to heap
Array.prototype.toHeap = function (index, size) {
    let max = index;
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;

    if (leftIndex < size && this[leftIndex] > this[max])
        max = leftIndex;

    if (rightIndex < size && this[rightIndex] > this[max])
        max = rightIndex;

    if (max !== index) {
        [this[max], this[index]] = [this[index], this[max]];
        this.toHeap(max, size);
    }
};

const heapsort = (array) => {
    const size = array.length;
    for (let i = Math.floor(size / 2) - 1; i > -1; i--) {
        array.toHeap(i, size);
    }
    for (let i = size - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        array.toHeap(0, i);
    }
    return array;
};

mySort(heapsort);