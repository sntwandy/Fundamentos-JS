/* ASYNCHRONISM, JQUERY, CALLBACK */
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// FUNCTION TO SHOW THE DATA FROM API WITH CALLBACK
const onPeopleResponse = person => {
    console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)
}

// GET CHARACTERS FROM THE API
const getCharacters = id =>{
    $.get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`, { crossDomain: true }, onPeopleResponse)
}
