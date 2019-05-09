import {mySort} from "../imports/arrayHelper";

const combsort = (array) => {
    const size = array.length;
    let shrinkFactor = 1.3;

    let gap = (size - 1) / shrinkFactor;
    for (gap; gap > 1; gap = gap / shrinkFactor) {
        let i = 0;
        let j = i + Math.floor(gap);
        for (j; j < size; j++, i++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
};

mySort(combsort);