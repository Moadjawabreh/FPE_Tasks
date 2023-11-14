// // let birthDateMonth = parseInt(prompt("Insert your birthdate month"));

// // switch (birthDateMonth) {
// //   case 1:
// //     console.log("January");
// //     break;
// //   case 2:
// //     console.log("February");
// //     break;
// //   case 3:
// //     console.log("March");
// //     break;
// //   case 4:
// //     console.log("April");
// //     break;
// //   case 5:
// //     console.log("May");
// //     break;
// //   case 6:
// //     console.log("June");
// //     break;
// //   case 7:
// //     console.log("July");
// //     break;
// //   case 8:
// //     console.log("August");
// //     break;
// //   case 9:
// //     console.log("September");
// //     break;
// //   case 10:
// //     console.log("October");
// //     break;
// //   case 11:
// //     console.log("November");
// //     break;
// //   case 12:
// //     console.log("December");
// //     break;
// //   default:
// // }

// // task2

// let counter = 1;
// for (let i = 1; i <= 4; i++) {
//   let cont = "";
//   for (let index = 1; index <= i; index++) {
//     cont +=" "+counter ;
//     counter++;
//   }
//   console.log(`${cont}\n`);
// }

// // task3
// for (let index = 1; index <= 1000; index++) {
//   if (index % 13 == 0) {
//     console.log(index);
//   }
// }

// // task4
// function multiplication2(num1,num2) {

//     return num1*num2;

// }

// console.log(multiplication2(3,5));

// // task5

// function Triangle(base,height)
// {
//     return 1/2*base*height;
// }

// // task6

// function PandigitalNumber(number) {
//     var numSt=number.toString();
//     for (let digit = 0; digit <= 9; digit++) {
//       if (!numSt.includes(digit.toString())) {
//         return false;
//           }
//     }

//     return true;
//   }

//   var check=PandigitalNumber(98140723568910);
//   console.log(check);

// task7

// var favoriteDrink = prompt("Enter your favorite drink:");

// favoriteDrink = favoriteDrink.toLowerCase();

// switch (favoriteDrink) {
//   case "banana":
//     console.log("The price of a banana drink is 20 dollars");
//     break;
//   case "apple":
//     console.log("The price of an apple drink is 15 dollars");
//     break;
//   case "orange":
//     console.log("The price of an orange drink is 18 dollars");
//     break;
//   case "coffee":
//     console.log("The price of a coffee drink is 25 dollars");
//     break;
//   case "tea":
//     console.log("The price of a tea drink is 12 dollars");
//     break;
//   default:
//     console.log("Sorry, we don't have the price for your favorite drink.");
//     break;
// }

// task8

// function fullName(fname,lname) {
//     return fname + " " + lname;
// }

// task9

// function tellFortune(numOfChildren,partnerName,geographicLocation,jobTitle) {

//     return `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numOfChildren} kids.`;
// }

//task10

// function calculateDogAge(humanyears) {
//     let dogYears=7*humanyears;
//     return `Your doggie is ${dogYears} years old in dog years!`;
// }

// //task11

// function calculateSupply(age, amountPerDay) {
// const max_age=100;
// let restDays=(100-age)*365;
// let cupsAmount=restDays*amountPerDay;
// return `You will need ${cupsAmount} to last you until the ripe old age of ${max_age}`

// }

// console.log(calculateSupply(30,3));

// //task12

// function greet(name) {
//     return "Hello " + name;
//   }

//task13                   **

//   function double(x) {
//     return 2 * x;
//   }

//   function double() {
//     return 2 * 7;
//   }

//   function double() {
//     return 2 * 7;
//   }

//task14

//   function double1(x) {
//     return 2 * x ;
//   }

//   function double2 (x){
//   return 2 * x;
//   }

//   function double3(x) {
//     return 2 * x;
//   }

//task15

//   function cube(num) {
//     return num * num * num;
//   }

// task16

// function multiply(x, y) {
//     return x * y;
//   }

//task17

//   function canIGetADrivingLicense(age) {

//     if(age>=20){
//         return "yes you can do"
//     }
//     else{
//        return ` please come back after ${20-age} years to get one `
//     }

//   }

//task18

//   function sameLength(str1,str2) {
//     return str1.length == str2.length;
//   }

//task 19

// function largerNubmer(num1,num2) {
//     if(num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }

//task 20

// function largerNubmer(num1,num2,num3) {
//     if(num1<num2 && num1<num3){
//         return num1;
//     }
//     else if(num2<num1 &&num2<num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }

//task21

// function shorterString(str1,str2,str3,str4,str5) {

//     let s=[str1,str2,str3,str4,str5];
//     var shorter=str1;
//     for (let index = 0; index < s.length; index++)
//     {
//      if(s[index].length<shorter.length)
//         {
//             shorter=s[index];
//         }
//     }
//     for (let index = 0; index < s.length; index++) {
//         if(s[index].length==shorter.length){
//             return s[index];
//         }
//     }

// }

// console.log(shorterString("air","tr","by","car","github"));

//task22

// function longererString(str1,str2,str3,str4) {

//     let s=[str1,str2,str3,str4];
//     var longer=str1;
//     for (let index = 0; index < s.length; index++)
//     {
//      if(s[index].length>longer.length)
//         {
//             longer=s[index];
//         }
//     }
//     for (let index = 0; index < s.length; index++) {
//         if(s[index].length==longer.length){
//             return s[index];
//         }
//     }

// }

//  console.log(longererString("air","schoo","caaaaaaaar","github"));

//task23

// function isEven(num1){
//     return num1%2==0;
// }

// console.log(isEven(4));

//task 24

// function isOdd(num1){
//     return num1%2 !==0;
// }

// console.log(isEven(5));

//task 25

// function positive(num) {
//     if (num>0) {
//         return num;
//     }
//     else
//     {
//         return -num;
//     }
// }

// console.log(positive(-8));

//task 26

// function fullName(fname,lname) {
//     return fname + " " + lname;
// }

//task 27

// function avarage(num1,num2,num3,num4,num5) {

//     return (num1+num2+num3+num4+num5)/5 ;

// }

// console.log(avarage(1,2,3,4,5));

//task 28

// function randomNumber() {
//     return Math.random();
// }
// console.log(randomNumber());

//task29

// function randomBetweenNumbers(min,max) {
//     return Math.random() * (max - min) + min;
// }

//  console.log(randomBetweenNumbers(7,8));

// task 30

// function markInUniversity(mark) {
//     if (mark >= 95 && mark <= 100) {
//       return "A";
//     } else if (mark >= 85 && mark < 95) {
//       return "B";
//     } else if (mark >= 70 && mark < 85) {
//       return "C";
//     } else if (mark >= 50 && mark < 70) {
//       return "D";
//     } else if (mark >= 0 && mark < 50) {
//       return "F";
//     } else {
//       return "Invalid mark. mark should be between 0 and 100.";
//     }
//   }

// task 31

// var count=0;
// function counter() {
//     return count=count+1;
// }
// console.log(counter());
// console.log(counter());
// console.log(counter());

// task 32

// var count=0;
// function counter() {
//     return count=count+1;
// }
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function resetCounter() {
//     let countBefore=count;
//     count=0;
//     return `${countBefore} and the counter reset now`
// }

// console.log(resetCounter());

// console.log(counter());
// console.log(counter());
// console.log(counter());
