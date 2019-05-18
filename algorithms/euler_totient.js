import {gcdeuclid_extended} from "./gcd_extended";

export const eulertotient = (n) => {
    let result = 1;
    for (let i = 2; i < n; i++) {
        if (gcdeuclid_extended(i, n)[0] === 1)
            result++;
    }
    return result;
};