function fibonacci(n) {
    return n < 1 ? 0
    : n <= 2 ? 1
    : fibonacci(n - 1) + fibonacci(n - 2);
    }
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}
   