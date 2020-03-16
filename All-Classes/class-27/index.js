/* ASYNCHRONISM, JQUERY, CALLBACK */
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const onPeopleResponse = person => {
    console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)
}

for(let i = 1; i <= 4; i++){
    $.get(`${API_URL}${PEOPLE_URL.replace(':id', i)}`, { crossDomain: true }, onPeopleResponse)
}