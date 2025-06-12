let input = [
    '28',
    '3',
    'coffee',
    'tea',
    'pineapple',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let T = +gets();
let N = +gets();

let averageSum = 0;

for (let i = 0; i < N; i++) {
    let someWord = gets();
    let wordNumber = 0;

    for (let j = 0; j < someWord.length; j++) {
        let letterCode = someWord.charCodeAt(j);
        // print(`${someWord}: ${someWord.charCodeAt(j)}`);
        wordNumber += (letterCode - 96);
    }

    // console.log(wordNumber);
    
    let averageSumNumber = Math.abs(wordNumber - T);

    averageSum += averageSumNumber;

    print(`${someWord} ${averageSumNumber}`);
}

print(`${(averageSum/N).toFixed(2)}`);