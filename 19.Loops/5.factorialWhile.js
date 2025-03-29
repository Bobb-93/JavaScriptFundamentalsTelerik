let n = 6;
let factorial = 1;

while (n > 1) {
  factorial = factorial * n;
  n--;
}

console.log(`factorial: ${factorial}`);