"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
have an empty list at the end of your program.
*/
//Guest List
const guestList = ["Ali", "Imran", "Waheed", "Nouman", "Umar"];
//store name of guest can't make it.
const guestNotMake = guestList[1];
// Replace the guest
const newGuest = "Mehmood";
guestList[1] = newGuest;
guestList.unshift("Aleem"); //Add one new guest to the beginning of array
guestList.splice(guestList.length / 2, 0, "Wajahat"); // Add one new guest to the middle of array
let newGuestList = guestList.concat(["Nadir"]); //Add one new guest to the end of your list
//print list of guest
for (let i = 0; i < newGuestList.length; i++) {
    console.log(`Hey ${newGuestList[i]}, let's catch up over a delicious dinner at our place!`);
}
// Print the guest who can't make it
console.log(`${guestNotMake} can't make it to the dinner.`);
console.log("you can invite only two people for dinner.");
let arrayLength = newGuestList.length - 2;
for (let i = 0; i < arrayLength; i++) {
    console.log(`Hey ${newGuestList.pop()}, you’re sorry you can’t invite them to dinner`);
}
console.log("Guest still invited for dinner");
for (let i = 0; i < newGuestList.length; i++) {
    console.log(`Hey ${newGuestList[i]}, you’re still invited for dinner`);
}
newGuestList.pop();
newGuestList.pop();
console.log("Prinint empty list");
for (let i = 0; i < newGuestList.length; i++) {
    console.log(`Hey ${newGuestList}, are you there`);
}
