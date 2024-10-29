// ** Antes del ECMAScript 2015
/*
const user1 = {
    name : 'Juan',
    surname : 'Pérez López',
    address : {
        street : 'Príncipe de Vergara, 10',
        city : 'Madrid'
    }
};

const user2 = {
    name : 'Laura',
    surname : 'Nadal Novo'
};

let city1 = user1.address.city;
console.log(city1); // Obtenemos Madrid
let city2 = user2.address.city;
console.log(city2); // Error porque no está definido el address dentro del Objeto user2
*/
// ** Channig Operator
const user1 = {
    name : 'Juan',
    surname : 'Pérez López',
    address : {
        street : 'Príncipe de Vergara, 10',
        city : 'Madrid'
    }
};

const user2 = {
    name : 'Laura',
    surname : 'Nadal Novo'
};

let city1 = user1.address?.city;
console.log(city1); // Obtenemos Madrid
let city2 = user2.address?.city;
console.log(city2); // Ahora obtenemos por consola un resultado de undefined ya que el parámtro address para user2 no existe

// ** Nullish coalescence operator
let user;
let txtBtn = user ?? 'Inicie sesión';

console.log(txtBtn); // Inicie Sesión


// ** Proxies en Javascript 
let product = {
    code : '',
    description : '',
    stock : 0,
    // store : ''
}

const handlerProduct = {
    set(obj,prop,value){
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error('Propiedad inexistente');
        }
        if ( prop === 'code' && typeof value !== 'string') {
            return console.error('Code debe ser string');
        }
        if (prop === 'stock' && typeof value !== 'number') {
            return console.error('stock debe ser un número');
        }
        obj[prop] = value;
    }
}

const validProduct = new Proxy(product, handlerProduct);

validProduct.code = 'A123';
validProduct.description = 'Nike zapatillas Gold/White';
validProduct.stock = 10;
// validProduct.store = 'a1';

console.log(product);


// ** DESESTRUCTURING ** 

// * ARRAYS *
let values = [10,20,30,40,50];

let [value1,value2,value3, ...restValues] = values;

console.log(value1);
value1 = 15;
console.log(values);
console.log(value2);
console.log(value3);
console.log(restValues);
restValues[0] = 45;
console.log(values);

let userDesestructuring = {
    name : 'Pilar',
    surname : 'Fernández López',
    age : 40
}

let {surname, age} = userDesestructuring;

console.log(surname);
surname = 'García';
console.log(age);
console.log(userDesestructuring);















