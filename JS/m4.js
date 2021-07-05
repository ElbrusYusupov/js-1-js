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

const makeDish = function (shefName, dish) {
    console.log(`${shefName} is cooking ${dish}`);

}

makeDish('Mango', 'apple pie');
makeDish('Mango', 'fish');
makeDish('Mango', 'beef stew');


makeDish('Poly', 'muffins');
makeDish('Poly', 'pork chops');
makeDish('Poly', 'roast beef')
