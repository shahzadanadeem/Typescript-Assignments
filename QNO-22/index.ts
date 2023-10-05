/*
	Batch 47
	Roll No.	PIAIC210428
	Name:		Shahzada Nadeem
*/
/*
QNo.22
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

const persons: string[] = ["Ali", "Amin", "Shahid", "Zaka"];

// Intentionally index error
let index = 3;
console.log(persons[index]);  

// correct the error, defining the limit
if (index >= 0 && index < persons.length) {
  console.log(persons[index]);  
} else {
  console.log("Index out of range");
}