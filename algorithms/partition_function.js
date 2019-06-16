var memo = [];
function partition_function(num, m = num) {
    if (num === 0) return 1;
    if (m === 0 || num < 0) return 0;
    if (!memo[num]) memo[num] = [];
    let total = memo[num][m];
    if (parseInt(total) !== total) {
        total = partition_function(num - m, m) + partition_function(num, m - 1);
        memo[num][m] = total;
    }
    return total;
}

console.log(partition_function(2));
console.log(partition_function(9));
console.log(partition_function(53));