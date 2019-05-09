import {mySort} from "../imports/arrayHelper";

const insertionsort = (array) => {
    const size = array.length;
    for (let i = 0; i < size; i++) {
        let current = array[i];
        let j = i;
        while (j > 0 && current < array[j - 1]) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = current;
    }
    return array;
};

mySort(insertionsort);
