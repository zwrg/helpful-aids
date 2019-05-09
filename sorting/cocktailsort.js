import {mySort} from "../imports/arrayHelper";

const coctailsort = (array) => {
    const size = array.length;
    let maxIter = size;
    let swapped = true;
    for (let i = 0; i < maxIter - 1 && swapped; i++) {
        swapped = false;
        for (let j = i; j < size - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        maxIter--;
        if (swapped) {
            swapped = false;
            for (let j = maxIter; j > i; j--) {
                if (array[j] < array[j - 1]) {
                    [array[j], array[j - 1]] = [array[j - 1], array[j]];
                    swapped = true;
                }
            }
        }
    }
    return array;
};

mySort(coctailsort);