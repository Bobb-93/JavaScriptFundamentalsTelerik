let input = [
    '1,2,3,3,5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(',').map(Number);
// console.log(array);

let N = array.length;
let orderedArray = [];
for (let i = 1; i <= N; i++) {
    orderedArray.push(i);
}

let missingNumbers = [];

for (let i = 0; i < N; i++) {
    const element = orderedArray[i];

    let found = false;

    for (let j = 0; j < N; j++) {
        const innerElement = array[j];

        if(element === innerElement){
            found = true;
            break;
        }
        
    }

    if(!found){
        missingNumbers.push(element);
    }
}

let output = missingNumbers.join(',');

console.log(output);
