let input = [
    '1975',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let year = +gets();

let result = (year - 8) % 12;

switch (result) {
    case 0:
        print("Dragon");
        break;
    case 1:
        print("Snake");
        break;
    case 2:
        print("Horse");
        break;
    case 3:
        print("Sheep");
        break;
    case 4:
        print("Monkey");
        break;
    case 5:
        print("Rooster");
        break;
    case 6:
        print("Dog");
        break;
    case 7:
        print("Pig");
        break;
    case 8:
        print("Rat");
        break;
    case 9:
        print("Ox");
        break;
    case 10:
        print("Tiger");
        break;
    case 11:
        print("Hare");
        break;
    default:
        print("invalid input");
        break;
}