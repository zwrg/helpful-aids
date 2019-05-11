import {mySort} from "../imports/arrayHelper";

const gnomesort = (array) => {
    const size = array.length;
    for (let i = 0; i < size;) {
        if (i === 0 || array[i] >= array[i - 1]) {
            i++;
        } else {
            [array[i], array[i - 1]] = [array[i - 1], array[i]];
            i--;
        }
    }
    return array;
};

mySort(gnomesort);