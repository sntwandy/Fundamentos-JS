/* Repetitives structures switch */

var signo = prompt('Which is your signo?')

switch(signo){
    case 'aries': 
        console.log('Puedes convencer a todas las personas de tu entorno de que realmente no quieres estar enamorado, aunque interiormente no haya marcha atrás.')
        break
    case 'tauro':
        console.log('Si descubres que hay pequeñas cosas que te molestan de tu pareja puede que estés entrando en una espiral que acabará siendo especialmente negativa para ambos.')
        break
    case 'geminis':
        console.log('Tu corazón pertenece a una sola persona, por mucho que te encante el coqueteo y lo estés demostrando en cada una de tus escapadas, solo tienes ojos para ese alguien.')
        break
    case 'cancer':
        console.log('Eres un experto en determinadas actuaciones sentimentales, en darlo todo el primer día y al segundo estar totalmente decepcionado.')
        break
    case 'leo':
        console.log('Si visualizas el final de un ciclo es porque realmente estás llegando a otro. Un momento de tu vida en el que todo puede ser posible.')
        break
    case 'virgo':
        console.log('Si no descubres a simple vista que esa persona te quiere, te sentirás especialmente decepcionado.')
        break
    case 'libra':
        console.log('Es momento de emprender determinadas actuaciones sentimentales sin precedentes.')
        break
    case 'escorpio':
        console.log('Eres un especialista en poner excusas a todo. Cuando las cosas no terminan de funcionar tal y como esperas siempre hay un culpable en el que escudarte.')
        break 
    case 'sagitario':
        console.log('Si ves que realmente puedes continuar más tiempo con esa persona, no te separes de ella.')
        break
    case 'capricornio':
        console.log('Convencerse de que hay alguien mejor esperando en momentos difíciles es algo que te ayudará a mantener el ánimo elevado.')
        break
    case 'acuario':
        console.log('Existe la posibilidad de que emprendas un camino distinto al actual, cuando las cosas no salen de la misma forma que hasta ahora debes ponerte las pilas.')
        break
    case 'piscis':
        console.log('Seguirás con la mirada puesta en una super luna que se acerca y ello pondrá a prueba tus sentimientos.')
        break
    default: 
        console.log('Try again incorrect value.')    

}