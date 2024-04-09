// @traditional function
// function greet (name) {
//     return "hello my name is " + name
// }

// @Tradition anonymous function
// let greet = function (name){
//     return "hello my name is " + name
// }
// console.log(greet ("oleg"))

// @Remove word function and replace with arrow
// let greet = (name)=> {
//     return "hello my name is " + name
// }
// console.log(greet("Oleg"))

// @If have only one parametr, you can move a bracket and "return"
// let greet = (name)=> "hello my name is " + name
// console.log(greet("Oleg"))



// ----------------------------------------------------------------
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

// -----------------------------------------------------------------------------------------------------------------------

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;

//   }
//   drive(){

//   }
// }

// const myCar = new Car("toyota","c-h");
// console.log(myCar.make)

// -----------------------
// // class constructor
// class Circle {
//   // class constructor
//   constructor(radius) {
//     this._radius = radius;
//   }

//   // getters methods (functions)
//   get radius() {
//     return this._radius;
//   }

//   // setter methods (functions)
//   set radius(radius) {
//     this._radius = radius;
//   }
//   // methods

//   canculateArea() {
//     return Math.PI * this._radius ** 2;
//   }
// }

// ------------------------------------------------------
