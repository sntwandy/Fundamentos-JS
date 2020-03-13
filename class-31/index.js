/* ASYNCHRONISM, PROMISE */
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// GET CHARACTERS FROM THE API
const getCharacters = (id) => {
    return new Promise((resolve, reject)=>{
        $.get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`, { crossDomain: true }, function(data) {
            resolve(data)
        }).fail(() => reject(id))
    })
}

getCharacters(1)
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
    })
    .catch(function(id){
        console.log(`Error, can't get the character ${id}`)
    })