/* CLOSURES */
function createGreeting(finalPhrase){
    return function(name){
        console.log(`Hi, ${name} ${finalPhrase}`) // The function is remember the finalPhrase parameter. 'closures'
    }
}

const mexicanGreeting = createGreeting('guey')
const dominicanGreeting = createGreeting('manin')
const usaGreeting = createGreeting('bro')

mexicanGreeting('Megan')
dominicanGreeting('Wandy')
usaGreeting('Zeus')