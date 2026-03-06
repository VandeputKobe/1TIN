const prompt = require('prompt-sync')();
const n = Number(prompt('enter een nummer: '))
console.log(fibonacci(n))

function fibonacci(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    return fibonacci(n-2) + fibonacci(n-1);
}