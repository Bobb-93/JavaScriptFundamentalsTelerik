let input = [
    '4',
    '1 2 3 2 1',
    '2 1',
    '1 2 2 1',
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();

for (let i = 0; i < N; i++) {
    let array = gets().split(' ').map(Number);

    let isSymmetric = true;

    for (let i = 0; i < array.length; i++) {
        const firstElement = array[i];
        const secondElement = array[array.length - 1 - i];

        if(firstElement !== secondElement){
            isSymmetric = false;
            break;
        }

    }

    if(isSymmetric){
        print("Yes");
    } else{
        print("No");
    }
}