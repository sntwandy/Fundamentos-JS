/* Array filter */
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

const isHeigth = ({ heigth }) => heigth >= 1.8

let people =  [megan, zeus, wandy]

/* let heigthPeople = people.filter(function ({ heigth }) {
    return heigth > 1.8
}) */

let heigthPeople = people.filter(isHeigth)

console.log(heigthPeople)