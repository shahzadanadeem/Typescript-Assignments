"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
//Tests for equality and inequality with strings
let city = 'lahore';
console.log("Is city == 'lahore'? I predict True.", city == 'lahore');
console.log("Is city != 'lahore'? I predict False.", city != 'lahore');
//Tests using the lower case function
let person = 'Hamid';
console.log("Is person.toLowerCase() == 'hamid'? I predict True.", person.toLowerCase() == 'hamid');
console.log("Is person.toLowerCase() != 'hamid'? I predict False.", person.toLowerCase() != 'hamid');
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 7;
console.log("Is num == 7? I predict True.", num == 7);
console.log("Is num != 7? I predict False.", num != 7);
console.log("Is num > 5? I predict True.", num > 5);
console.log("Is num < 5? I predict False.", num < 5);
console.log("Is num >= 7? I predict True.", num >= 7);
console.log("Is num <= 5? I predict False.", num <= 5);
//Tests using "and" and "or" operators
let num1 = 15;
console.log("Is num1 > 10 and num1 < 20? I predict True.", num1 > 10 && num1 < 20);
console.log("Is num1 > 25 or num1 < 10? I predict False.", num1 > 25 || num1 < 10);
//Test whether an item is in a array
let anumals = ['cat', 'dog', 'wolf'];
console.log("Is 'dog' in animals? I predict True.", anumals.includes('dog'));
console.log("Is 'lion' in animals? I predict False.", anumals.includes('lion'));
// Test whether an item is not in an array
let colors = ['green', 'yello', 'red'];
console.log("Is 'blue' not in colors? I predict True.", !colors.includes('blue'));
console.log("Is 'red' not in animals? I predict False.", !colors.includes('red'));
//Test whether an item is not in a array
