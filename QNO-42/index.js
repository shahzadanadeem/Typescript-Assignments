"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.42
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
to see that the list has actually been modified.
*/
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
const magicianNames = ["Magician_Name_1", "Magician_Name_2", "Magician_Name_3", "Magician_Name_4", "Magician_Name_5"];
make_great(magicianNames);
show_magicians(magicianNames);
