"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.44
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
have one parameter that collects as many items as the function call provides, and it should print a summary of
the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
function sandwich(items) {
    if (items.length === 0) {
        console.log("You did't place any order.");
    }
    else {
        console.log("You ordered of sandwich with following items:");
        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
        }
    }
}
sandwich([]);
sandwich(["Grilled Cheese", "Ham Sandwich"]);
sandwich(["Egg Sandwich", "Seafood Sandwich", "Roast Beef Sandwich"]);
