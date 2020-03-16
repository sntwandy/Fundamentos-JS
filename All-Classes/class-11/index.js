/* Functions return values */

var zeus = {
    name: 'Zeus',
    lastName: 'Santana',
    age: 18
}

const ADULT_AGE = 18 // Magic number

// We can divide functions in portion, and return values
function isAdult(person){
    return person.age >= ADULT_AGE // true or false
}

function printAdult(person){
    if(isAdult(person)){
        console.log(`${person.name} ${person.lastName} is an Adult`)
    } else{
        console.log(`${person.name} ${person.lastName} is NOT an Adult`)
    }
}