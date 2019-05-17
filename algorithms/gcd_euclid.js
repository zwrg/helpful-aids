const gcdeuclid = (a, b) => {
    let iterations = 0;
    while (b !== 0) {
        iterations++;
        let t = b;
        b = a % b;
        a = t;
    }
    return [a, iterations];
};

const gcdeuclid_subtraction = (a, b) => {
    let iterations = 0;
    while (a !== b) {
        iterations++;
        if (a > b) a = a - b;
        else b = b - a;
    }
    return [a, iterations];
};

const gcdeuclid_recursive = (a, b, iterations = 0) => {
    if (b === 0) {
        return [a, iterations];
    } else {
        return gcdeuclid_recursive(b, a % b, ++iterations);
    }
};

let [gcd, iterations] = gcdeuclid(256, 96);
console.log(`gcd:${gcd}, iterations:${iterations}`);
[gcd, iterations] = gcdeuclid_subtraction(256, 96);
console.log(`gcd:${gcd}, iterations:${iterations}`);
[gcd, iterations] = gcdeuclid_recursive(256, 96);
console.log(`gcd:${gcd}, iterations:${iterations}`);