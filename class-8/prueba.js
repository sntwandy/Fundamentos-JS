var zeus = 
{
    name: 'Zeus',
    lastName: 'Santana',
    age: 1
}

function printName(pet)
{
    var pett = pet
    pett.age += 1
    return pett
}

const foo = (str) =>{
    str = 'Other thing'
    return str
}

const aStr = 'a'
console.log(foo(aStr))
console.log(aStr)

var numbers = [1, 2, 5]
var doubles = numbers.map(function(x){
    return x * 2
})
