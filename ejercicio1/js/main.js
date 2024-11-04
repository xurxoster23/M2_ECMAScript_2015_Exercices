let name = 'Juan';
let surname1 = 'Sánchez';
let surname2 = 'Pérez';

// function getIn(edad) {
//     if (edad >= 18) {
//         let mensaje = `Hola ${name} ${surname1} ${surname2}`;
//     } else {
//         let mensaje = 'Acceso denegado a menores de 18 años';
//     }

//     console.log(mensaje); // Error ámbito de variable "mensaje bloque if-else"

// }
function getIn(edad) {
    let mensaje;
    if (edad >= 18) {
        mensaje = `Binvenid@ ${name} ${surname1} ${surname2}`;
    } else {
        mensaje = 'Acceso denegado a menores de 18 años';
    }

    console.log(mensaje); // Mensaje por consola según parámetro de llamada 

}

getIn(18);