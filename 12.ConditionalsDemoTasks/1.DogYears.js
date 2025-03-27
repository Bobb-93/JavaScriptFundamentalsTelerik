let input = [
    '4',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let HY = +gets();

let DY = 0;

if(HY <= 2){
    DY += HY * 10;
} else{
    HY -= 2;
    DY += 20;
    DY += HY * 4;
}

print(DY);