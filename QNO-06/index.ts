/*
	Batch 47
	Roll No.	PIAIC210428
	Name:		Shahzada Nadeem
*/
/*
QNo.06
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/

let nameWithSpaces: string = "\t\tShahzada Nadeem\n";
console.log("Name With Spaces:-", nameWithSpaces);

let strippingName: string = nameWithSpaces.trim(); 
console.log("Stripping Name:-", strippingName);