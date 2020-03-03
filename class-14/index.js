/* Repetitives structures with While */

var megan = {
    name: 'Megan',
    lastName: 'Herrera',
    age: 20,
    wigth: 50
}

console.log(`To begin the year ${megan.name} ${megan.lastName} has ${megan.wigth}kg`)

const INCREMENT = 0.2
const YEAR_DAYS = 365
const GOAL = megan.wigth - 3
let days = 0

const upWigth = person => person.wigth += INCREMENT
const downWigth = person => person.wigth -= INCREMENT
const eat = () => Math.random() < 0.3
const excercise = () => Math.random() < 0.4


while(megan.wigth > GOAL){
    if(eat()){
        upWigth(megan)
    }
    if(excercise()){
        downWigth(megan)
    }
    days++
}

console.log(`${megan.name} ${megan.lastName} slimming 3kg in ${days} days.`)