//  Part I

/**
 * use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback
//  he wants total = 1; and he wants the total to take the array of numbers [1,2,3,4,]; and he wants 
//  he wants this:
// var arrayOfNumbers = [1,2,3,4], var toal =1; for(;;){total *= arrayOfNumbers[index]}

function forEach(array, callback) { // array must be passed an array type and a callback must be passed a function type because matt decided this
        "use strict"
        //do something
        //for loop through the array

        for (var i = 0; i < array.length; i++) {
            callback(array[i])
        }
    }
    // testing your code with console.assert
var myArray = [1, 2, 3, 4]
var total = 1;
forEach(myArray, function(a) {
    total *= a;
});
console.log(total)
    // and finally assert; if this fails, the program stops
    // console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum() {
        "use string"
        // parse arguments into an array
        var args = [].slice.call(arguments);
        // .. do something with each element of args
        var total = 0;
        args.forEach(function(number) { //----> .forEach only takes functions; .forEach is an abstraction for a for loop
            total += number
        });
        return total;
    }
    //sum(1,2,3)--->[1,2,3]
console.assert(sum(1, 2, 3, 4, 5) === 15); //--->[1,2,3,4,5]

// // 2. calculate the average of numbers (returns the average (A NUMBER))

function average() {
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // 1. add the numbers inside the array
    //2. divide by the amount of numbers in the array is equal to args.length
    var total = 0;
    args.forEach(function(number) { //----> .forEach only takes functions; .forEach is an abstraction for a for loop
        total += number
    });
    total /= args.length
    return total;
}

console.assert(average(2, 4, 6, 8) === 5)

// // 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest() {
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var theLargestNumber = 0
    args.forEach(function(number) {
        if (number > theLargestNumber) {
            theLargestNumber = number;
        }
    })
    return theLargestNumber
}

console.assert(largest(2, 4, 6, 8) === 8)

// // 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest() {
    "use strict"
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var theLongestString = '';
    args.forEach(function(string) {

        if (string.length > theLongestString.length) {
            theLongestString = string;
        }
    })
    return theLongestString.length;
    // .. do something with each element of args
}

console.assert(longest('the', 'quick', 'brown', 'fox') === 5)

// // 5. write a function that can sort an array of Date objects (returns a NEW ARRAY of Date's)

function sort(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    args.sort(function(a,b){ //---- .sort expects a function
        return a>b;
        //other options for sort below:
        //return a-b; return b-a; if(a<b)return 1, else return -1
        // if (a>b) --->return 1 //--true
        // else     --->return -1 //--false   
        //if want to use sort for numbers, use .length b/c arithmetic can be applied
    });
    return args;
}

var dates = [
    new Date("Oct 2, 2015"),
    new Date("Oct 1, 2015"),
    new Date("Jan 2, 2015"),
    new Date("Dec 5, 2014"),
    new Date("Mar 27, 2015")
]

var sorted = sort(dates[0], dates[1], dates[2], dates[3], dates[4]);
// console.log(sorted)
console.assert(
    sorted[0] === dates[3] &&
    sorted[1] === dates[2] &&
    sorted[2] === dates[4] &&
    sorted[3] === dates[1] &&
    sorted[4] === dates[0] 
)

// /**
//  * PART II
//  *
//  * For each of the following Array methods,
//  *
//  * 1. use them in an example
//  * 2. write a console.assert to test them
//  */

 //.sort()
var numero = [43,6,200]

numero.sort(function(a,b){
    // return a>b;
    // return a<b;
    // return b-a;
    return a-b;
});
console.log(numero)
console.assert(numero[2] === 200)

// // .concat()
var muebles = ['1','2', '3']
var cocina = ['4', '5', '6']
var bano = ['9','10','11']
var casa = muebles.concat(cocina, bano);

console.log(casa)
console.assert(casa[0] === '1')

// // .indexOf()
var q = ['tombor', 'bongos', 'guitarra']
console.log(cocina.indexOf('5'))
console.log(q.indexOf('tombor'));


// // .split()
var w = "¿7 3 5 6 2?"
var v = w.split(" ")
console.log(v)
console.assert(v[3] === "6")

// // .join()
var f = ['33', '44', '55'];
var g = f.join('-');
console.log(g);
console.assert(g.indexOf('55') === 6)
// // .pop()

// // .push()

// // .slice()

// // .splice()

// // .shift()

// // .unshift()

// // .filter()

// // .map()

// /**
//  * PART III
//  *
//  * Fill in the sections below marked 'YOUR CODE HERE'.
//  *
//  * The code below should find all customers whose first-names start with 'J',
//  * map() those people into an array of objects that have a name property:
//  *
//  * i.e. { name : c.firstname + " " + c.lastname }
//  *
//  * then sort them alphabetically
//  */

// // set up arrays
// var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
// var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];

// var customers = [{
//     firstname: 'Joe',
//     lastname: 'Blogs'
// }, {
//     firstname: 'John',
//     lastname: 'Smith'
// }, {
//     firstname: 'Dave',
//     lastname: 'Jones'
// }, {
//     firstname: 'Jack',
//     lastname: 'White'
// }];

// console.log(customers);

// var projections = customers
// .filter(function(c) {
//     // YOUR CODE HERE
// })
// .map(function(c) {
//     // YOUR CODE HERE
// })
// .sort(sortByName);

// function sortByName(c1, c2) {
//     "use strict";
//     //...
// }

// console.log(projections);
