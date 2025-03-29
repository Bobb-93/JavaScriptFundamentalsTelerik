let input = [
    '975',
];


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the integer number from input
let number = parseInt(gets());
 
if (number === 0) {
  console.log("zero");
} else {
 
  // Initialize variables for the words used in the output
  let ones = "", tens = "", hundreds = "", output = "";
 
  // Compute the hundreds digit
  hundreds = Math.floor(number / 100);
  number %= 100;
 
  // Compute the tens digit
  tens = Math.floor(number / 10);
  number %= 10;
 
  // Compute the ones digit
  ones = number;
 
  // Build the output string
  if (hundreds > 0) {
    switch (hundreds) {
      case 1: output += "one hundred"; break;
      case 2: output += "two hundred"; break;
      case 3: output += "three hundred"; break;
      case 4: output += "four hundred"; break;
      case 5: output += "five hundred"; break;
      case 6: output += "six hundred"; break;
      case 7: output += "seven hundred"; break;
      case 8: output += "eight hundred"; break;
      case 9: output += "nine hundred"; break;
    }
    if (tens > 0 || ones > 0) {
      output += " and ";
    }
  }
 
  if (tens === 1) {
    switch (ones) {
      case 0: output += "ten"; break;
      case 1: output += "eleven"; break;
      case 2: output += "twelve"; break;
      case 3: output += "thirteen"; break;
      case 4: output += "fourteen"; break;
      case 5: output += "fifteen"; break;
      case 6: output += "sixteen"; break;
      case 7: output += "seventeen"; break;
      case 8: output += "eighteen"; break;
      case 9: output += "nineteen"; break;
    }
  } else {
    if (tens > 1) {
      switch (tens) {
        case 2: output += "twenty"; break;
        case 3: output += "thirty"; break;
        case 4: output += "forty"; break;
        case 5: output += "fifty"; break;
        case 6: output += "sixty"; break;
        case 7: output += "seventy"; break;
        case 8: output += "eighty"; break;
        case 9: output += "ninety"; break;
      }
      if (ones > 0) {
        output += " ";
      }
    }
    if (ones > 0 || output === "") {
      switch (ones) {
        case 1: output += "one"; break;
        case 2: output += "two"; break;
        case 3: output += "three"; break;
        case 4: output += "four"; break;
        case 5: output += "five"; break;
        case 6: output += "six"; break;
        case 7: output += "seven"; break;
        case 8: output += "eight"; break;
        case 9: output += "nine"; break;
      }
    }
  }
 
  // Print the output
  console.log(output);
}