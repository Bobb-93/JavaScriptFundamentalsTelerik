let input = [
    // '2',
    // '50',
    // '40',
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let row = '';

for (let i = 1; i <= N; i++) {
    for (let j = i; j < N + i; j++) {
        row += j + ' ';
        // console.log(`row: ${row}`); 
    }
    console.log(row.trim());
    row = '';
}