/* IMMUTABLE DATA STRUCTURE */
const megan = {
    name: 'Megan',
    lastName: 'Herrera',
    age: 20
}

const happyBirthday = (person) => ({
    ...person,
    age: person.age + 1
})