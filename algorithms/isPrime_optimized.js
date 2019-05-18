// 6k +- 1 optimization
const isPrime_optimized = (number) => {
    if (number <= 3) return number > 1;
    else if (number % 2 === 0 || number % 3 === 0)
        return false;
    else {
        let i = 5;
        while (i * i <= number) {
            if (number % i === 0 || number % (i + 2) === 0)
                return false;
            i += 6;
        }
        return true;
    }
};

console.log(isPrime_optimized(2));
console.log(isPrime_optimized(49));
console.log(isPrime_optimized(53));