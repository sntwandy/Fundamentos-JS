/* Conditionals */

var megan = {
    name: 'Megan',
    lastName: 'Herrera',
    age: 20,
    engineer: false,
    criminology: true,
    teacher: false,
    writter: true
}

function printPro(person){
    console.log(`${person.name} ${person.lastName} is:`)

        if(person.engineer){
            console.log(`Engineer`)
        } else if(person.criminology){
            console.log(`Criminology`)
        } else if (person.teacher){
            console.log(`Teacher`)
        } else if(person.writter){
            console.log(`Writter`)
        }
}

// Challenge

function printIsAdult(person){
    var adultLimit = 18
    if(person.age >= adultLimit){
        console.log(`${person.name} ${person.lastName} is an Adult: ${person.age}`)
    } else{
        console.log(`${person.name} ${person.lastName} is NOT an Adult: ${person.age}`)
    }
}