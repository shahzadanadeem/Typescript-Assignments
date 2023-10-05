"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.15
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the
guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
//Guest List
const guestList = ["Ali", "Imran", "Waheed", "Nouman", "Umar"];
//store name of guest can't make it.
const guestNotMake = guestList[1];
// Replace the guest
const newGuest = "Mehmood";
guestList[1] = newGuest;
//print list of guest
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, let's catch up over a delicious dinner at our place!`);
}
// Print the guest who can't make it
console.log(`${guestNotMake} can't make it to the dinner.`);
