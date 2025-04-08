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
let counter = 1; 

for (let i = 1; i <= N-1; i++) {
    for (let j = 1; j <= N-1; j++) {
        print(`${j} `);
    }
    print();
}