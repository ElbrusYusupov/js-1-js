// const printMessage = function (message) {
//     console.log(message);
// };

// const higherOrderFunction = function (callback) {
//     const string = 'HOCs are awesome';
//     callback(string);
// }

// higherOrderFunction(printMessage)


////// $$$ Abstraction of repetition 

// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
// }

// const repeatLog = function (n) {
//     for (let i = 0; i < n; i += 1) {
//         console.log(i);
//     }
// }

// repeatLog(5)

// const printValue = function (value) {
//     console.log(value);

// };
// const prettyPrint = function (value) {
//     console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);

//     }
// };

// repeat(3, printValue)
// repeat(5, prettyPrint)

// const repeat = function (n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// };

// const labels = [];

// repeat(5, value => {
//     labels.push(`Label ${value + 1}`)
// });
// console.log(labels);

//// $$$ Filtering an array

// const filter = function (array, test) {
//     const filteredElements = [];

//     for (const element of array) {
//         const passed = test(element);
        
//         if (passed) {
//             filteredElements.push(element)
//         }
//     }

//     return filteredElements;
// };

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits);

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity);

////// $$$$$$ Execution context and call stack 


// const bar = function () {
//     console.log('bar');
// };

// const baz = function () {
//     console.log('baz');
// };


// const foo = function () {
//     console.log('foo');
//     bar();
//     baz();
// };

// foo()

//// $$$ Lexical environment

/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

// const x = 10;
// /*
//   Global env
//     Record: {x: 10}
//     Parent: null
// */

// const y = 20;
// /*
//   Global env
//     Record: {x: 10, y: 20}
//     Parent: null
// */

// /*
//   Записывается в момент объявления функции
//   [[Environment]] = Global env
// */
// const foo = function (z) {
//   /*
//     Foo env - создается в момент вызова функции
//       Record: {z: 30}
//       Parent: Global env
//   */

//   const x = 100;
//   /*
//     Foo env - создается в момент вызова функции
//       Record: {z: 30, x: 100}
//       Parent: Global env
//   */

//   return x + y + z;
// };

// /*
//   Global env
//     Record: {x: 10, y: 20, foo: <function>}
//     Parent: null
// */

// foo(30); // 150

//// $$$$ Closures


// const createCounter = function () {
//     /* The local variable privateValue is only available in a closure.
//     // It is not possible to access it in external code
//     */
    
//     let privateValue = 0;

//     const increment = function () {
//         privateValue += 1;
//         console.log(privateValue);
//     };

//     return {
//         increment,
//     };
    
// };

// const counterA = createCounter();
// counterA.increment();
// counterA.increment();


// const counterB = createCounter();
// counterB.increment()
// counterB.increment()
// counterB.increment()
// counterB.increment()
// counterB.increment()

// const makeDish = function (shefName, dish) {
//     console.log(`${shefName} is cooking ${dish}`);

// }

// makeDish('Mango', 'apple pie');
// makeDish('Mango', 'fish');
// makeDish('Mango', 'beef stew');


// makeDish('Poly', 'muffins');
// makeDish('Poly', 'pork chops');
// makeDish('Poly', 'roast beef')

// const makeShef = function (name) {
//   /*
//   The name parameter is local variable for the makeShef function.
//   This means that it will be available to the makeDish function via a closure
//   */
  
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   }
// }

// const mango = makeShef('Mango');
// mango('apple pie');
// mango('beef stew');

// const poly = makeShef('Poly');
// poly('pancakes');
// poly('eggs and bacon');


//// $$$$$$$$$ Execution context (this)

/* Petya runs fast because Petya is trying to catch the train
*/
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(petya.name);
//   },
// };

// petya.showName()

/* Petya runs fast because he (this) is trying to catch the train
*/
// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   },

// }
// petya.showName()

//// $$$$$$$$ Rules for defining 'This'

// //// $$$$ 'this in the global scope

// function fn() {
//   console.log(this);
// }
// fn()


// //// $$$$ 'this' in the object method

// const petya = {
//   name: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.name);
//   },
// };
// petya.showThis()
// petya.showName()

// function showThis() {
//   console.log('This in showThis ', this);
// }

// //// Calling in the global context
// showThis();

// const user = { name: 'Mango' };

// //// We write the link to the function into the object property.
// // Note that this is not a call - not ()

// user.showContext = showThis;

// /* We call the function in the context of the object, in context which is being called, not the global object
// */

// user.showContext();


//// $$$ this in callback function

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   /* When fn is called, callback will be a link to the showThis function of the hotel object.
//   * Its call takes place in a global context, she doesn't know anything about the hotel.
//  * Accordingly, this will not refer to hotel.
//  */
  
//   callback()
// }

// //// A reference to the function is passed, not its call.

// fn(hotel.showThis)

// /////// $$$$$$ 'this' in arrow function

// const showThis = () => {
//   console.log('This is showThis: ', this);
// }

// showThis();


// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext()

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     const fn = () => {

//       /* The arrows remember the context during the announcement, from parent scope */
//       console.log('This in fn: ', this);
//     };
//     fn();
//     console.log('This in shoeThis: ', this);
//   },
// };
// hotel.showThis()


//// $$$ if you convert this code to ES5, you get the following

// const hotel = {
//   name: 'Resort Hotel',
//   showThis: function showThis() {
//     // the context for the arrow is preserved and passed from outside scope

//     const context = this;

//     const fn = function fn() {
//       // And here it is used

//       console.log('this is fn: ', context);
//     };

//     fn();
//     console.log('this is showThis: ', this);
//   },
// };

// hotel.showThis()

////$$$$ Function methods call, apply, bind

// const greet = function () {
//   return `Wellcome to ${this.name}!`;

// };

// const hotel = { name: "Resort Hotel" };

// console.log(greet.call(hotel));
// console.log(greet.apply(hotel));


//// $$$ call and arguments
// const greet = function (guest, stars) {
//   return `${guest}, wellcome to ${stars}-stars ${this.name}`;

// };


// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };

// console.log(greet.call(hotel, 'Mango', 5));
// console.log(greet.call(motel, 'Poly', 4));


//// $$$$$$ apply and arguments

// const greet = function (guest, stars) {
//   return `${guest}, wellcome to ${stars}-stars ${this.name}`;

// };
// const hotel = { name: 'Resort Hotel' };
// const motel = { name: "Sunlight Motel" }

// console.log(greet.apply(hotel, ['Mango', 5]));
// console.log(greet.apply(motel, ['Poly', 4]));

//// $$$$ bind 

// const greet = function (guest) {
//   return `${guest} welcome to ${this.name}!`;

// };

// const hotel = { name: 'Resort Hotel' };
// const hotelGreeter = greet.bind(hotel, 'Mango');
// hotelGreeter()

// // const greet = function (guest) {
// //   return `${guest}, welcome to ${this.name}!`;
// // };

// // const hotel = { name: 'Resort Hotel' };

// // const hotelGreeter = greet.bind(hotel, 'Mango');

// // hotelGreeter(); // "Mango, welcome to Resort Hotel!"


// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback()
// };

// // Pass the copy of the showThis method with the context bound to the hotel

// fn(hotel.showThis.bind(hotel))


//// $$$$ Procedural programming

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// //// $$$$$$ Object Oriented Programming

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
  
// };

// employee.getWage()

const add = function (value, ...args) {
  console.log(value); // первый аргумент
  console.log(args); // массив всех остальных аргументов
};

add(10, 1, 2, 3);
add(15, 1, 2, 3, 4, 5);