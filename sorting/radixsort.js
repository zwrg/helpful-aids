import {mySort} from "../imports/arrayHelper";

const radixsort = (array) => {
    const size = array.length;
    const radix = 10;

    let placement = 1;
    let maxLength = false;

    while (!maxLength) {
        maxLength = true;
        let buckets = [];

        for (let i = 0; i < radix; i++) {
            buckets.push([]);
        }
        for (let j = 0; j < size; j++) {
            let tmp = array[j] / placement;
            buckets[Math.floor(tmp % radix)].push(array[j]);
            if (maxLength && tmp > 0)
                maxLength = false;
        }

        let k = 0;
        for (let l = 0; l < radix; l++) {
            let buck = buckets[l];
            for (let m = 0; m < buck.length; m++) {
                array[k] = buck[m];
                k++;
            }
        }
        placement *= radix;
    }

    return array;
};

mySort(radixsort);