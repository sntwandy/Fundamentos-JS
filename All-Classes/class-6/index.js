/* Objects */
var megan = 
{
    name: 'Megan',
    lastName: 'Herrera',
    age: 20
}

var wandy = 
{
    name: 'Wandy',
    lastName: 'Santana',
    age: 21
}

function printMayusName(person)
{
    var person = person.name.toUpperCase()
    console.log(person)
}

// Otra manera de acceder a los atributos de un objeto desde la declaracion de la propia funcion.
function printMayusName2({name})
{
    console.log(name.toUpperCase())
}

printMayusName2(wandy)
//Podemos pasarle un objeto directamente, pero debe tener el atributo name
printMayusName2({name:'Zeus'})