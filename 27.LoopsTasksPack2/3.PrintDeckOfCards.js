let input = [
    // '2',
    // '50',
    // '40',
    '10',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = gets();

if ((N >= '2' && N <= '9') || N === '10') {
    for (let i = 2; i <= N; i++) {
        print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
    }
} else {
    for (let i = 2; i <= 10; i++) {
        print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
    }
    if (N === 'J') {
        print(`${N} of spades, ${N} of clubs, ${N} of hearts, ${N} of diamonds`);
    } else if (N === 'Q') {
        print(`J of spades, J of clubs, J of hearts, J of diamonds`);
        print(`${N} of spades, ${N} of clubs, ${N} of hearts, ${N} of diamonds`);
    } else if (N === 'K') {
        print(`J of spades, J of clubs, J of hearts, J of diamonds`);
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
        print(`${N} of spades, ${N} of clubs, ${N} of hearts, ${N} of diamonds`);
    } else if (N === 'A') {
        print(`J of spades, J of clubs, J of hearts, J of diamonds`);
        print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
        print(`K of spades, K of clubs, K of hearts, K of diamonds`);
        print(`${N} of spades, ${N} of clubs, ${N} of hearts, ${N} of diamonds`);
    }
}