//1
// Write program that will reverse string: 'Hello world' => 'dlrow olleH'   

// function reverseString(str) {
//     let reversed = " ";

//     for (let i = str.length - 1; i>=0; i--) {
//         reversed +=str[i];
//     }
// return reversed;
// }
// console.log(reverseString('Hello world' ));



//2
// Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'    

// function repeatStringTimes(str, times) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//       let repeatedString = str[i];
//       for (let n = 0; n < times; n++) {
//         result += repeatedString;
//     }}
//     return result;
//   }
//   console.log(repeatStringTimes('Hello world', 3));




//3
// Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'   

// function repeatString(str, num) {
//     let result = "";
//     for (let i = 0; i < num; i++) {
//        result += str;
//     }
//     return result;
//  }

//  console.log(repeatString('Hello world', 3));


//4
// Write program to find the first not repeated character: 'abacddbec' => 'e'    

// function firstNonRepeatedCharacter(string) {
//     for ( i = 0; i < string.length; i++) {
//        n = string.charAt(i);
//       if (string.indexOf(n) == i && string.indexOf(n, i + 1) == -1) {
//         return n;
//       }
//     }
//   }
//     console.log(firstNonRepeatedCharacter('abacddbec')); 

//5
// Write program to find the first repeated character: 'abacddbec' => 'a'  
   
// function FirstRepeatedCharacter(arr){
//     for (i = 0; i < arr.length; i++) {
//       if (arr.indexOf(arr[i]) !== i) {
//         console.log(arr[i]);
//         break;
//       }
//     }
//     };
// console.log(FirstRepeatedCharacter('abacddbec'));


//6
// Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}   

// let myString = 'abacddbec';
// let result = {};
// for (let str of myString) {
//   result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
// }
// console.log(result);



//7
// Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'  

// let myString = "Hello world";
// let truncatedMyString = myString. substring(0, 5) + "..."; 
// console. log(truncatedMyString);


//8????
// Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 => 'Hello world, nice...'    


// let myString = "Hello world, nice talking to you";
// let truncatedMyString = myString. substring(0, 20); 
  
//   console. log(truncatedMyString);
   

//9
// Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15   

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++ ) {
//   sum += numbers[i];
// }

// console.log(sum) 


//10
// Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3   


// let numbers= [1, 2, 3, 4, 5]
// function getSum(number){
//     let sum=0
//     for (let i = 0; i < number.length; i++) {
//         sum+=number[i]
//     }
//         let result = sum/number.length
//         return result

// }
// console.log(getSum(numbers));


 //11
// Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5   

// let arr = [1, 2, 3, 4, 5]; 
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max ) {
//     max = arr[i];
//   }
// }
// console.log(max);


//12
// Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1    

// let arr = [1, 2, 3, 4, 5];
// let min = arr[0];

// for (let i = 0; i > arr.length; i++) {
//   if (arr[i] < min ) {
//     min = arr[i];
//   }
// }
// console.log(min);


//13
// Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4  

// let arr = [1, 2, 3, 4, 5];
//   max = arr[0];
//  secondMax = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i]; 
//     } else if (arr[i]> secondMax) {
//         secondMax = arr[i]; 
//     }
// }

// console.log(secondMax);


//14
// Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2    


// let arr = [1, 2, 3, 4, 5];
// let min = Infinity, secondMin = Infinity; 

//  for (let i= 0; i< arr.length; i++) {
//     if (arr[i]< min) {
//         secondMin = min;
//         min = arr[i]; 
//     } else if (arr[i]< secondMin) {
//         secondMin = arr[i]; 
//     }
// }


// console.log(secondMin);

//15
// Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}    



//16
// Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9

// let numStr = [1, 2, 3, 4, 5];

// function sumEvens(numStr) {
//   let sum = 0

//   for (let i = 0; i < numStr.length; i++) {
//     if (numStr[i] % 2 === 1){ 
//     sum = sum + numStr[i];
//     }
//   }
//   return sum;
// }
 
// console.log(sumEvens(numStr));


//17
// Create a program to find the sum of the even numbers in an array of numbers: [1, 2, 3, 4, 5] => 6

// let numStr = [1, 2, 3, 4, 5];

// function sumEvens(numStr) {
//   let sum = 0

//   for (let i = 0; i < numStr.length; i++) {
//     if (numStr[i] % 2 === 0){ 
//     sum = sum + numStr[i];
//     }
//   }
//   return sum;
// }
 
// console.log(sumEvens(numStr));
