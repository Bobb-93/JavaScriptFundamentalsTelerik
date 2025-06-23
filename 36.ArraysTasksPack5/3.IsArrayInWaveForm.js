let input = [
    '2 1 2 1 2 1 2',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(' ').map(Number);

let isInWaveForm = true;
// let comparisonNumber = 0;

for (let i = 0; i < array.length - 1; i++) {
    const firstElement = array[i];
    const secondElement = array[i + 1];

    // print(`firstElement, secondElement = ${firstElement}, ${secondElement}`);
    if (i % 2 === 0 && firstElement <= secondElement) {
        isInWaveForm = false;
        break;
    }

    if (i % 2 !== 0 && firstElement >= secondElement) {
        isInWaveForm = false;
        break;
    }

    // comparisonNumber++;
}

print(isInWaveForm ? "yes" : "no");