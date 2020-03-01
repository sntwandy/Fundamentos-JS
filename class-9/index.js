/* Comparisons */
var x = 5, y = '5'

x == y // true '5' '5'
x === y // false 5 '5'


// Comparisons with objects

var megan = {
    name: 'Megan'
}

var otherPerson = {
    name: 'Megan'
}

megan == otherPerson // false 
megan === otherPerson // false

// Other way to objects

var wandy = {
    name: 'Wandy'
}

var otherPerson = wandy // reference to wandy object

wandy == otherPerson // true by reference
otherPerson === wandy // true by reference

var other = {
    ...wandy
}

wandy == other // false, this is a new object
wandy === other // false