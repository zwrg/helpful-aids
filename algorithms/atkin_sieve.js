const atkin_sieve = (n) => {
    let limit = Math.sqrt(n);
    let size = n;
    let isPrime = Array.from(Array(n), () => false);
    [isPrime[0], isPrime[1], isPrime[2], isPrime[3]] = [false, false, true, true]; // sieve works from n>3
    for (let x = 1; x <= limit; x++) {
        for (let y = 1; y <= limit; y++) {
            let n = (4 * x * x) + (y * y);
            if (n <= size && (n % 12 === 1 || n % 12 === 5)) {
                isPrime[n] = !isPrime[n];
            }
            n = (3 * x * x) + (y * y);
            if (n <= size && (n % 12 === 7)) {
                isPrime[n] = !isPrime[n];
            }
            n = (3 * x * x) - (y * y);
            if (x > y && n <= size && (n % 12 === 11)) {
                isPrime[n] = !isPrime[n];
            }
        }
    }
    for (let n = 5; n <= limit; n++) {
        if (isPrime[n]) {
            let x = n * n;
            for (let i = x; i <= size; i += x) {
                isPrime[x] = false;
            }
        }
    }
    let primeNumbers = [];
    isPrime.forEach((value, index) => {
        if (value === true) primeNumbers.push(index);
    });
    return primeNumbers;
};

let primes = atkin_sieve(50);
console.log(primes);