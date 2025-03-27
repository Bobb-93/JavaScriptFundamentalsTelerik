let input = [
    'Telerik Academy',
    '31 Al. Malinov, Sofia',
    '+359 888 55 55 555',
    '',
    'http://telerikacademy.com/',
    'Martin',
    'Veshev',
    '25',
    '+359 2 981 981',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
// Read the input from the system
let inputLineOne = gets();
let inputLineTwo = gets();
let inputLineThree = gets();
let inputLineFour = gets();
let inputLineFive = gets();
let inputLineSix = gets();
let inputLineSeven = gets();
let inputLineEight = gets();
let inputLineNine = gets();

print(inputLineOne);
print(`Address: ${inputLineTwo}`);
print(`Tel. ${inputLineThree}`);
print(`Fax: ${inputLineFour}`);
print(`Web site: ${inputLineFive}`);
print(`Manager: ${inputLineSix} ${inputLineSeven} (age: ${inputLineEight}, tel. ${inputLineNine})`);
