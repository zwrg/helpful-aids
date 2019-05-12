import {mySort} from "../imports/arrayHelper";

const quicksort = (array) => {
    const size = array.length;
    if (size < 2) return array;
    let left = [];
    let right = [];
    let pivot = array.shift();
    while (array.length)
        if (array[0] < pivot)
            left.push(array.shift());
        else
            right.push(array.shift());
    return quicksort(left).concat(pivot).concat(quicksort(right));
};

mySort(quicksort);