import {mySort} from "../imports/arrayHelper";

const shellsort = (array) => {
    const size = array.length;
    let gap = Math.floor(size / 2);
    while (gap > 0) {
        for (let i = gap; i < size; i++) {
            let val = array[i];
            let j = i;
            while (j >= gap && array[j - gap] > val) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = val;
        }
        gap = Math.floor(gap / 2);
    }
    return array;
};

mySort(shellsort);