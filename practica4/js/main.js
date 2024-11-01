// ** Arrow Fuctions **

// * Antes del ECMAScript 2015
var suma = function(a,b) {
    return a + b;
}
console.log(suma(3,4));

// * ECMAScript 2015
let sumaEmasc = (a,b) => {
    return a + b;
}
console.log(sumaEmasc(4,3));

let add = (a,b) => a + b;
console.log(add(6,9));
let squareSurface = a => a * a;
console.log(squareSurface(8));


// ** Palabra Reservada THIS **
// window.username = 'Juan';

// function User() {
//     this.username = 'Laura';
//     setTimeout(function(){
//         console.log('Usuari@ ' + this.username);
//     }, 2000)
// }

// var user1 = new User();

window.username = 'Juan';

function User(){
    this.username = 'Laura';
    setTimeout(() => {
        console.log(`Usuari@ ${this.username}`);
    }, 2000)
}

var user1 = new User();

// ** Funciones de Alto Nivel **

// * ForEach *
let alumns = [
    {name : 'Laura', surname : 'Lòpez', points : 4.6},
    {name : 'Aritz', surname : 'Aranburu', points : 7},
    {name : 'Goiatz', surname : 'Maillo', points : 3.6},
    {name : 'Jorge', surname : 'Borrego', points : 5.3},
    {name : 'Andrea', surname : 'Roa', points : 8.3}
];

let passAlumnsCounter = 0;

alumns.forEach((alumn)=> {
    if(alumn.points >= 5)
        passAlumnsCounter++;
});

console.log(passAlumnsCounter);

// * map() *
const alumnList = alumns.map((alumn,index) => {
    return `${index + 1}.- ${alumn.name} ${alumn.surname} = ${alumn.points}`
})

console.log(alumnList);


// ** COMBINACIÓN DE LAS FUNCIONES DE ALTO NIVEL FOREACH() Y MAP() **

let dataSet = [
    {
        "city" : "Madrid",
        "data1" : "430",
        "data2" : "450",
        "data4" : "310",
        "data5" : "250",
    },
    {
        "city" : "Barcelona",
        "data1" : "230",
        "data2" : "480",
        "data3" : "290",
        "data4" : "510",
    },
    {
        "city" : "Sevilla",
        "data1" : "670",
        "data3" : "560",
        "data4" : "320"
    }
];

let dataAverage = dataSet.map(({city, ...dayData}) => {
    let totalDayData = 0;
    Object.values(dayData).forEach( value => totalDayData += Number(value));
    return {
        city,
        averageData: Number((totalDayData / Object.values(dayData).length).toFixed(2))
    }
});

console.log(dataAverage);


// ** filter() **

let alumnos = [
    {name: 'María',     surname: 'Zull',    points: 4.6},
    {name: 'Juan',      surname: 'Zull',    points: 7},
    {name: 'Laura',     surname: 'Zull',    points: 3.6},
    {name: 'Carlos',    surname: 'Zull',    points: 6.7},
];

const notPassedAlumns = alumnos.filter( (alumno) => {
    return alumno.points < 5;
    
})

console.log(notPassedAlumns);








