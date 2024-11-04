/* Sin templates antes del ECMAScript 2015
var user = 'Carlos';
var message = 'Hola ' + user + ' bienvenido a nuestra aplicación.';

console.log(message);
*/

// ** Templates ECMAScript 2015
let user = 'Carlos';
let message = `Hola ${user} bienvenido a nuestra aplicación`;

console.log(message);

// ** Ejemplo con lógica dentro de template literals
let company = 'ACME S.A.';
let footerMessage = `® ${new Date().getFullYear()} ${company} Todos los derechos reservados`;

console.log(footerMessage);

// ** Multinía sin necesidad de usar secuencia de escape
let author = 'Miguel de Cervantes';
let title = 'El Quijote';

let bookTitles = `
    Author : ${author},
    Título : ${title}
`;

console.log(bookTitles);

// ** Default Parameters en funciones
function multiply(a,b) {
    return a*b;
}

console.log(multiply(2)); // Esto devuelve NaN ya que el valor del parámetro b en undifined

function multiply2(a=0,b=0) {
    return a*b;
}

console.log(multiply2(2)); // Ahora el valor por defecto del parámetro b es 0.




