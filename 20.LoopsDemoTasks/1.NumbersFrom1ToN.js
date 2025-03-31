let input = [
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

let result = '';

// for (let i = 1; i <= N; i++){
//     if(i === N){
//         result += i;
//         break;
//     }
//     result += i + ' ';
// }

for (let i = 1; i < N; i++){
    result += i + ' ';
}
result += N;

console.log(result);
