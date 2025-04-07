let input = [
    // '2',
    // '50',
    // '40',
    'A',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Read the card sign from the input
let n = gets();
 
// Convert face card signs (J, Q, K, A) to their corresponding numeric values
switch (n) {
  case 'J': n = 11; break;
  case 'Q': n = 12; break;
  case 'K': n = 13; break;
  case 'A': n = 14; break;
}
 
// Loop through the card values starting from 2 up to the given card value 'n'
for (let i = 2; i <= n; i++) {
    // For numeric cards (2 to 10), print the card in all four suits
    if (i <= 10) {
      console.log(i + ' of spades, ' + i + ' of clubs, ' + i + ' of hearts, ' + i + ' of diamonds');
    }
 
    // For each face card, print the card in all four suits
    if (i === 11) {
      console.log('J of spades, J of clubs, J of hearts, J of diamonds');
    }
    if (i === 12) {
      console.log('Q of spades, Q of clubs, Q of hearts, Q of diamonds');
    }
    if (i === 13) {
      console.log('K of spades, K of clubs, K of hearts, K of diamonds');
    }
    if (i === 14) {
      console.log('A of spades, A of clubs, A of hearts, A of diamonds');
    }
}