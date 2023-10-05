/*
	Batch 47
	Roll No.	PIAIC210428
	Name:		Shahzada Nadeem
*/
/*
QNo.16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/

//Guest List
const guestList: string[] = ["Ali", "Imran", "Waheed", "Nouman", "Umar"];

//store name of guest can't make it.
const guestNotMake: string = guestList[1]; 

// Replace the guest
const newGuest: string = "Mehmood";
guestList[1] = newGuest;


guestList.unshift("Aleem");	//Add one new guest to the beginning of array
guestList.splice(guestList.length / 2, 0, "Wajahat"); // Add one new guest to the middle of array
let newGuestList = guestList.concat(["Nadir"]); //Add one new guest to the end of your list

//print list of guest
for(let i=0; i<newGuestList.length; i++){
	console.log(`Hey ${newGuestList[i]}, let's catch up over a delicious dinner at our place!`);
}

// Print the guest who can't make it
console.log(`${guestNotMake} can't make it to the dinner.`);