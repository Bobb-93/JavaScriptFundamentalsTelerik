let input = [
    '3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

for (let i = 0; i < N; i++) {
    let array = gets().split(',').map(Number);

    let isSorted = true;

    for (let j = 1; j < array.length; j++) {
        // print(`j = ${j}, array[j-1] = ${array[j-1]}, array[j] = ${array[j]}`);
        if (array[j - 1] > array[j]) {
            isSorted = false;
            break;
        }

    }

    print(isSorted);
}
