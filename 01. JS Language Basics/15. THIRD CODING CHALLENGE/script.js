/****************************
* THIRD CODING CHALLENGE

*/

/*
John and his family went on a holiday and went to 3
different restaurants. The bills were $124, $48 and
$268.

To tip the waiter a fair amount, John created a
simple tip calculator (as a function). He likes to
tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill +
tip).

(NOTE: To calculate 20% of a value, simply multiply
    it with 20/100 = 0.2)

GOOD LUCK
*/
var price1 = 124;
var price2 = 48;
var price3 = 268;

function tipCalculator(price) {
    if (price <= 50) {
        return price * 0.2;
    } else if (price > 50 && price < 200) {
        return price * 0.15;
    } else if (price > 200) {
        return price * 0.1;
    }  
}

var tip1 = tipCalculator(price1);
var tip2 = tipCalculator(price2);
var tip3 = tipCalculator(price3);

console.log(tip1, tip2, tip3);

function totalAmount(price) {
    return price + tipCalculator(price);
}

var total1 = totalAmount(price1);
var total2 = totalAmount(price2);
var total3 = totalAmount(price3);

console.log(total1, total2, total3);

var tips = [tip1, tip2, tip3];
var totalPrices = [total1, total2, total3];
console.log(tips);
console.log(totalPrices);