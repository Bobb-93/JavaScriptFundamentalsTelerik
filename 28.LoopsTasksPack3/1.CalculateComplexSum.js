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

    element = (element * i) / X;
    S += element;
    // print(S);
}

print(S.toFixed(5));