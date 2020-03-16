/* PRACTICING THE INHERITANCE PROTOTYPAL */

// FUNCTION FOR INHERITANCE
function inheritanceOf(childPrototype, fatherPrototype){
    let fn = function () {}
    fn.prototype = fatherPrototype.prototype
    childPrototype.prototype = new fn
    childPrototype.prototype.constructor = childPrototype
}

// PROTOTYPE Person
function Person(name, lastName, heigth, nationality){
    this.name = name
    this.lastName = lastName
    this.heigth = heigth
    this.nationality = nationality
}

// CREATING OR ADDING FUNCTIONS TO PROTOTYPE Person
Person.prototype.fullName = function () {
    console.log(`Hi, my full name is ${this.name} ${this.lastName}`)
}

Person.prototype.isHeigth = function () {
    let heigthLimit = 1.8
    if(this.heigth >= heigthLimit){
        console.log(`Yes, I'm heigth`)
    } else {
        console.log(`I'm Not Heigth`)
    }
}

Person.prototype.yourNationality = function () {
    console.log(`I'm ${this.nationality} ;)`)
}

// PROTOTYPE Dog
function Dog(name, lastName, breed){
    this.name = name
    this.lastName = lastName
    this.breed = breed
}

inheritanceOf(Dog, Person) // Dog PROTOTYPE INHERITANCE ALL ATTRIBUTES AND FUNCTIONS FROM Person PROTOTYPE

// CREATING OR ADDING FUNCTIONS TO PROTOTYPE Dog
Dog.prototype.yourBreed = function (){
    console.log(`I'm a ${this.breed} ;)`)
}

// CREATING THE PROTOTYPES
let megan = new Person('Megan', 'Herrera', 1.65, 'Dominican')
let wandy = new Person('Wandy', 'Santana', 1.80, 'Dominican')
let zeus = new Dog('Zeus', 'Santana', 'Pitbull')