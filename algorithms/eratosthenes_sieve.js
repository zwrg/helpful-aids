const eratosthenes_sieve = (n) => {
    let limit = Math.sqrt(n);
    let isPrime = Array.from(Array(n), () => true);
    [isPrime[0], isPrime[1]] = [false, false]; // 0 and 1 are not prime
    for (let i = 2; i < limit; i++) {
        if (isPrime[i] === true)
            for (let j = i * i; j < n; j += i)
                isPrime[j] = false;
    }
    let primeNumbers = [];
    isPrime.forEach((value, index) => {
        if (value === true) primeNumbers.push(index);
    });
    // primeNumbers.splice(0, 2); // get rid of 0 and 1
    return primeNumbers;
};

let primes = eratosthenes_sieve(50);
console.log(primes);