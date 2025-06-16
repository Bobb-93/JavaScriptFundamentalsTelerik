let input = [
    '28',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

let outputArray = "";

for (let i = 1; i <= N; i++) {
    outputArray += `${i} `;
}

for (let i = N - 1; i >= 1; i--) {
    outputArray += `${i} `;
}

outputArray = outputArray.slice(0, -1);

print(outputArray);