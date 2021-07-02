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
// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = Math.min(...temperatures)

// console.log(min);

//// $$$ Spray arrays 

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses];

// console.log(houses);
// console.log(copyOfHouses);
// console.log(houses === copyOfHouses);

// const sliceCopyOfHouses = houses.slice();

// console.log(houses);
// console.log(sliceCopyOfHouses);

// const completeHouses = [...houses, 'Targaryen'];
// console.log(houses);
// console.log(completeHouses);

// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];
// const houses = [...firstBatch, ...secondBatch];
// console.log(houses);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lanister', 'Tyrell'];
// 
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];
// 
// console.log(housesInDebt);


// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lanister', 'Tyrell'];

// const updatedHouses = [
//     ...houses.slice(0, 1),
//     'Frey of the crossing',
//     ...houses.slice(2),
// ];

// console.log(updatedHouses);

//// $$$$ Spray objects

// const a = { x: 3, y: 2 };
// const b = { x: 2, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c);

// const d = {  ...b, ...a};
// console.log(d);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, ...b };

// // console.log(c);

// const lion = { hasTail: true, legs: 4 };
// const eagle = { canFly: true };

// const chimera = { ...lion, ...eagle };

// const add = function (...args) {
//     console.log(args);
// };

// add(1, 2, 2);
// add('llklkj', 'klk', 'l', 'jlkjlk', 'ojlkj')

// const add = function (value, ...args) {
//     console.log(value);
//     console.log(args);
// }

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);



//////////////// $$$$$$$$$$$$$$$$$ Destructuring objects

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// const { name, stars, status } = hotel;
// console.log(name, stars, status);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name = 'hotel', stars = 3, status = 'empty' } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, "empty"


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name, stars, ...rest} = hotel;

// console.log(name); // "Resort Hotel"
// console.log(rest); // {stars: 5, capacity: 100}
// console.log(stars);

//////////////// $$$$$$$$$$$$$$$$$ Destructuring arrays

const rgb = [200, 255, 100];

// const [red, green, blue] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
 
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // Red: 200, Green: 255, Blue: 100

const [red, ...colors] = rgb;
console.log(`Red: ${red}, ${colors}`);