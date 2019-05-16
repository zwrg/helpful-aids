const interpolationsearch = (array, elem) => {
    let iterations = 0;
    const size = array.length;
    let left = 0;
    let right = size - 1;
    while (left <= right) {
        iterations++;
        let point = left + Math.floor(((elem - array[left]) * (right - left)) / (array[right] - array[left]));
        if (point < 0 || point >= size) {
            return [-1, iterations];
        }
        let current = array[point];
        if (current === elem)
            return [point, iterations];
        else {
            if (current > elem) {
                right = point - 1;
            } else {
                left = point + 1;
            }
        }

    }
    return [-1, iterations];
};

const exampleArray = [3, 3, 5, 6, 6, 8, 10, 11, 12, 13, 13, 14, 14, 18, 19, 20, 20, 21, 21, 22, 23, 23, 23, 23, 24];
let [pos, iterations] = interpolationsearch(exampleArray, 21);
console.log(`position:${pos}, iterations:${iterations}`);