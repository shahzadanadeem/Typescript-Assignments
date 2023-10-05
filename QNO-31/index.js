"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.31
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
const usernames = [];
let username = "admin";
if (usernames.length != 0) {
    if (usernames.includes(username)) {
        console.log(`Hello ${username}, would you like to see a status report`);
    }
    else {
        console.log("Hello ${username}, thank you for logging in again");
    }
}
else {
    console.log("We need to find some users!");
}
