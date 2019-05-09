import {mySort} from "../imports/arrayHelper";

const selectionsort = (array) => {
    const size = array.length;
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < size; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
};

mySort(selectionsort);