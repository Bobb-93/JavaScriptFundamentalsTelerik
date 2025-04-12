let input = [
    // '2',
    // '50',
    // '40',
    '3',
    '2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let X = parseFloat(gets());

let S = 1;
let element = 1;

for (let i = 1; i <= N; i++) {

   // Calculate the factorial of 'i' and store it in 'latestFactorial'
   element *= i;
 
   // Add the current term to the 'result'
   // The current term is calculated as the factorial of 'i' divided by X raised to the power of 'i'
   S += element / Math.pow(X, i);
}

print(S.toFixed(5));