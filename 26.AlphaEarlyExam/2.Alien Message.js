let input = [
    'thank you',
    'muchas gracias',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let englishMessage = gets().split('');
let spanishMessage = gets().split('');

let lengthDifference = spanishMessage.length - englishMessage.length;
// console.log(englishMessage);
// console.log(spanishMessage);

let decodedArray = [];
let decodeNumber = 0;

for (let i = 0; i < englishMessage.length; i++) {
    let newCharacter;

    const englishLetter = englishMessage[i];
    const spanishLetter = spanishMessage[i];

    if (englishLetter === ' ' || spanishLetter === ' ') {
        newCharacter = ' ';
    } else if (englishLetter === '-' || spanishLetter === '-') {
        newCharacter = '-';
    } else {
        decodeNumber = Math.abs(englishLetter.charCodeAt(0) - spanishLetter.charCodeAt(0));
        switch (decodeNumber) {
            case 0:
                newCharacter = 'a';
                break;
            case 1:
                newCharacter = 'b';
                break;
            case 2:
                newCharacter = 'c';
                break;
            case 3:
                newCharacter = 'd';
                break;
            case 4:
                newCharacter = 'e';
                break;
            case 5:
                newCharacter = 'f';
                break;
            case 6:
                newCharacter = 'g';
                break;
            case 7:
                newCharacter = 'h';
                break;
            case 8:
                newCharacter = 'i';
                break;
            case 9:
                newCharacter = 'j';
                break;
            case 10:
                newCharacter = 'k';
                break;
            case 11:
                newCharacter = 'l';
                break;
            case 12:
                newCharacter = 'm';
                break;
            case 13:
                newCharacter = 'n';
                break;
            case 14:
                newCharacter = 'o';
                break;
            case 15:
                newCharacter = 'p';
                break;
            case 16:
                newCharacter = 'q';
                break;
            case 17:
                newCharacter = 'r';
                break;
            case 18:
                newCharacter = 's';
                break;
            case 19:
                newCharacter = 't';
                break;
            case 20:
                newCharacter = 'u';
                break;
            case 21:
                newCharacter = 'v';
                break;
            case 22:
                newCharacter = 'w';
                break;
            case 23:
                newCharacter = 'x';
                break;
            case 24:
                newCharacter = 'y';
                break;
            case 25:
                newCharacter = 'z';
                break;
            default:
                newCharacter = spanishLetter;
                break;
        }
    }

    decodedArray.push(newCharacter);
}

for (let i = englishMessage.length; i < spanishMessage.length; i++) {
    decodedArray.push(spanishMessage[i]);
}

console.log(decodedArray.join(''));


// let message = []
// for (let i = 0; i < decodedArray.length; i++) {
//     const element = String.fromCharCode(decodedArray[i]);

//     console.log(element);

//     message.push(element);
// }

// console.log(message);
