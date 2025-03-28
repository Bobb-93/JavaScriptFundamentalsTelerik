let input = [
    // '18',
    // '44',
    '311',
    '115',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let A = +gets();
let B = +gets();

if(A > B){
    let C = A;
    A = B;
    B = C;
}

print(`${A} ${B}`);