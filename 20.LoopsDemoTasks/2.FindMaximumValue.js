let input = [
    '3',
    '1',
    '2',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

let max = -200;

for (let i = 1; i <= N; i++) {
    let temp = +gets();
    
    if(max <= temp){
        
        max = temp;
    }
    
}

console.log(max);
