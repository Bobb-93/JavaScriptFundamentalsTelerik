let input = [
    '4',
    '3',
    '11',
    '40',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let d = +gets();
let h = +gets();
let m = +gets();
let s = +gets();

let totalSeconds = (d * 86400) + (h * 3600) + (m * 60) + s;

print(totalSeconds);