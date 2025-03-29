// What is a prime number? 
// https://www.youtube.com/watch?v=mIStB5X4U8M

let n = 7;
let m = 17;

for (let i = n; i <= m; i++) {
  let isPrime = true;
  let maxDivisor = Math.round(Math.sqrt(i));

  for (let j = 2; j <= maxDivisor; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${i} is a prime number`);
  }
}