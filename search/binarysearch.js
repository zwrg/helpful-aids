const binarysearch = (array, elem) => {
    let iterations = 0;
    const size = array.length;
    let left = 0;
    let right = size - 1;
    while (left <= right) {
        iterations++;
        let mid = Math.floor((left + right) / 2);
        let current = array[mid];
        if (current === elem)
            return [mid, iterations];
        else {
            if (current > elem) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return [-1, iterations];
};

const exampleArray = [3, 3, 5, 6, 6, 8, 10, 11, 12, 13, 13, 14, 14, 18, 19, 20, 20, 21, 21, 22, 23, 23, 23, 23, 24];
let [pos, iterations] = binarysearch(exampleArray, 22);
console.log(`position:${pos}, iterations:${iterations}`);