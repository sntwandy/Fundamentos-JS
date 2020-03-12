/* ASYNCHRONISM, JQUERY, CALLBACK 
    AND CALLBACKS ERRORS
*/
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// GET CHARACTERS FROM THE API
const getCharacters = (id, callback) => {
    $.get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`, { crossDomain: true }, callback).fail(function (){
        console.log(`Error, can't get the character ${id}`)
    })
}

// CALLBACKS HELL
getCharacters(1, function(person){
    console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)
    getCharacters(2, function(person){
        console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)
        getCharacters(3, function(person){
            console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)
            getCharacters(4, function(person){
                console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)
                getCharacters(5, function(person){
                    console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)
                    getCharacters(6, function (person) {
                        console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)
                    })
                })
            })
        })
    })
})