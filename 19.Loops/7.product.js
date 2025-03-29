let n = 3;
let m = 6;

if (n < m) {
  let num = n;
  let product = 1;
  while (num <= m) {
    product = product * num;
    console.log(`product = ${product}`);
    
    num++;
  }

  console.log(`Product[${n}..${m}] = ${product}`);
} else {
  console.log(`Error: n (${n}) should be smaller than m (${m})!`);
}
