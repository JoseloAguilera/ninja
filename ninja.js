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
        console.log('Salud= ' + this.salud + ' - Velocidad= ' + this.velocidad + ' - Fuerza= ' + this.salud);
    }
    drinkSake(){
        this.salud+=10;
    }
}


