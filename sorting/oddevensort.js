import {mySort} from "../imports/arrayHelper";

const oddevensort = (array) => {
    const size = array.length;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < size - 1; i += 2) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
            }
        }
        for (let i = 0; i < size - 1; i += 2) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
            }
        }
    }
    return array;
};

mySort(oddevensort);