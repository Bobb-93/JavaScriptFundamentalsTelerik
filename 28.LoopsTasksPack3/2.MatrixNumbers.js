let input = [
    // '2',
    // '50',
    // '40',
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

for (let i = 0; i < N; i++) {
    let row = '';
    for (let j = 0; j < N; j++) {
        row += (i + j + 1) + ' ';
        console.log(`row: ${row}`);
        
    }
    console.log(row.trim());
}