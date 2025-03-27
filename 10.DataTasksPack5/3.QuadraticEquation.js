let input = [
    '2',
    '5',
    '-3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let a = +gets();
// let b = +gets();
// let c = +gets();

let a = parseFloat(gets());
let b = parseFloat(gets());
let c = parseFloat(gets());


// let D = (b * b) - (4*a*c);
let D = b * b - 4*a*c;

let x1 = (-b - Math.sqrt(D)) / (2*a);
let x2 = (-b + Math.sqrt(D)) / (2*a);

// let x1 = -b - Math.sqrt(D) / (2*a);
// let x2 = -b + Math.sqrt(D) / (2*a);

print(`x1=${x1.toFixed(1)}`);
print(`x2=${x2.toFixed(1)}`);