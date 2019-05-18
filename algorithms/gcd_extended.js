export const gcdeuclid_extended = (a, b) => {
    let iterations = 0;
    /*quotients definition*/
    let s = 0, old_s = 1;
    let t = 1, old_t = 0;
    let r = b, old_r = a;
    while (r !== 0) {
        iterations++;
        let quotient = Math.floor(old_r / r);

        [old_r, r] = [r, old_r - quotient * r];
        [old_s, s] = [s, old_s - quotient * s];
        [old_t, t] = [t, old_t - quotient * t];
    }
    /*old_s, old_t - Bezout coefficients
    * old_r - greatest common divisor
    * t, s - quotients by gcd*/
    return [old_r, iterations];
};

let [gcd, iterations] = gcdeuclid_extended(256, 96);
console.log(`gcd:${gcd}, iterations:${iterations}`);