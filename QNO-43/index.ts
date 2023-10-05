/*
	Batch 47
	Roll No.	PIAIC210428
	Name:		Shahzada Nadeem
*/
/*
QNo.43
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
separate array. Call show_magicians() with each array to show that you have one array of the original names and one 
array with the Great added to each magician’s name.
*/

function show_magicians(magicians: string[]): void {
  for (let i=0; i<magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians: string[]): string[] {
  const magiciansArray: string[] = [];

  for (let i = 0; i < magicians.length; i++) {
    magiciansArray.push("The Great " + magicians[i]);
  }

  return magiciansArray;
}

const magicianNames: string[] = ["Magician_Name_1", "Magician_Name_2", "Magician_Name_3", "Magician_Name_4", "Magician_Name_5"];
const greatMagician = make_great(magicianNames);

show_magicians(magicianNames);
show_magicians(greatMagician);