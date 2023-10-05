/*
	Batch 47
	Roll No.	PIAIC210428
	Name:		Shahzada Nadeem
*/
/*
QNo.41
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints 
the name of each magician in the array.
*/

function show_magicians(magicians: string[]): void {
  for (let i=0; i<magicians.length; i++) {
    console.log(magicians[i]);
  }
}

const magicianNames: string[] = ["Magician_Name_1", "Magician_Name_2", "Magician_Name_3", "Magician_Name_4", "Magician_Name_5"];
show_magicians(magicianNames);