/* 
OPERATOR PRECEDENCE

Some operators have higher precedence than others
Info about it can be found online
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true, = is also an operator in this line
console.log(isFullAge);
// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
console.log(x + y -2);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++
console.log(x);
x--
console.log(x);