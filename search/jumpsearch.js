const jumpsearch = (array, elem) => {
    let iterations = 0;
    const size = array.length;
    let step = Math.floor(Math.sqrt(size));
    let previous = 0;
    while (array[Math.min(step, size) - 1] < elem) {
        iterations++;
        previous = step;
        step += Math.floor(Math.sqrt(size));
        if (previous >= elem) {
            return [previous, iterations]
        }
    }
    while (array[previous] < elem) {
        iterations++;
        previous++;
        if (previous === Math.min(step, size)) {
            return [-1, iterations]
        }
    }
    if (array[previous] === elem) {
        return [previous, iterations]
    }
    return [-1, iterations];
};

const exampleArray = [3, 3, 5, 6, 6, 8, 10, 11, 12, 13, 13, 14, 14, 18, 19, 20, 20, 21, 21, 22, 23, 23, 23, 23, 24];
let [pos, iterations] = jumpsearch(exampleArray, 22);
console.log(`position:${pos}, iterations:${iterations}`);