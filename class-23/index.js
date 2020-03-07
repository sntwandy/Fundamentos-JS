/* The hidden truth about classes in JavaScript */
// JavaScript don't support the inherintance, 'cause the classes don't exist, the prototypes is what we use, that are objects, we adding methods and functions.
// Inherintance Prototypal

// 'INHERITANCE' OF PROTOTYPES

function inheritanceOf (childPrototype, FatherPrototype) {
    let fn = function () {}
    fn.prototype = FatherPrototype.prototype // We assing the father prototype to the new fn function
    childPrototype.prototype = new fn  // And here we create a new fn to child prototype, 'cause don't affect the original value to father prototype
    childPrototype.prototype.constructor = childPrototype
}

// PROTOTYPE PERSON
function Person (name, lastName, heigth){
    this.name = name
    this.lastName = lastName
    this.heigth = heigth
}

// CREATING OR ADDING A FUNCTION TO THE PROTOTYPE Person.
Person.prototype.sayHi = function () {
    console.log(`Hi, my name is ${this.name} ${this.lastName}`)
}

Person.prototype.isHeigth = function () {
    return this.heigth >= 1.8
}

// PROTOTYPE DEVELOPER
function Developer(name, lastName, tech){
    this.name = name
    this.lastName = lastName
    this.tech = tech
}

// WE ARE 'INHERITANCE' TWO PROTOTYPES
inheritanceOf(Developer, Person)

// CREATING OR ADDING A FUNCTION TO THE PROTOTYPE Developer.
Developer.prototype.sayHi = function () {
    console.log(`Hello, my name is ${this.name} ${this.lastName}, and I'm Developer`)
}


Developer.prototype.iWork = function () {
    console.log(`I'm ${this.name} ${this.lastName} and I work with ${this.tech}`)
}

// CREATING PROTOTYPE 
/* let megan = new Person('Megan', 'Herrera', 1.65)
let wandy = new Person('Wandy', 'Santana', 1.78)
let zeus = new Developer('Zeus', 'Santana', 'Python') */