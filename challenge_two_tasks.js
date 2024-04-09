// challenge 2
// Task one
// class User {
//   // Class constructor
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   // hello() method
//   hello() {
//     console.log(`hello, ${this.firstName} ${this.lastName}`);
//   }
// }
// //   creat user one object
// const user1 = new User("John", "Doe");
// user1.hello();
// // create user two object
// const user2 = new User("Jane", "Doe");
// user2.hello();

// Task two

// class User {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   // Getters
//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   // Setters
//   set firstName(firstName) {
//     this._firstName = firstName;
//   }

//   set lastName(lastName) {
//     this._lastName = lastName;
//   }
// // hello method
//   hello() {
//     return "Hello World!";
//   }
// }

// // Create an instance of User class
// const user = new User();

// // Use setters to set firstName and lastName
// user.firstName = "Olegs";
// user.lastName = "Jermolajevs";

// // Use getters
// console.log(user.hello())
// console.log( "My name is ",user.firstName,user.lastName);

// Task three

// // User class
// class User {
//     constructor() {
//       this._userName = "";
//     }
    
//     // Setter for username
//     set userName(userName) {
//       this._userName = userName;
//     }
//   }

//   // Admin class inheriting from User class
//   class Admin extends User {
//     // Method to express role
//     expressYourRole() {
//         return "Admin";
//       }
   
    
//     // Method to say hello
//     sayHello() {
//       return `Hello admin, ${this._userName}`;
//     }
//   }

//   // Create an object of Admin class
//   const admin = new Admin();

// //   set the username Balthazar
// admin.userName = "Balthazar";
//   // Output
//   console.log(admin.sayHello());

// ----------------------Task 4
// // user class
// class User {
//   constructor() {
//     this._numberOfArticles = 0;
//   }
//    // Getter method
//    getNumberOfArticles() {
//     return this._numberOfArticles;
//   }
//   // setter method
//   setNumberOfArticles(numberOfArticles) {
//     this._numberOfArticles = numberOfArticles;
//   }
 
//   // method to calculate scores
//   calcScores() {
//     return 0;
//   }
// }
// // Author class inheriting from User class

// class Author extends User {
//   constructor() {
//     super();
//   }
//   // Method to calculate scores for author
//   calcScores() {
//     return this._numberOfArticles * 10 + 20;
//   }
// }
// // Editor class inheriting from User class
// class Editor extends User {
//   constructor() {
//     super();
//   }
//   // Method to calculate scores for editor
//   calcScores() {
//     return this._numberOfArticles * 6 + 15;
//   }
// }
// // Create an object of Author class

// const author = new Author();
// author.setNumberOfArticles(8);
// console.log("score for the author:", author.calcScores());

// // Create an object of Editor class
// const editor = new Editor();
// editor.setNumberOfArticles(15);
// console.log("score for editor",editor.calcScores());

// --------------Task 5

// // User class
// class User {
//     constructor(username){
//        this.username = username;
//     }
//      // Abstract method to be implemented by child classes
//   stateYourRole() {
//     throw new Error("This method must be implemented by the child class.");
//   }
// //   getter method username
//    get username(){
// return this._username
//    }
// //    setter method for user
// set username(username){
//     this._username = username;
// }
//   }
// // Admin class inheriting from User class
// class Admin extends User{
//     constructor(){
//         super();
//     }
//     stateYourRole(){
//         return ("admin");
//     }
// }
// // Viewer class inheriting from User class
// class Viewer extends User{
//     constructor(){
//         super();
//     }
//     // Method to return role for viewer
//     stateYourRole(){
//         return ("viewer")
//     }
// }
// // Create an object of admin class
// const admin = new Admin();
// admin.username = "baltazar";
// console.log("username:",admin.username);
// console.log("role:",admin.stateYourRole());

// // Create an object of Viewer class

// const viewer = new Viewer();
// viewer.username = "Melchior";
// console.log("username:",viewer.username);
// console.log("role:", viewer.stateYourRole());
