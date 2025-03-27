let input = [
    // '44', 
    '20',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let milesPerGallon = +gets();
const litersPerGallon = 4.54;
const kilometersPerMile = 1.6;

let efficency = milesPerGallon * kilometersPerMile / litersPerGallon;
let result = 100 / efficency

//Telerik formula:
// let result = (100 * litersPerGallon) / (kilometersPerMile * milesPerGallon);

// print(`${Math.floor(result)} litres per 100 km`);
print(`${Math.floor(result)} litres per 100 km`);

//20 miles per gallon = 14 liters per km
//Имаме 20 мили за 1 галон

//14
//6