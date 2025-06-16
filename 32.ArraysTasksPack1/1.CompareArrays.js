let input = [
    '4',
    'pizza',
    'macaroni',
    'kiufte',
    'banica',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let firstArray = [];
let secondArray = [];

for (let i = 0; i < n; i++) {
    firstArray.push(gets());
}

for (let i = 0; i < n; i++) {
    secondArray.push(gets());
}

let areEqual = true;

for (let i = 0; i < n; i++) {
    if(firstArray[i] !== secondArray[i]){
        areEqual = false;
        break;
    }
}

if(areEqual){
    print("equal");
} else{
    print("not equal");
}