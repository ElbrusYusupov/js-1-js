// $$ Creating arrays

// Empty array
// const arr = [];

// Array clients with three elements

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients);

// $$ Accessing elements

// const clients = ['Mango', 'Poly', 'Ajax'];

// By specifying the index of an element in brackets,
// we get its value

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);

// $$ Overriding arrays
// 
// const clients = ['Mango', 'Poly', 'Ajax'];

// The element of value can be replaced

// clients [0] = 'Kiwi';
// console.log(clients[0]);

// or addition

// clients[3] = 'Alex';

// console.log(clients[3]);

// console.log(clients);


// $$ Length of array

// const clients = ['Mango', 'Poly', 'Ajax'];

// // .length will return the current length of the array
// console.log(clients.length);

// clients.length = 5;
// console.log(clients.length);
// console.log(clients);
// console.log(clients[4]);

// clients.length = 2;
// console.log(clients);

// // $$ Iterating over an array

// const clients = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//     numbers.push(`lable-${i}`);
// }
// console.log('numbers: ', numbers);

// $$ loop for...of

// Iterating over an array 

// const clients = ['Mango', 'Poly', 'Ajax'];

// for (const client of clients) {
//     console.log(client);
// }

// // Iterating over a string 

// const string = 'javascript';

// for (const character of string) {
// console.log(character);
// }

// $$ Instructions .break and continue

// const clients = ['Mango', 'Poly', 'Ajax'];

// const clientNameToFind = 'Moly';
// let message;

// for (const client of clients) {

//     /* At each iteration we will check if the array element matches the customer's name.
//      * If it matches, then we write a success message in the .message and do a .break so as not to look further
//     */
    
//     if (client === clientNameToFind) {
//         message = 'There is the client with this name in the database!';
//         break;
//     }
//     /* If they do not match, than write a message about the absence of a name in resultMsg
//     */
    
//     message = 'There is not the client with this name in the database!';


// }

// console.log(message);


// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Moly';
// let message = 'There is not the client with this name in the database!';

// for (const client of clients) {
//     message = 'There is the client with this name in the database!'
// }

// console.log(message);

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'There is not client with this name in the database';

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = 'There is the client with this name in the database';
//         break;
//     }
//     // If it doesn't match, than we do nothing at this iteration

// }
// console.log(message);

//// For numbers less than threshold, continue is triggered, the execution of body is terminated and control passed to the next iteration.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`Number above than ${threshold}: ${numbers[i]}`);
// }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//     console.log('Matrix subarray matrix[i]: ', matrix[i]);

//     for (let j = 0; j < matrix[i].length; j += 1) {
//         console.log('Matrix subarray element matrix[i][j]: ', matrix[i][j]);
//         total += matrix[i][j];
//     }
// }

// console.log(total);

/////////// $$ Assignment by reference and by value

// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// a = 10;
// console.log(a);
// console.log(b);


// const a = ['Mango'];

// // Assignment by reference

// const b = a;
// console.log(a);
// console.log(b);

// // modify the array by adding one more element using the pointer from "a"

// a.push('Poly');
// console.log(a);

// // b has changed too, because b, like a, just contains a reference to the same memory location
// console.log(b);

// // The result is repeated

// b.push('Ajax');
// console.log(b);
// console.log(a);

// $$$$$$$$$$$$$$$ The split () and join () methods

// const message = 'Welcome to Bahamas';

// console.log(message.split(' '));
// console.log(message.split(''));

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients.join(' '));
// console.log(clients.join(', '));
// console.log(clients.join('-'));

/// $$$ indexOf() and includes() methods

// const clients = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// console.log(clients.indexOf('Poly'));
// console.log(clients.indexOf('Monkong'));

// console.log(clients.includes('Mango'));
// console.log(clients.includes('Ajax'));
// console.log(clients.includes('Monkong'));

/////////////////// Checking multiple conditions with includes()
// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry') {
//     console.log('It is a red fruit!')
// }

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//     console.log('It is a red fruit');
// }

//// $$$$$ push(), pop(), shift(), unshift() methods


// Create an empty array

// const stack = [];
// // Adding elements to the end of the array

// stack.push(1);
// console.log(stack);

// stack.push(2);
// console.log(stack);

// stack.push(3);
// console.log(stack);

// // Removing elements from the end of the array

// stack.pop();
// console.log(stack);

// stack.pop();
// console.log(stack);

// stack.pop();
// console.log(stack);

// console.log(stack.pop());


// const clients = ['Mango', 'Poly', 'Ajax']

// console.log(clients.shift());
// console.log(clients);

// clients.unshift('Kiwi')
// console.log(clients);

////$$$$$ slice() method

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.slice(1, 3));

// console.log(clients.slice(1));
// console.log(clients.slice(-2));
// console.log(clients.slice());
// console.log(clients.slice(-1));


/////// $$$ splice() method

// Suppose we have an array of rating that contains five numbers from 1 to 5

// const scores = [1, 2, 3, 4, 5];

// // The next operation removes three elements starting from the first element (index 0)

// const deletedScores = scores.splice(0, 3);

// // The scores array now contains two elements


// console.log(scores);

// console.log(deletedScores);

