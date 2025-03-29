let n = 11;
let sum = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
  
  sum = sum + i;
}

console.log(`Sum of odd numbers from 1 to ${n} = ${sum}`);