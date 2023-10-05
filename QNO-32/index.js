"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.32
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in
the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message
that the person will need to enter a new username. If a username has not been used, print a message saying
that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
const current_users = ['ali', 'John', 'umar', 'imran', 'nouman'];
const new_users = ['nawaz', 'JOHN', 'usman', 'imran', 'wajahat'];
let lc_new_users;
let lc_current_users = current_users.map(value => value.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    lc_new_users = new_users[i].toLowerCase();
    if (lc_current_users.includes(lc_new_users)) {
        console.log("You will need to enter a new username");
    }
    else {
        console.log(`username ${new_users[i]} is available`);
    }
}
