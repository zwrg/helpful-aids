const sundaram_sieve = (n) => {
    let size = (n - 2) / 2;
    let isPrime = Array.from(Array(n), () => false);

    for (let i = 1; i <= size; i++)
        for (let j = i; (i + j + 2 * i * j) <= size; j++)
            isPrime[i + j + 2 * i * j] = true;

    let primeNumbers = [];
    primeNumbers.push(2);
    for (let i = 1; i <= size; i++)
        if (isPrime[i] === false)
            primeNumbers.push(2 * i + 1);

    return primeNumbers;
};

let primes = sundaram_sieve(50);
console.log(primes);