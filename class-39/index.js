/* Changing context when calling a function */
const megan = {
    name: 'Megan',
    lastName: 'Herrera',
    age: 21
}

const wandy = {
    name: 'Wandy',
    lastName: 'Santana',
    age: 22
}

function sayHi(halo = 'Hi'){
    console.log(`${halo}, my name is ${this.name}`)
}

/* const meganHi = sayHi.bind(megan) */
/* const wandyHi = sayHi.bind(wandy) */
/* setTimeout(sayHi.bind(megan), 1000)
setTimeout(sayHi.bind(wandy), 2000) */

//sayHi.call(megan, 'Alo')
sayHi.apply(megan, ['Hey'])