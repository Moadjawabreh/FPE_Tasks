// task4
// let multiplication2= (num1,num2)=> {return num1* num2;};
// let a=multiplication2(2,3)
// console.log(a);

//task5
// let triangle=(base,height)=>{(1/2)*base*height};

//task6

// let PandigitalNumber=(number)=>{

//         var numSt=number.toString();
//     for (let digit = 0; digit <= 9; digit++) {
//       if (!numSt.includes(digit.toString())) {
//         return false;
//           }
//     }

//     return true;
//   }

//   var check=PandigitalNumber(98140723568910);
//   console.log(check);

//task8

// let fullName=(fname,lname)=>{return fname+" "+lname};

//    console.log(fullName('moad','jawabreh'));

//task9

// let tellFortune =(numOfChildren,partnerName,geographicLocation,jobTitle)=>{
//     return `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numOfChildren} kids.`;
// }

//task10

// let calculateDogAge=(humanyears)=>{let dogYears=7*humanyears;
//     return `Your doggie is ${dogYears} years old in dog years!`;}

//  //task11

// let calculateSupply=(age, amountPerDay) =>{
//     const max_age=100;
//     let restDays=(100-age)*365;
//     let cupsAmount=restDays*amountPerDay;
//     return `You will need ${cupsAmount} to last you until the ripe old age of ${max_age}`
//     }

// //task12

// let greet=(name)=> {
//         return "Hello " + name;
// }

// //task13

//   let doublee=(x)=> {
//     return 2 * x;
//   }

//   let doublle=()=> {
//     return 2 * 7;
//   }

//   let double=()=> {
//     return 2 * 7;
//   }

//   //task14

//     let double1=(x)=> {
//     return 2 * x ;
//   }

//   let double2=(x)=> {
//   return 2 * x;
//   }

//   let double3=(x)=>  {
//     return 2 * x;
//   }

//   //task15

//     let cube=(num)=> {
//     return num * num * num;
//   }

//   //task16

//   let multiply=(x, y)=> {
//     return x * y;
//   }

//   //task17

//   let canIGetADrivingLicense=(age)=> {

//     if(age>=20){
//         return "yes you can do"
//     }
//     else{
//        return ` please come back after ${20-age} years to get one `
//     }

//   }

//   //task18

//   let sameLength=(str1,str2)=> {
//     return str1.length == str2.length;
//   }

//     //task19

// let largerNubmer=(num1,num2)=>{
//     if(num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }

// //task 20

// let smallerNubmer=(num1,num2,num3)=> {
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

// //task21

//  let shorterString=(str1,str2,str3,str4,str5)=> {

//         let s=[str1,str2,str3,str4,str5];
//         var shorter=str1;
//         for (let index = 0; index < s.length; index++)
//         {
//          if(s[index].length<shorter.length)
//             {
//                 shorter=s[index];
//             }
//         }
//         for (let index = 0; index < s.length; index++) {
//             if(s[index].length==shorter.length){
//                 return s[index];
//             }
//         }

//     }

//     //task22

// let longererString=(str1,str2,str3,str4)=> {

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

// // task23

// let isEven=(num1)=>{
//     return num1%2==0;
// }

// //task 24

// let isOdd=(num1)=>{
//     return num1%2 !==0;
// }

// //task 25

// let positive=(num)=> {
//     if (num>0) {
//         return num;
//     }
//     else
//     {
//         return -num;
//     }
// }

// //task 26

// let fullName=(fname,lname)=> {
//     return fname + " " + lname;
// }

// //task 27

// let avarage=(num1,num2,num3,num4,num5)=> {

//     return (num1+num2+num3+num4+num5)/5 ;

// }

// //task 28

// let randomNumber=()=> {
//     return Math.random();
// }
// console.log(randomNumber());

// //task29

// let randomBetweenNumbers=(min,max)=> {
//     return Math.random() * (max - min) + min;
// }

// // task 30

// let markInUniversity=(mark)=> {
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

//   // task 31

// var count=0;
// let counter=()=> {
//     return count=count+1;
// }
// console.log(counter());
// console.log(counter());
// console.log(counter());

// // task 32

// var count=0;
// let counter=()=> {
//     return count=count+1;
// }
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let resetCounter=()=> {
//     let countBefore=count;
//     count=0;
//     return `${countBefore} and the counter reset now`
// }

// console.log(resetCounter());

// console.log(counter());
// console.log(counter());
// console.log(counter());
