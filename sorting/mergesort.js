import {mySort} from "../imports/arrayHelper";

const mergeoperation = (array1, array2) => {
    let merged = [];
    while (array1.length && array2.length) {
        if (array1[0] <= array2[0]) {
            merged.push(array1.shift());
        } else {
            merged.push(array2.shift());
        }
    }
    return merged.concat(array1, array2);
};

const mergesort = (array) => {
    if (array.length < 2) return array;
    const size = array.length;
    const half = Math.floor(size / 2);
    array = mergeoperation(mergesort(array.slice(0, half)), mergesort(array.slice(half, size)));
    return array;
};

mySort(mergesort);