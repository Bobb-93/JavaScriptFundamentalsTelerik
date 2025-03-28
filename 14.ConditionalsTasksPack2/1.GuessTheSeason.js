let input = [
    // '18',
    // '44',
    'April',
    '6',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let month = gets();
let day = +gets();

if((month === "September" && day >= 22) || month === "October" || month === "November" || (month === "December" && day <= 20)){
    print("Autumn");
} else if((month === "December" && day >= 21) || month === "January" || month === "February" || (month === "March" && day <= 20)){
    print("Winter");
} else if((month === "March" && day >= 21) || month === "April" || month === "May" || (month === "June" && day <= 21)){
    print("Spring");
} else if((month === "June" && day >= 22) || month === "July" || month === "August" || (month === "September" && day <= 21)){
    print("Summer");
} else{
    print("ERROR!");
}
