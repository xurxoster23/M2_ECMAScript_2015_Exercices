// ** Cálculo de la edad dada la fecha de nacimiento (Arrow function) **
 
const getAge = (birthdate) => {
    return Math.floor((new Date().getTime()-birthdate.getTime())/31536000000);
}

// console.log(new Date('1980-01-01'));


let users = [
    {nombre: 'Luis',    apellido: 'Merino',     fechaNacimiento: new Date('1978-01-19')},
    {nombre: 'Andrea',  apellido: 'Roa',        fechaNacimiento: new Date('1980-02-03')},
    {nombre: 'Unax',    apellido: 'Borrego',    fechaNacimiento: new Date('2007-03-07')},
    {nombre: 'Thiago',  apellido: 'Borrego',    fechaNacimiento: new Date('2014-11-10')}
];

let usersList = users.map((user,index) => 
    `${index+1}.- ${user.nombre} ${user.apellido} ${getAge(user.fechaNacimiento)} años`
) 
    


console.log(usersList);

