// +++Question 1.+++

// let greet = (name)=> "Hi " + name + "!";
// console.log(greet("John"))
// console.log(greet("James"))

// +++Question 2+++

// let isEven = num=> num % 2 === 0;
// console.log(isEven(10));
// console.log(isEven(5));

// Quetion 3

// let counterFunc = counter=> {
//     if (counter > 100){
//         counter = 0;
//     }else{
//         counter++;
//     }
// return counter;
// }
// console.log(counterFunc(101));
// console.log(counterFunc(50));

// question 4

// let nameAge = (name,age) =>{
//     return "hello " + name + "" + " You are " + age +" years old";
// }
// console.log(nameAge("oleg",25))
// let nameAge = (name,age) =>{
//     console.log("hello" + "name");
//     console.log("you are " + age + "years old");
// }
// nameAge("Oleg",38);

//  Question 5

// let printOnly = () =>
//     console.log("printing")

// question 6

// let sum = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(sum(5,10))
// -------------------------------------
// coding task 1

// let reverseString = (str) => {
//   return str.split("").reverse().join("");

// };

// console.log(reverseString("John"));
// console.log(reverseString("James"));

// coding task 2

// let reverseArray = (arr)=> {
//     return arr.reverse()
// };
// console.log(reverseArray([1, 2, 3, 4, 5]))
// console.log(reverseArray(["I", "like", "JavaScript"]))

// coding task 3

// arrey of items
// const data = [
//   { item: "irn bru", price: 3.25, stock: 50 },
//   { item: "fanta", price: 3.98, stock: 45 },
//   { item: "diet coke", price: 4.4, stock: 38 },
//   { item: "7up", price: 3.99, stock: 42 },
// ];

// const getMax = (arr) => {
//     // empty object to add the most expencive object

//   let maxProd = 0;
//   let prod = null;

// //   for loop to loop through the arry of list
//   for (i = 0; i < arr.length; i++) {

// // calculate the cost tied up on a single item

//     const prodSum = arr[i].price * arr[i].stock;

//     if (prodSum > maxProd) {
//       maxProd = prodSum;
//       prod = arr[i]
//     }
//   }
// // most expencive item
//   return prod;
// };

// console.log(getMax(data));