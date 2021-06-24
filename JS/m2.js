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


const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Moly';
let message = 'There is not the client with this name in the database!';

for (const client of clients) {
    message = 'There is the client with this name in the database!'
}

console.log(message);

