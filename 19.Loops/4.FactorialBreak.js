// What is Factorial 
// https://www.youtube.com/watch?v=-FquswEIswk

let n = 6;
let factorial = 1;

while (true) {
  if (n === 1) {
    break;
  }

  factorial = factorial * n;
  n--;
}

console.log(`factorial: ${factorial}`);