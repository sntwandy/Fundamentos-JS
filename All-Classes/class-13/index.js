/* Repetitives structures with For */

var megan = {
    name: 'Megan',
    lastName: 'Herrera',
    age: 20,
    wigth: 50
}

console.log(`To begin the year ${megan.name} ${megan.lastName} has ${megan.wigth}kg`)

const INCREMENT = 0.2
const YEAR_DAYS = 365

const upWigth = person => person.wigth += INCREMENT
const downWigth = person => person.wigth -= INCREMENT

for(let i = 0; i < YEAR_DAYS; i++){

    let random = Math.random()

    if(random < 0.25){
        upWigth(megan)
    } else if(random > 0.25 && random < 0.50){
        downWigth(megan)
    }

}

console.log(`To end the year ${megan.name} ${megan.lastName} has ${megan.wigth.toFixed(1)}kg`)