// Declaring variables to hold the savings and the cost of the new phone
let savings = 500;
let costOfNewPhone = 600;

// Using conditional statements to define if the user can afford the phone
if (savings >= costOfNewPhone) {
    console.log("You can buy the phone!");
} else {
    console.log("You need to save more to buy the phone.");
}
 
// Declaring a variable to hold the user rating
let userRating = 3; // Example rating
 
// Using switch statement to define the user credit rating
switch (userRating) {
    case 5:
        console.log("Excellent");
        break;
    case 4:
        console.log("Good");
        break;
    case 3:
        console.log("Average");
        break;
    case 2:
        console.log("Below Average");
        break;
    case 1:
        console.log("Poor");
        break;
    default:
        console.log("Invalid rating");
}

let updatedSavings = 5805;
let threshold = 3000;
let confirmationCode = "1234";
let costOfiPhone = 4009;

let input = [
    '1234',
];

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

if(updatedSavings > costOfiPhone && costOfiPhone > threshold){
    console.log("Enter confirmation code!");
    let confirmationCodeInput = gets();

    if(confirmationCodeInput === confirmationCode){
        console.log("You can complete the transaction!");
        updatedSavings -= costOfiPhone;
    } else{
        console.log("ERROR! You can complete the transaction!");
    }    
}