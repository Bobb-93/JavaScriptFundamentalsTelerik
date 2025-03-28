let input = [
    // '18',
    // '44',
    '1',
    '2',
    '20',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

if (a >= b && a >= c) {
    if(b >= c){
        print(`${a} ${b} ${c}`);
    } else if(c >= b){
        print(`${a} ${c} ${b}`);
    }
} else if (b >= a && b >= c) {
    if(a >= c){
        print(`${b} ${a} ${c}`);
    } else if(c >= a){
        print(`${b} ${c} ${a}`);
    }
} else if (c >= a && c >= b) {
    if(a >= b){
        print(`${c} ${a} ${b}`);
    } else if(b >= a){
        print(`${c} ${b} ${a}`);
    }
}