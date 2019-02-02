function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1 && num !== 0;
}

const fibonacci = (n) => {
    const result = [0, 1];
    const primeNumbers = [];
    for (var i = 2; i < n; i++) {
        let count = result[i-2] + result[i-1];
        if (isPrime(count)) {
            primeNumbers.push(count)
        }
        result.push(result[i-2] + result[i-1]);
    }
    console.log('ALL PRIME = ', primeNumbers)
    // calculate prime fibonacci numbers and stop before n limit
    return primeNumbers.reduce((a, b) => {
        if (b > n) {
            b = 0
        }
        return a + b
    })
}

console.log(fibonacci(20));