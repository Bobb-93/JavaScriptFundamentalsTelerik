let input = [
    'c,c,a,b,a,a,b,c',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(',');

let arrayLength = array.length;
// print(prev);
let noDuplicatesArray = [];
noDuplicatesArray.push(array[0]);

for (let i = 1; i < arrayLength; i++) {
    const element = array[i];
    
    // console.log(element);
    
    if(!noDuplicatesArray.includes(element)){
        noDuplicatesArray.push(element);
    }
    prev = element;
}

print(noDuplicatesArray.join());