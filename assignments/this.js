/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - a function that is by itself. If in a browswer, 'this' refers to the window. If programming, then 'this' is undefined. 
* 2. Implicit Binding - a function that is called by a preceding ".". The object before the dot is 'this'. 
* 3. New Binding - uses 'this' to refer to the object returned by the constructor functions.
/a constructor is useful when you want to create multiple similar objects with the same properties and methods. It's a convention to capitalize the name of constructors to distinguish them from regular functions.
* 4. Explicit - a function where the call() or apply() method is used. It also gives the clearest case of what 'this' is pointing to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello(greet) {
    console.log(greet + ' Joey');
    console.log(this);
}

sayHello('Hello');

// Principle 2

// code example for Implicit Binding

var sayHello = {
    greeting: 'Hello ',
    name: function(name){
        console.log(this.greeting + name);
        console.log(this);
    }
}

sayHello.name('Ariana');

// Principle 3

// code example for New Binding

function SayName(person){
    this.greeting = 'Hello ';
    this.person = person;
    this.speak = function() {
        console.log(this.greeting + this.person);
        console.log(this);
    }
};

var sayNick = new SayName('Nick');
var saySam = new SayName('Sam');

sayNick.speak();
saySam.speak();

// Principle 4

// code example for Explicit Binding

sayNick.speak.call(saySam);
saySam.speak.apply(sayNick);