/* Array Map */
// Map function always return a new object or new array, if you dont modify the elements from original element.

let megan = {
    name: 'Megan',
    lastName: 'Herrera',
    heigth: 1.70
}

let zeus = {
    name: 'Zeus',
    lastName: 'Santana',
    heigth: 1.84
}

let wandy = {
    name: 'Wandy',
    lastName: 'Santana',
    heigth: 1.80
}

// OUR ARRAY
let people =  [megan, zeus, wandy]

// FUNCTIONS
const isHeigth = ({ heigth }) => heigth >= 1.8
// const notHeigth = ({ heigth }) => heigth < 1.8
const peopleCms2 = people => ({ // Using parentesis you can return a object without return {}
    // return a new object
    ...people,
    heigth: people.heigth * 100 
})

// USING FILTER
let notHeigthPeople = people.filter(function ({ heigth }) {
    return heigth < 1.8
}) 
let heigthPeople = people.filter(isHeigth)

// USING MAP
let peopleCms1 = people.map(peopleCms2)
/* let peopleCms = people.map(function (people){
    return{
        //New object
        ...people,
        heigth: people.heigth * 100
    }
}) */

// OUTPUT
console.log(people)
// console.log(heigthPeople)
// console.log(notHeigthPeople)
// console.log(peopleCms)
console.log(peopleCms1)

// EXERCISE WITH REDUCE
/* let reducerFnt = (acum, people) => acum + people.heigth

let heigthReduce = people.reduce(reducerFnt, 0) */