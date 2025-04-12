let input = [
    '100',
    '200',
    '12',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let x = +gets();
let y = +gets();
let t = +gets();

let thirdDigit;
let secondDigit;
let firstDigit;
let sum;

for (let i = x; i <= y; i++) {
    thirdDigit = i % 10;
    secondDigit = Math.floor(i / 10) % 10;
    firstDigit = Math.floor(i / 100);

    sum = thirdDigit + secondDigit + firstDigit;
    // print(`${i}: ${thirdDigit}`);
    // print(`${i}: ${secondDigit}`);
    // print(`${i}: ${firstDigit}`);

    if (sum === t) {
        print(i);
    }
}