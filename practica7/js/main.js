// ** POO antes de ECMAScript 2015 **
// * Literal *

let player1 = {
    name: 'Sergio',
    surname: 'Ramos',
    teams: ['Sevilla','Real Madrid','Paris Saint Germain'],
    goals: 0,
    setGoals() {
        this.goals++;
    }
};

console.log(player1.name);
player1.surname = 'Ramos Fernández';
console.log(player1.surname);


// * Función literal new (constructura) *

function Player(name,surname,goals) {
    this.name = name;
    this.surname = surname;
    this.goals = goals;

    this.setGoals = function () {
        this.goals++;
    }
}

const player2 = new Player('Cristiano','Ronaldo',10);

console.log(player2);


// * Estandarización para desarrolladores con class  y Herencia *

class Team {
    nameTeam;
    cityTeam;

    constructor(nameTeam,cityTeam){
        this.nameTeam = nameTeam;
        this.cityTeam = cityTeam;
    }

    getNameTeam(){
        return this.nameTeam;
    }
}

const team1 = new Team('Atlético de Madrid','Madrid');

console.log(team1);



class Player1 extends Team {
    name;
    surname;
    age;
    role;
    goals;
    datos;

    constructor(nameTeam,cityTeam,name,surname,age,role,goals){
        super(nameTeam,cityTeam);
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.role = role;
        this.goals = goals;
        this.datos = `
            Name: ${this.name},
            Surname: ${this.surname},
            Age: ${this.age},
            Team: ${this.nameTeam},
            Role: ${this.role},
            City: ${this.cityTeam},
            Goals: ${this.goals}
            `;
    }
}

const player3  = new Player1('F.C. Barcelona','Barcelona','Lamine','Yamal',17,'Extremo',8);

console.log(player3.datos);



