// Inserting elements into an array

// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple');

// console.log(colors);
// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors);

//// $$$$ Function expression


// // a,b,c are parameters
// const add = function (a, b, c) {
//     return a + b + c;
// }

// // 1,2,3 are arguments

// const result = add(1, 2, 3);


// console.log(result);
// console.log(add(5, 10, 15));

// $$ Order of code execution

// const fnA = function () {
//     console.log('Started to be executed [fnA]');
//     fnB();
//     console.log('[fnA] continued to execute after exiting [fnB]');
// }

// const fnB = function () {
//     console.log('Executing [fnB]');

// }
// console.log('Started executing [main]');
// fnA();
// console.log('[main] continued to execute after exiting [fnA]');

//// $$$$ Default parameters

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//     for (let i = countFrom; i <= countTo; i += step) {
//         console.log(i);
//     }
// }
// count(1, 17);
// count(2);
// count(undefined, 5, 2);
// count();

//// $$ Subarray arguments

// const sum = function () {
//     let total = 0;

//     for (const argument of arguments) {
//         total += argument;

//     }
//     return total;
// // };
// // console.log(sum(1,2,3));
// // console.log(sum(1,2,2,3,3,3,500));
// // console.log(sum(1,2,3,4,8));

// // const fn = function () {
// //   // В переменной args будет полноценный массив
// //   const args = Array.from(arguments);
// // };

// // ////// $$$$$$$$ Guard Clause pattern

// // const withdraw = function (amount, balance) {
// //     if (amount === 0) {
// //         console.log('To carry out the operation, enter an amount greater than zero.');
// //     } else if (amount > balance) {
// //         console.log('Insufficient funds on the account');
// //     } else {
// //         console.log('Withdrawal operation completed.');
// //     }
// // }

// // const withdraw = function (amount, balance) {
  
// //   if (amount === 0) {
// //     console.log('Для проведения операции введите сумму больше нуля.');
// //     return;
// //   }

 
// //   if (amount > balance) {
// //     console.log('Недостаточно средств на счету.');
// //     return;
// //   }

  
// //   console.log('Операция снятия средств проведена.');
// // };



// // // withdraw(0, 300);
// // // withdraw(500, 300)
// // withdraw(100, 300)

// // add(1, 2, 3); // 6
// // print('text'); // text

// // function add(a, b, c) {
// //   return a + b + c;
// // }

// // function print(str) {
// //   console.log(str);
// // }


// ////// $$$$$$$$ Function scope

// // const value = 50;

// // const add = function (num) {
// //     const value = 10;
// //     const innerValue = 5;

// //     return num + value + innerValue;
// // };
// // console.log(value);
// // console.log(add(20)); // 35

// // // Если параметров несколько, то они перечисляются через запятую в круглых скобках.
// // const fn = (a, b, c) => {
// //   return a + b + c;
// // };

// // // Если параметр один, то он может быть без круглых скобок.
// // const fn = x => {
// //   return x * 2;
// // };

// // Если параметров нет, то обязательно должны быть пустые круглые скобки.
// // const fn = () => {
// //   console.log('Hello! :]');
// // };

// // const add = (...args) => {
// //   console.log(args);
// // };

// // add(1, 2, 3); // [1, 2, 3]


// // function isNumberNotInRange(start, end, number) {
// //   const isInRange = number >= start && number <= end;
// //   const isNotInRange = number >= start && number <= end; // Change this line
  
// //   return !isNotInRange;
// // }
// // isNumberNotInRange(10, 30, 17);
// // isNumberNotInRange(10, 30, 5);
// // isNumberNotInRange(20, 50, 24);
// // isNumberNotInRange(20, 50, 76);


// // function getSubstring(string, length) {
// //   const substring = string.slice("Hello world", length); // Change this line

// //   return substring;
// // }

// // console.log(getSubstring("Hello world", 3)); // возвращает "Hel"
// // console.log(getSubstring("Hello world", 6));   // возвращает "Hello"
// // console.log(getSubstring("Hello world", 8));   // возвращает "Hello wo
// // console.log(getSubstring("Hello world", 11));  //  возвращает "Hello world
// // console.log(getSubstring("Hello world", 0));  //  возвращает ""



// // getSubstring("Hello world", 6)  // возвращает "Hello"
// // getSubstring("Hello world", 8)  // возвращает "Hello wo"
// // getSubstring("Hello world", 11) // возвращает "Hello world"
// // getSubstring("Hello world", 0)  // возвращает ""


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (message.length <= maxLength) {
// 	result = message.slice(message, maxLength)
//   } else {
  
//   result = message.slice(0, maxLength)
//   result += '...'
//   }
  
//   /// Change code above this line
//   return result;
// }



// console.log(formatMessage("Curabitur ligula sapien", 16))                      // возвращает "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23))                      // возвращает "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20))                      // возвращает "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30))                      // возвращает "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15))                      // возвращает "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41))                      // возвращает "Nunc sed turpis a felis in nunc fringilla"



// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }



// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }


// function checkForSpam(message) {
//   let result;
//   // Change code below this lin
// 	result = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam');
//   // Change code above this line
//   return result;
// }

