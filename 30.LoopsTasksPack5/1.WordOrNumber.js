let input = [
    'good',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let someString = gets();
let isNumber = false;
let reversedString = "";

for (let i = 0; i < someString.length; i++) {
    const element = someString[i];

    if(element >= '0' && element <= '9'){
        isNumber = true;
    }
    
}

if (isNumber) {
    print(++someString);
} else{
    for (let i = someString.length - 1; i >= 0; i--) {
        const element = someString[i];
    
        reversedString += element;
    }

    print(reversedString);
}