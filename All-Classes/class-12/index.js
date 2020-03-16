/* Arrow functions */

var zeus = {
    name: 'Zeus',
    lastName: 'Santana',
    age: 18
}

const ADULT_AGE = 18 // Magic number

// We can divide functions in portion, and return values

//Arrow function
//If only have one parameter, don't need ()
const isAdult =  ({age}) => age >= ADULT_AGE // true or false

const printAdult = person => {
    if(isAdult(person)){
        console.log(`${person.name} ${person.lastName} is an Adult`)
    } else{
        console.log(`${person.name} ${person.lastName} is NOT an Adult`)
    }
}

//Arrow function
const allowAccess = person => {
    if(!isAdult(person)){
        console.log('DENIED ACCESS')
    } 
    else{
        console.log('APPROVED ACCESS')
    }
}