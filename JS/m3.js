// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// console.log(hotel.name);
// console.log(hotel['name']);

// hotel.name = 'Coastline Resort'
// console.log(hotel.name);
// console.log(hotel['name']);


// hotel['name'] = 'Stardust Hotel'
// console.log(hotel.name);
// console.log(hotel['name']);

// //// If, when writing a value by key, there is no such key in the object, it will be created

// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';

// console.log(hotel.address);
// console.log(hotel['manager']);

// //// $$$$ Removing properties

// delete hotel.name;
// console.log(hotel);

// delete hotel['stars'];
// console.log(hotel);

// //// $$$ Missing properties 

// console.log(hotel.pool);

// ////$$$ Shorthand properties

// let name = 'Resort Hotel';
// let stars = 5;
// let capacity = 100;

// // This ES5 entry is redundant
// const es5hotel = {
//     name: name,
//     stars: stars,
//     capacity: 100,
// };

// // ES6 Shorthand properties. The key name will be as the same variable name.
// // The value of the property will be equal to the value of the variable


// const es6hotel = {
//     name,
//     stars,
//     capacity,
// };
// console.log(es6hotel);

// ////$$$$ Computed properties

// // before
// // const key = 'person';
// // const object = {};


// // object[key] = 'Mango';
// // console.log(object);

// // now

// const key = 'person';
// const getKey = function () {
//     return 'age';
// };

// // Computed properties 
// const object = {
//     [key]: 'Mango',
//     [getKey()]: 2,
// };
// console.log(object);

//// $$$$$$$$ Object methods

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,

//     // This is how the method was declared in ES5
//     greetInEs5: function () {
//         console.log('Welcome!');
//     },

//     // This is how the method declaring in ES6
//     greetInEs6() {
//         console.log('Welcome!');
//     },
// };

// hotel.greetInEs5(); // Welcome!
// hotel.greetInEs6(); // Welcome!

// hotel.greet = function () {
//     console.log('Welcome!');
// };
// hotel.greet();

//// $$$$ Object access via this

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//     showName() {
//         console.log(this.name);
//     },
//     changeCapacity(value) {
//         this.capacity = value;
//     }
// };
// hotel.showName();
// hotel.changeCapacity(200);
// console.log(hotel.capacity);

//// $$$ for...in loop

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// for (const key in hotel) {
//     console.log('Key: ', key);
// }

// for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
// }

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
// }

//// $$$$ Object.keys(), Object.values(), Object.entries()

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// const keys = Object.keys(hotel);
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);


// for (const key of keys) {
//     console.log('Value: ', hotel[key]);
// };


// for (const entry of entries) {
//     const key = entry[0]
//     const value = entry[1]

//     console.log(`${key}: ${value}`);
// }

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
// };

// const values = Object.values(goods);

// let total = 0;

// for (const value of values) {
//     total += value
// }

// console.log(total);
const temperatures = [18, 14, 12, 21, 17, 29];
const min = Math.min(...temperatures)

console.log(min);