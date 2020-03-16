/* Repetitive structures Do While */
let counter = 0

const rain = () => Math.random() < 0.25

do{
    counter++
} while(!rain())

if(counter > 1){
    console.log(`I went to see if rained ${counter} times.`)
} else if(counter === 1){
    console.log(`I went to see if rained ${counter} time.`)
}