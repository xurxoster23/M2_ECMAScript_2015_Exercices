// ** Funciones async - await **

function getUser () {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve({
            name: 'Sara',
            language: 'en'
        }), 2000)
    })
}

function getMessage(language) {
    if (language === 'es') {
        return 'Hola ';
    } 
    if (language === 'en') {
        return 'Hello ';
    }
}

async function setMessage() {
    let user = await getUser();
    let message = getMessage(user.language)
    console.log(message + user.name);
    
}

setMessage();



// ** Manejo de errores en el patrón async - await **

const users = [
    {Name: 'Jorge',  Surname: 'Borrego', Age: 45, Points: 150, Language: 'es'},
    {Name: 'Andrea', Surname: 'Roa',     Age: 40, Points: 150, Language: 'en'},
    {Name: 'Unax',   Surname: 'Borrego', Age: 18, Points: 150, Language: 'es'},
    {Name: 'Thiago', Surname: 'Borrego', Age: 10, Points: 150, Language: 'en'}
];

let [...dataUser] = users;

function getUsers(position,seconds) {
    return new Promise((resolve,reject) => {
        if ((dataUser[position].Name || dataUser[position].Surname) === '' || (typeof dataUser[position].Name || typeof dataUser[position].Surname) !== 'string'){
            reject({mensaje: 'Invalid Name or Surname'});
        } 
        else{
            setTimeout(() => {
                resolve({nombre: dataUser[position].Name, apellido: dataUser[position].Surname, edad: dataUser[position].Age, idioma: dataUser[position].Language});
            },seconds*1000)
        }     
    })
}

function getMessage1(idioma) {
    if (idioma === 'es') {
        return 'Hola '
    }
    if (idioma === 'en') {
        return 'Hello '
    }
}

async function setMessage1() {
    try{
        let user = await getUsers(2,3);
        let message = getMessage1(user.idioma);
        console.log(message + user.nombre);
        
    } catch(error) {
        console.error(error);
    }
}

setMessage1();