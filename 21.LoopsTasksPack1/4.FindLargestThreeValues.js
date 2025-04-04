let input = [
    '6',
    '9',
    '11',
    '3',
    '2',
    '1',
    '8',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let ourArray = [];

for (let i = 0; i < N; i++) {
    ourArray.push(+gets());
}

let largest = -500;
let secondLargest = -500;
let thirdLargest = -500;

for (let i = 0; i < N; i++) {
    const number = ourArray[i];
    
    if(number >= largest){
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = number;
    } else if(number >= secondLargest && number <= largest){
        thirdLargest = secondLargest;
        secondLargest = number;
    } else if(number >= thirdLargest && number <= secondLargest){
        thirdLargest = number;
    }
}

print(`${largest}, ${secondLargest} and ${thirdLargest}`);

/*
My solution - 80 points, does not work well
for (let i = 0; i < N; i++) {
    const element = ourArray[i];
    
    if(largest <= element){
        largest = element;
    } 

}

for (let i = 0; i < N; i++) {
    const element = ourArray[i];
    if(secondLargest <= element && element < largest){
        secondLargest = element;
    }
}

for (let i = 0; i < N; i++) {
    const element = ourArray[i];
    
    if(thirdLargest <= element && element < secondLargest){
        thirdLargest = element;
    }
    
}

print(`${largest}, ${secondLargest} and ${thirdLargest}`);
*/