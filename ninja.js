class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log('El nombre del Ninja es '+ this.nombre);
    }
    showStats(){
        console.log('Nombre: '+ this.nombre);
        console.log('Stats: ');
        console.log('Salud= ' + this.salud + ' - Velocidad= ' + this.velocidad + ' - Salud= ' + this.salud);
    }
    drinkSake(){
        this.salud+=10;
        console.log(this.ninjaName + ' has increased their health by 10 points. Current health is '+ this.ninjaHealth);
    }
}


