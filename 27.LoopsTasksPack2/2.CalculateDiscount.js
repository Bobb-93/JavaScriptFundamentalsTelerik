let input = [
    // '2',
    // '50',
    // '40',
    '4',
    '9.99',
    '19.99',
    '29.99',
    '39.99',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

letiN = +gets();

for (let i = 0; i < N; i++) {

    let price = parseFloat(gets());

    // console.log(Math.round(price * 0.35));
    console.log((price * 0.35).toFixed(2));
    
}