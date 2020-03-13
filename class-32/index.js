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

    // NOT ORDER
for(let i = 1; i <= 7; i++){
    getCharacters(i)
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
        return getCharacters(i + 1)
    })
    .catch(function(id){
        console.log(`Error, can't get the character ${id}`)
    })
}

    // IN ORDER
/* getCharacters(1)
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
        return getCharacters(2)
    })
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
        return getCharacters(3)
    })
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
        return getCharacters(4)
    })
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
        return getCharacters(5)
    })
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
        return getCharacters(6)
    })
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
        return getCharacters(7)
    })
    .then(function (character){
        console.log(`Hi, I'm ${character.name} and I have ${character.height} Cms`)
    })
    .catch(function(id){
        console.log(`Error, can't get the character ${id}`)
    }) */