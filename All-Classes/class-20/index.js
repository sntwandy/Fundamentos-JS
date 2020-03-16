/* Array, function reduce */

let megan = {
    name: 'Megan',
    lastName: 'Herrera',
    heigth: 1.70,
    books: 130
}

let zeus = {
    name: 'Zeus',
    lastName: 'Santana',
    heigth: 1.84,
    books: 24
}

let wandy = {
    name: 'Wandy',
    lastName: 'Santana',
    heigth: 1.80,
    books: 103
}

// OUR ARRAY
let people = [megan, zeus, wandy]

// ONE WAY
// ACUMULATOR TO FOR
/* let acum = 0

for(let i = 0; i < people.length; i++){
    acum = acum + people[i].books
}

console.log(`The quantity of books is: ${acum}`) */

// SECOND WAY USING REDUCE

// FUNCTION
const reducerFctn = (acum, { books }) => acum + books 


let quantityOfBooks = people.reduce(reducerFctn, 0) // You using reduce to get one value of an array of elements.

console.log(`The quantity of books is: ${quantityOfBooks}`)