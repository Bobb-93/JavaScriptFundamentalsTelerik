let input = [
    // '18',
    // '44',
    '31',
    '115',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let totalMessages = +gets();
let totalMinutes = +gets();

let totalBill = 12;
let additionalMessages = 0;
let additionalMinutes = 0;

let additionalMessagesPrice = 0;
let additionalMinutesPrice = 0;

let additionalTaxes = 0;

if(totalMessages > 20){
    additionalMessages = totalMessages - 20;
    additionalMessagesPrice = additionalMessages * 0.06;    
}

if(totalMinutes > 60){
    additionalMinutes = totalMinutes - 60;
    additionalMinutesPrice = additionalMinutes * 0.1;
}

additionalTaxes = (additionalMessagesPrice + additionalMinutesPrice) * 0.2;
totalBill += additionalMessagesPrice + additionalMinutesPrice + additionalTaxes;

print(`${additionalMessages} additional messages for ${additionalMessagesPrice.toFixed(2)} levas`);
print(`${additionalMinutes} additional minutes for ${additionalMinutesPrice.toFixed(2)} levas`);
print(`${additionalTaxes.toFixed(2)} additional taxes`);
print(`${totalBill.toFixed(2)} total bill`);


