let input = [
    '3.5', 
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let r = +gets();

let perimeter = 2 * Math.PI * r;
let area = Math.PI * r * r;

print(perimeter.toFixed(2));
print(area.toFixed(2));
