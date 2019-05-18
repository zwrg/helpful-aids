// naive
const isPrime = (number) => {
    let isPrime = true;
    let limit = Math.sqrt(number);
    for (let i = 2; i <= limit; i++)
        if ((number % i) === 0) isPrime = false;
    return isPrime;
};

console.log(isPrime(2));
console.log(isPrime(49));
console.log(isPrime(53));