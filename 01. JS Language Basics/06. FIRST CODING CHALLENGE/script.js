/****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body
Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in
variables
2. Calculate both their BMIs
3. Create a boolean variable containing information
about whether Mark has a higher BMI than John.
4. Print a strijng to the console containing the
variable from step 3. (Something like "Is Mark's BMI
higher than John's? true").

GOOD LUCK :D
*/

var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isMarkBmiHigher;
massJohn = 74;
massMark = 82;
heightJohn = 180;
heightMark = 182;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

console.log(bmiJohn, bmiMark);

isMarkBmiHigher = bmiMark > bmiJohn;
console.log(isMarkBmiHigher);

console.log("Is Mark's BMI highet than John's? " + isMarkBmiHigher);
