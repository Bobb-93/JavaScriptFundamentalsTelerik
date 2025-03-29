let input = [
    '1:00 PM',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let time = gets();
 
// Extract hours, minutes and am/pm values from input string
let separatorIndex = time.indexOf(":");
let hours = parseInt(time.slice(0, separatorIndex));
let minutes = parseInt(time.slice(separatorIndex + 1, separatorIndex + 3));
let amPm = time.slice(-2);
 
// Check if the time is valid
if (isNaN(hours) || hours > 12 || minutes > 59 || (amPm !== "AM" && amPm !== "PM")) {
  console.log("invalid time"); // Output "invalid time" if invalid input
} else if ((hours >= 3 && hours < 12 && amPm === "AM") || (hours === 12 && amPm === "PM")) {
  console.log("non-beer time"); // Output "non-beer time" for non-beer hours
} else {
  console.log("beer time"); // Output "beer time" for beer hours
}