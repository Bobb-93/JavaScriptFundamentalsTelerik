let input = [
    '4',
    'pizza',
    'macaroni',
    'kiufte',
    'banica',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let vowels = ['a', 'o', 'u', 'e', 'i'];
let foods = [];
let wordLength = 0;
let vowelsToLettersRatio = 0;

let minVowelsToLettersRatio = 1;
let minVowelsToLettersRatioIndex = 0;
let minVowelCount = 0;
let maxLetterCount = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
    let someFood = gets();
    foods.push(someFood);
    let vowelCount = 0;

    wordLength = someFood.length;

    for (let letter of someFood) {
        if (vowels.includes(letter)) {
            vowelCount++;
        }
    }

    // print(someFood, vowelCount, wordLength);

    vowelsToLettersRatio = vowelCount / wordLength;

    if (minVowelsToLettersRatio > vowelsToLettersRatio 
         || (minVowelsToLettersRatio == vowelsToLettersRatio && vowelCount > minVowelCount)
        || (minVowelsToLettersRatio == vowelsToLettersRatio && vowelCount == minVowelCount && maxLetterCount < wordLength) ) {
        minVowelsToLettersRatio = vowelsToLettersRatio;
        minVowelsToLettersRatioIndex = i;
        minVowelCount = vowelCount;
        maxLetterCount = wordLength;
    }
}

print(`${foods[minVowelsToLettersRatioIndex]} ${minVowelCount}/${foods[minVowelsToLettersRatioIndex].length}`);

