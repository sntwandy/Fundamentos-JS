/* CLASS 'FOR UNDER EVERYTHING ARE PROTOTYPES' */

// CLASS PERSON
class Person{
    constructor (name, lastName, heigth){
        this.name = name
        this.lastName = lastName
        this.heigth = heigth
    }

    sayHi(){
        console.log(`Hi, my name is ${this.name} ${this.lastName}`)
    }

    isHeigth(){
        return this.heigth >= 1.8
    }
}

// CLASS DEVELOPER
class Developer extends Person{ // Inheritance in class sing 'extends' and then the class 'Person' for this example
    constructor(name, lastName, tech){
        super(name, lastName) // WE CALL THE SUPER CONSTRUCTOR 'FATHER' TO DO INHERITANCE
        this.tech = tech
    }

    sayHi(){
        console.log(`Hello, my name is ${this.name} ${this.lastName}, and I'm Developer`)
    }

    iWork(){
        console.log(`I'm ${this.name} ${this.lastName} and I work with ${this.tech}`)
    }
}

// CREATING PROTOTYPE 
let megan = new Person('Megan', 'Herrera', 1.65)
let wandy = new Person('Wandy', 'Santana', 1.78)
let zeus = new Developer('Zeus', 'Santana','Python')