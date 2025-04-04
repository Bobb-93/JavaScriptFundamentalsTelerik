let input = [
    // '3',
    // '2',
    // '5',
    // '1',
    '5',
    '4 3 2 5 2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let numbers = gets().split(' ').map(Number);

let oddProduct = 1;
let evenProduct = 1;

for (let i = 0; i < N; i++) {
    if (i % 2) {
        evenProduct *= numbers[i];
    } else{
        oddProduct *= numbers[i];
    }
}

if(oddProduct === evenProduct){
    print(`yes ${oddProduct}`);
} else{
    print(`no ${oddProduct} ${evenProduct}`);
}