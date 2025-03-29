let number = 37;
let divisor = 2;
let maxDivisor = Math.round(Math.sqrt(number));
let isPrime = true;

while (isPrime && (divisor < maxDivisor)) {
  if (number % divisor === 0) {
    isPrime = false;
  }
  divisor++;
}

console.log(`${number} is prime = ${isPrime}`);