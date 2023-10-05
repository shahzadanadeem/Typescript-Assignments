/*
	Batch 47
	Roll No.	PIAIC210428
	Name:		Shahzada Nadeem
*/
/*
QNo.03
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let pname:string = "Shahzada Nadeem";
console.log(pname.toLowerCase());
console.log(pname.toUpperCase());

let titleCase = pname
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(titleCase);
