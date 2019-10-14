var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);

// ----------------------------------------------
// object literals
var person2 = {};
console.log(person2);

var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: "111 Main St.",
        city: 'New York',
        state: 'NY',
    },
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);
greet({firstname:"Mary", lastname:"Doe"});

// --------------------------------------------------
// Framework aside: faking namespaces
var greet = 'Hello';
var greet = 'Hola';

console.log(greet); // greet will be Hola

// to avoid this collision
var english = {
    greetings: {
        basic: 'Hello',
    }
};
var spanish = {};

english.greetings.basic = 'Hello!';
spanish.greet = "Hola!";

// -----------------------------------------------------
// JSON and Object Literals
var objectLiteral = {
    firstname: "Mary",
    isAProgrammer: true,
};

console.log(JSON.stringify(objectLiteral));

var jsonString = '{ "firstname": "Mary", "isAProgrammer": true }';
var jsonValue = JSON.parse(jsonString);

console.log(jsonValue);

// --------------------------------------------------------
// 34. Functions are Objects
function greet2() {
    console.log("Hi");
}

greet2.language = "english";
console.log(greet2.language);

// --------------------------------------------------------
// 35. Function Statements and Function Expressions
// function statement

greet3();

function greet3() {
    console.log("Hi");
}

var anonymousGreet = function () {
    console.log("Hi from Anonymous!");
}

anonymousGreet();

function log(a) {
    a();
    console.log(a);
}

log(function() {
    console.log('hihi');
})

// ------------------------------------------------------------
// 37. Objects, Functions, and 'this'
console.log(this);

function a() {
    console.log(this);
}

var b = function() {
    console.log(this);
}

a(); // window
b(); // window

var c = {
    name: 'The c object',
    log: function() {
        var self = this;

        this.name = 'Updated c object';
        console.log(self); // this --> c object

        var setname = function (newname) {
            self.name = newname;
            // this points to the global object!!!
            //console.log(self);    
        }
        setname('Updated again! The c object');
        console.log(self); // this --> c object
    }
}

c.log();

// -----------------------------------------------------------
// 39. 'arguments' and spread
function greet4 (firstname, lastname, language) {

    console.log(firstname);
    console.log(lastname);
    console.log(language);
}

// -----------------------------------------------------------
// 44. Immediately Invoked Functions Expressions (IIFEs)
// function statement
function greet5(name) {
    console.log('Hello ' + name);
}

greet5();

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};

greetFunc();

var greeting = function(name = 'sc') {
    console.log('Hello ' + name);
}();

var greeting2 = function(name) {
    return ('Hello ' + name);
}('sc');

console.log(greeting2);

(function(name) {
    console.log('Hello ' + name);
}('SCCC'))

{};

// ---------------------------------------------------------
// 45. Framework Aside: IIFEs and Safe Code
(function(global, name) {
    var greetingg = 'Hello';
    global.greetingg = 'Hawdy';
    console.log(greetingg + ' ' + name);
}(window, 'SCCC')); // IIFE
// No collision with the var greetingg in greeting.js
console.log(greetingg);

// ------------------------------------------------------------
// 46. Understanding Closures
function greetC (whattosay) {

    return function(name) {
        console.log(whattosay + ' ' + name);
    }

}

var sayHi = greetC('Hi');
sayHi('Tony');

// -------------------------------------------------------------
// 47. Understanding Closures - Part 2
function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);                
            }
        )
    }

    return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

// have it work: using IIFE ------------------------------------
function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function() { console.log(j); }
            }(i))
        )
    }

    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();



