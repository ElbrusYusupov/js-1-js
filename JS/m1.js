/*
    const x = 5;
    const y = 10;
    const z = 5;

    console.log(x>z); // false
    console.log(z<y); // true
    console.log(x>y); // false
    console.log(z<=x); // true
    console.log(y===x); // false
    console.log(z!==y); // true
    console.log(y!==x); // true
    console.log(z===y); // false
    // Сделать их целыми, умножив на 10, сложить, а результат разделить на 10
    console.log((0.1 * 10 + 0.2 * 10) / 10);

    const name = 'Mango';
    // this is string


    const message = 'Mango ' + 'is' + ' happy';
    console.log(message); // Mango is happy

    // Now let's look at the order of the operands
    let result;

    result = 5 + '5';
    console.log(result); // '55'
    console.log(typeof result); //string

    result = 5 + '5' + 5;
    console.log(result); // '555'
    console.log(typeof result); //string

    /*
    * Please note that a moth operation has occurred
    * additions for the first two fives, after which
    * 10 was converted to string '10' stitched with '5'
    */



// $ String properties and methods

/*
const message = 'Welcome to Bahamas!';

console.log(message.length); // 19
console.log('There is nothing impossible to him who will try'.length); // 47

console.log(message.toLowerCase()); // welcome to bahamas!
console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// This does not change the original string
console.log(message); // Welcome to Bahamas!

console.log(message.indexOf('to')); // 8
console.log(message.indexOf('hello')); // -1

// All string methods are case sensitive
console.log(message.includes('welcome')); // false
console.log(message.includes('Welcome')) // true
*/




// $ Template string and interpolation

// Using variables it is necessary to compose a string substituted values
/*
const name = 'Mango';
const age = 2;
const mood = 'happy';

const message =
    'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';
console.log(message); // My name is Mango, I'm 2 years old and happy.

/*
* Compose strings with substituted values using concatenation is very awkward.
* Template string and interpolation come to the rescue.
*/

//const sameMessage =
//    `My name is ${name}, I'm ${age} years old and ${mood}.`;

//console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.


// Any valid expression can be used in interpolation

//console.log(`Any result of the addition is ${8 + 9}.`)


// $ Logical "AND"


//const num = 20;
//const result = num > 10 && num < 30;
//console.log(result); // true

//const num = 40;
//const result = num > 10 && num < 30;
//console.log(result); // false


// $ Logical "OR"

//const num = 5;
//const result = num < 10 || num > 30;
//console.log(result);


//const num = 20;
//const result = num < 10 || num > 30;
//console.log(result);


// $ Logical "NOT"


//console.log(!true);
//console.log(!false);
//console.log(!1);
//console.log(!0);



/////// $$ Branching operators
// $ IF statement


// let cost = 0;
// const subscription = 'pro';

// if (subscription === 'pro') {
//     cost = 100;
// }

// console.log(cost);


// let cost1 = 0;
// const subscription1 = 'pro';

// if (subscription1 === 'free') {
//     cost1 = 100;
// }
// console.log(cost1);


// $ IF...else statement


// let cost = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//     cost = 100;
// }
// console.log(cost);


// let cost = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//     cost = 100;
// }
// console.log(cost);

// let cost;
// const subscription = 'premium';


// if (subscription === 'free') {
//     cost = 0;
// } else if (subscription === 'pro') {
//     cost = 100;
// } else if (subscription === 'premium') {
//     cost = 500;
// } else {
//     console.log('Invalid subscription type');
// }

// console.log(cost);

// const age = 20;
// const type = age <= 18 ? 'adult' : 'child';

// console.log(type)

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//     biggerNumber = num1;
// } else {
//     biggerNumber = num2;
// }
// console.log(biggerNumber);

// const num1 = 5;
// const num2 = 10;

// const biggerNumber = num1 < num2 ? num2  : num1;

// console.log(biggerNumber);


// let cost;
// const subscription = 'free';

// switch (subscription) {
//     case 'free':
//         cost = 0;
//         break;

//     case 'pro':
//         cost = 100;
//         break;

//     case 'premium':
//         cost = 500;
//         break;

//     default:
//         console.log('Invalid subscription type')
// }

// console.log(cost);

// const value = 5;

// if (true) {
//     console.log('Block scope: ', value);
// }
// console.log('Global scope: ', value);

// if (true) {
//     const value = 5;
//     console.log('Block scope: ', value);
// }
// console.log('Global scope: ', value);

//  $$ Variable scope

// const global = 'global';
// if (true) {
//     const blockA = 'block A';

// We see global + local A
// console.log(global);
// console.log(blockA);

//    The variables blockB and blockC were not found in the available scopes.
//    There will be an error referring to the variable.

// console.log(blockB);
// console.log(blockC);

// if (true) {
//     const blockB = 'block B';
// We see global + external A = local B 

// console.log(global);
// console.log(blockA);
// console.log(blockB);

//     Variable blockC was not found in the available scopes.
//     There will be an error referring to the variable.


// console.log(blockC);
//     }
// }
// if (true) {
//     const blockC = 'block C';
// We see global + local C 

// console.log(blockC);
// console.log(global);

// Variables block A and B not found in the available scope
// There will be an error referring to the variable.

// console.log(blockA);
// console.log(blockB);


// }
// console.log(global);
// console.log(blockB);
// console.log(blockA);
// console.log(blockC);

//$$ While loop

// let counter = 0;

// while (counter < 10) {
//     console.log('counter: '), counter;
//     counter += 1;
// }

// 

// $$ do...while loop

// 

// &&& loop for

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//     console.log(i)
// }

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i < 10; i += 1) {
//     if (i === 5) {
//         console.log('Дошли до 5-й итерации, прерываем цикл!');
//         break;
//     }
// }

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }

//     console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

