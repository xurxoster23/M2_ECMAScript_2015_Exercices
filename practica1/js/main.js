/* Antes del ECMAScript 2015 el ámbito de las variables era el de la funcuión más próxima
var user;
user = 'Laura';

console.log(user);

function getWelcomeMessage(message) {
    if (message) {
        console.log(message + '' + user);
    } else {
        var message = 'Hola  ';
        console.log('Hola  ' + user);   
    }
    console.log(message);
    admin = 'Carlos';   
}

getWelcomeMessage();
console.log(admin);
*/
// ** En el ámbito actual de ECMAScript 2015 **
let user;
const defaultMessage = 'Hola ';
user = 'Laura';

console.log(user);

function getWelcomeMessage(message) {
    if (message) {
        console.log(message + ' ' + user);
    } else {
        let auxVariable = 'Ejemplo';
        console.log(defaultMessage + user);
    }
    console.log(auxVariable); // Error
}

getWelcomeMessage();

