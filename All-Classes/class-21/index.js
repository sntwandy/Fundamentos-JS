/* Classes Prototypes */

// Creating our prototype 'person'.
function person (name, lastName, heigth){
    this.name = name  // this. is the reference to the object.
    this.lastName = lastName
    this.heigth = heigth
}

// To create a atribute of say hi. with a function inside the prototype person.
person.prototype.hi = function (){
    console.log(`Hi, my name is ${this.name} ${this.lastName}`)
}

person.prototype.isHeigth = function (){
    let limitHeigth = 1.8
    if(this.heigth >= limitHeigth){
        console.log(`${this.name} is a heigth person.`)
    } 
    else if(this.heigth < limitHeigth){
        console.log(`${this.name} is NOT a heigth person.`)
    }
}

let megan = new person('Megan', 'Herrera', 1.78)
let wandy = new person('Wandy', 'Santana', 1.82)

wandy.hi()
megan.hi()

megan.isHeigth()
wandy.isHeigth()