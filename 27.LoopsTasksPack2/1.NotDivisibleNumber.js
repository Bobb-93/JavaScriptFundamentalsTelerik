let input = [
    '10',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

let output = "";

for (let i = 1; i <= N; i++) {
    if(i % 3 && i % 7){
        // print(i%3);
        output += `${i} `;
    }
}

print(output);