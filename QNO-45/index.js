"use strict";
/*
    Batch 47
    Roll No.	PIAIC210428
    Name:		Shahzada Nadeem
*/
/*
QNo.45
Cars: Write a function that stores information about a car in a Object. The function should always receive a
manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a color or an optional feature. Print the
Object that’s returned to make sure all the information was stored correctly.
*/
;
function carMaker(manufacturer, model_name, color, year, chassis_num) {
    const car = {
        manufacturer: manufacturer,
        model_name: model_name,
        options: {
            color: color,
            year: year,
            chassis_num: chassis_num
        },
    };
    return car;
}
const car1 = carMaker("BMW", "Mustang", "Red");
const car2 = carMaker("BMW", "X5", "White", 2020);
console.log(car1);
console.log(car2);
console.log(car2.options.color);
