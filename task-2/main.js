"use strict"

// #### Task 1: Function Basics
// 1.1 Create a function named `greetUser` that takes a user's name as an argument and prints a personalized greeting.

// function greetUser(name) {
//     return "hello"
// }
//   console.log(greetUser());

// 1.2 Write a function `calculateArea` that calculates and returns the area of a rectangle. The function should take the length and width as parameters.
// function calculateArea(length, width) {
//     let area = length * width;
//     return area;
//     }

//     console.log(calculateArea(5,3))


// 1.3 Implement a function `isEven` that checks if a given number is even. Return `true` if it is, otherwise `false`.

///// let number= [66, 55, 86, 99];

// function isEven(num){
//     if(num % 2 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// };

// console.log(isEven(66))
// console.log(isEven(55))


//2-ci üsul//
// const isEven = num => num % 2 === 0;

// console.log(isEven(3));
// console.log(isEven(32));
// console.log(isEven(1));
// console.log(isEven(0));



// #### Task 2: Array Manipulation
// 2.1 Create an array named `fruits` containing at least five different fruit names. Write a function `displayFruits`` that prints each fruit in the array.

// const fruits = ["lemon", "grapefruit", "hazelnut", "ornage", "plum", "cherry"];

// function displayFruits(fruits){
//     return  fruits.map((fruits) =>`${fruits}-${fruits.length} `)
// }
// console.log( displayFruits(fruits));

 
// 2.2 Implement a function `reverseArray` that reverses the elements of an array. Test it with both numeric and string arrays.

// const array=[138,326,55,46]
// const word=["Orange", "red","blue"]

// function reverseArray(word){

// return word.reverse()
// }
// console.log(reverseArray(array));

// console.log(reverseArray(word));


// 2.3 Write a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.
// let number = [5,6,8,25];

// function filterEvenNumbers(number){
//  return  number.filter((i) => i % 2 === 0);
// }
// console.log( filterEvenNumbers(number));

// #### Task 3: Object and Methods
// 3.1 Define an object   `person` with properties `name`, `age`, and `city`. Write a function `displayPersonInfo` that prints the information in a readable format.


// let person={
//     name:"Esmira",
//     age:22,
//     city:"Baku",
// }

// function displayPersonInfo(object){
//     return `${object.name} + ${object.age} + ${object.city}`;

// }
// console.log(displayPersonInfo(person));


// 3.2 Extend the `person` object by adding a method `haveBirthday` that increments the age by 1 each time it's called.

// let person={
//     name:"Esmira",
//     age:22,
//     city:"Baku",
// }

// function haveBirthday (){
//     let age=22;
//     age ++;
//     return age;
// }
// console.log(haveBirthday());

// 3.3 Create an object `car` with properties `make`, `model`, and `year`. Write a method `displayCarInfo` that prints the car's information.
// 1
// const car={
//     make: "Kia",
//     model:"Rio",
//     year: 2020,     
//     }

// const displayCarInfo=[car]

// console.log(car)

////// 2-ci usul

// function displayCarInfo(object){
//     return `${object.make} + ${object.model} + ${object.year}`;

// }
// console.log(displayCarInfo(car));


// #### Task 4: Advanced Array Methods
// 4.1 Create an array of numbers and use the `map` function to square each element. Print the resulting array.

// let num = [1, 2, 30, 50, 7]
// function  getNewArray (num){
//     return num.map((i)=>i * i)
// }
// console.log (getNewArray(num));

// 4.2 Given an array of strings, use the `filter` function to create a new array containing only strings with more than 5 characters.


// const string=["book","red","pineaple","map","black","bluebarry"]

// function getLength(string){
//     return string.filter((i)=>i.length>5)
// }
// console.log(getLength(string));

// 4.3 Write a function `calculateTotal` that takes an array of prices and uses the `reduce` function to calculate the total cost.

// let num=[45, 67, 88, 43, 57, 76, 99]

// function calculateTotal(num){
//     return num.reduce((a,b,c)=>a+b+c)
// }
// console.log(calculateTotal(num));