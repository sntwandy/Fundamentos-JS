/* ASYNCHRONISM, JQUERY, CALLBACK */
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// GET CHARACTERS FROM THE API
const getCharacters = (id, callback) =>{
    $.get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`, { crossDomain: true }, person => {
        console.log(`Hi, I'm ${person.name} and I have ${person.height} Cms`)

        // WE TRY TO GET THE DATA IN ORDER
        if(callback){
            callback()
        }
    })
}


// CALLBACKS HELL
getCharacters(1, function(){
    getCharacters(2, function(){
        getCharacters(3, function(){
            getCharacters(4, function(){
                getCharacters(5, function(){
                    getCharacters(6)
                })
            })
        })
    })
})