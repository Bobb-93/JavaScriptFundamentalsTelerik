let numbers = [1, 2, -4, 3, 7, 10];

let sum = 0;
let product = 1;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
  product = product * numbers[i];
  console.log(product);
  
}

console.log(`Sum = ${sum}`);
console.log(`Product = ${product}`);