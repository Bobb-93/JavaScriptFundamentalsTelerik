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

if (a >= b && a >= c) {
    print(a);
} else if (b >= a && b >= c) {
    print(b);
} else if (c >= a && c >= b) {
    print(c);
}