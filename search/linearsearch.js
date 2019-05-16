const linearseach = (array, elem) => {
    let iterations = 0;
    const size = array.length;
    for (let i = 0; i < size; i++) {
        iterations++;
        if (array[i] === elem)
            return [i, iterations];
    }
    return [-1, iterations];
};

const exampleArray = [3, 3, 5, 6, 6, 8, 10, 11, 12, 13, 13, 14, 14, 18, 19, 20, 20, 21, 21, 22, 23, 23, 23, 23, 24];
let [pos, iterations] = linearseach(exampleArray, 14);
console.log(`position:${pos}, iterations:${iterations}`);