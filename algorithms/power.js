export function power(a, b) {
    if (!Number.isInteger(b)) throw new Error("Not integer");
    let sum = 1;
    for (let i = b; i > 1; i--) {
        sum = sum * a;
    }
    return sum;
}

console.log(power(2, 8));