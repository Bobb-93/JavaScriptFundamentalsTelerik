let input = [
    // '2',
    // '9 10 5 1 3',
    '4',
    '8',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let antimatterCost  = Number(gets());
let distancesBetweenPlanets = gets().split(' ').map(Number);
// console.log(array);

let totalCost = 0;
let arrayLength = distancesBetweenPlanets.length;

let maintenanceCost = arrayLength - 1;
totalCost += maintenanceCost;
// console.log(totalCost);


let costWithoutAntimatterNumber = 0;

for (let i = 0; i < arrayLength; i++) {
    const element = distancesBetweenPlanets[i];
    
    costWithoutAntimatterNumber += element;
}

let costWithAntimatterNumber = costWithoutAntimatterNumber * antimatterCost;

totalCost += costWithAntimatterNumber;

console.log(Math.ceil(totalCost / 10) * 10);
