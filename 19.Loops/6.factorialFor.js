// calculate the factorial
let n = 6;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;
}

console.log(`factorial: ${factorial}`);

// calculate the sum of powers of 2 up to the boundary
let boundary = 128;
let sum = 0;

for (let i = 1; i < boundary; i = i * 2) {
  sum = sum + i;
}

console.log(`sum of powers of 2 up to ${boundary} = ${sum}`);