var name = 'Megan', lastName = 'Herrera'

/* toUpperCase() and toLowerCase() to transform all string mayus or minus. */
var mayusName = name.toUpperCase()
var minusLastName = lastName.toLowerCase()

/* We can use chartAt() function to show a specific character position */
var characterPostion = name.charAt(0)

/* Using the attribute length to know how many character have a string */
var characterNumber = name.length

/* How to concatenate strings using variables interpolation. We can execute js code inside */
var fullName = `${name} ${lastName.toUpperCase()}`

/* We can get a sub string from a string, with the substr() function */
var str = name.substr(2, 2)

/* Challenge: How to show to the user the last character of your name. */

var lastCharacterName = name.charAt(name.length - 1)