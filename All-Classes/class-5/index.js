/* Scope of functions */
var name = 'Megan'


/* Using a global variable, but it's happening a side effect, and that's not good*/
function printMayusName()
{
    name = name.toUpperCase()
    console.log(name)
}

//printMayusName()

/* The right way is this with parameter, to don't modify the value of global variable */

function printMayusName2(n)
{
    // n is a local variable, only work here!
    n = n.toUpperCase()
    console.log(n)
}

printMayusName2(name)

/* We can name the same variable local like global, in JS its work and not affect the global variable value*/

function printMayusName3(name)
{
    console.log(name.toUpperCase())
    
}

printMayusName3(name)