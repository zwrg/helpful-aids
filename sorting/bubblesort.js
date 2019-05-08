import {generateArray} from "../imports/arrayHelper";

const bubblesort = (array) => {
    const size = array.length;
    let swapped = true;
    for (let i = size - 1; i > 0 && swapped; i--) {
        swapped = false;
        for (let j = 0; j <= i; j++)
            if (array[j] < array[j - 1]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
                swapped = true;
            }
    }
    return array;
};

let array = generateArray(25);
console.log(`before: ${array}`);
console.log(`after: ${bubblesort(array)}`);