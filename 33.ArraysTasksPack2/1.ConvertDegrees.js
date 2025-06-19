let input = [
    '0 15 30',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(' ').map(Number);

let arrayLength = array.length;

for (let i = 0; i < arrayLength; i++) {
    const element = array[i];
    
    print(Math.round(element * (9/5) + 32));
}