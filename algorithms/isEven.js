const isEven = (number) => {
    if (typeof number !== "number") throw new Error("NaN");
    if (!Number.isSafeInteger(number)) throw new Error("NOT SAFE");
    if (!Number.isInteger(number)) throw new Error("NOT INTEGER");
    number = Math.abs(number);
    return (number % 2) === 0;
};

console.log(isEven(222222222222));
// console.log(isEven("text")); // NaN exception
// console.log(isEven(222222222222222222222222222222222222222)); // NOT SAFE exception
console.log(isEven(222222222222223));