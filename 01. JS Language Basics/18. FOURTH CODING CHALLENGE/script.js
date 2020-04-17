/****************************
* FOURTH CODING CHALLENGE

*/

/*
Let's remember the first coding challenge where Mark
and John compared their BMIs. Let's now implement
the same functionality with objects and methods.
1. For each of them, create an object with
properties for their full name, mass and height.
2. Then, add a method to each object to calculate
the BMI. Save the BMI to the object and also return
it from the method.
3. In the end, log to the console who has the
highest BMI, together with the full name and the
respective BMI. Don't forget they might have the
same BMI.

BMI = mass / (height * height) (mass in kg, height in meters)

GOOD LUCK :D
*/

/*
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isMarkBmiHigher;
massJohn = 74;
massMark = 82;
heightJohn = 180;
heightMark = 182;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

*/

var john = {
    fullName: 'John Smith',
    weight: 104,
    height: 1.8,
    calcBmi: function(weight, height) {
        return this.weight / (this.height * this.height);
    }
};

john.bmi = john.calcBmi(this.weight, this.height);

var mark = {
    fullName:'Mark Donnovan',
    weight: 82,
    height: 1.82,
    calcBmi: function(weight, height) {
        return this.weight / (this.height * this.height);
    }
};

mark.bmi = mark.calcBmi(this.weight, this.height);

console.log(john);
console.log(mark);

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has highest BMI, and it\'s value is '
    + john.bmi);
} else {
    console.log(mark.fullName + ' has highest BMI, and it\'s value is '
    + mark.bmi);
}