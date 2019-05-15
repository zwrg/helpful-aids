export function generateArray(size) {
    return Array.from(Array(size), () => Math.floor(Math.random() * (size - 1)) + 1)
}

export function sumArray(array) {
    return array.reduce((acc, next) => (acc + next), 0);
}

export function mySort(callback) {
    let array = generateArray(25);
    console.log(`before: ${array}`);
    console.log(`after: ${callback(array)}`);
}