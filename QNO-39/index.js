"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.39
City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return `${city}, ${country}`;
}
const restul1 = city_country("Karachi", "Pakistan");
const restul2 = city_country("Sydney", "Australia");
const restul3 = city_country("Chennai", "India");
console.log(restul1);
console.log(restul2);
console.log(restul3);
