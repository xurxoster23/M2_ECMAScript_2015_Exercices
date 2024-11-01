// ** Funciones callback **

const login = (name, printMessage) => {
    printMessage(name);
};

login('Laura', (name) => {
    console.log('Hola '+ name);
    
})

login('Laura', (name) => {
    console.log('Hello ' + name);
    
})

// ** Función callback asíncrona **
const login1 = (name1, printMessage) => {
    setTimeout(() => {
        printMessage(name1);
    }, 2000);
    console.log('Tarea 2 ejecutada');
}

login1('Jorge', (name1) => {
    console.log('Hello ' + name1);
    
})


// ** PROMISES **

const users = ['Andrea','Jorge','Unax','Thiago'];

let getUser = (position,seconds) => {
    return new Promise((resolve,reject) => {
        if (position < 0 || position >= users.length) {
            reject(
                {
                    mensaje: 'Posición incorrecta'
                }
            )
        }
        setTimeout(()=>{
            resolve(
                {
                    user: users[position]
                }
            )
        },seconds * 1000)
    })
}

getUser(0,3) // 2 array[position], return callback in seconds
    .then((data)=>{
        console.log(data);
        return data.user
    })
    .then((data)=>{
        console.log('Hola ' + data);
    })
    .catch((error)=>{
        console.error(error);
    })