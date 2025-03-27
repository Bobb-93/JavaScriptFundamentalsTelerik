let input = [
    '2346',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = gets();

//without array - my solution
// let N = +gets();

// let firstDigit = Math.floor(N / 1000); // 2
// let secondDigit = Math.floor(N / 100 % 10); // 23 % 10 = 3
// let thirdDigit = Math.floor(N / 10 % 10); // 234 % 10
// let fourthDigit = N % 10;

// let sumDigits = firstDigit + secondDigit + thirdDigit + fourthDigit;

//Telerik way
let sumDigits = +N[0] + +N[1] + +N[2] + +N[3];
print(sumDigits);