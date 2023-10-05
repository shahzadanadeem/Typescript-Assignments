"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.18
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
const places = ["Itely", "Germany", "England", "Japan", "America"];
console.log("Origianl Order: ", places);
const alphabeticalOrder = places.slice().sort();
console.log("Alphabetical Order:", alphabeticalOrder);
console.log("Origianl Order: ", places);
const reverseOrder = places.slice().sort().reverse();
console.log("Reverse Alphabetical Order:", reverseOrder);
console.log("Origianl Order: ", places);
places.reverse();
console.log("Reversed Order:", places);
places.reverse();
console.log("Back To Origianl Order:", places);
places.sort();
console.log("Sort Alphabetical Order:", places);
places.sort().reverse();
console.log("Sort Reverse Alphabetical Order:", places);
