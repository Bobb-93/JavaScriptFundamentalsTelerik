let input = [
    // '18',
    // '44',
    '-1',
    '10',
    '0',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

if ((a > 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c < 0)){
    print("+");
} else if (a === 0 || b === 0 || c === 0) {
        print(0);
} else {
    print("-");
}