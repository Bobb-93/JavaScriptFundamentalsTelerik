let input = [
    // '18',
    // '44',
    'real',
    '-2.5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let typeOfInput = gets();
let variable = gets();

if(typeOfInput === "integer"){
    variable = parseInt(variable) + 1;
    print(variable);
} else if(typeOfInput === "real"){
    variable = parseFloat(variable) + 1;
    print(variable.toFixed(2));
} else if(typeOfInput === "text"){
    variable += '*';
    print(variable);
}