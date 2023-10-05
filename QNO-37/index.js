"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with
a different message.
*/
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`T-Shirt size is "${size}"  with message "${message}"`);
}
make_shirt();
make_shirt("Small", "Function Call");
