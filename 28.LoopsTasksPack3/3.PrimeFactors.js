let input = [
    '12',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let divisor = 2;
// let factors = [];

while (N > 1) {
    if(N % divisor === 0){
        console.log(divisor);
        N /= divisor;
    } else{
        divisor++;
    }
}