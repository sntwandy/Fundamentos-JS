/* Array */

let megan = {
    name: 'Megan',
    lastName: 'Herrera',
    heigth: 1.5
}

let zeus ={
    name: 'Zeus',
    lastName: 'Santana',
    heigth: 0.6
}

let wandy = {
    name: 'Wandy',
    lastName: 'Santana',
    heigth: 1.7
}

let people = [megan, zeus, wandy]

for(let i = 0; i < people.length; i++){
    console.log(`${people[i].name} ${people[i].lastName} has ${people[i].heigth}mts`)
}