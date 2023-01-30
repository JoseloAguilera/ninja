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

class Sensei extends Ninja {
    constructor(nombre){
        super(nombre);
        this.salud = 210;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.');
    }

}
    
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

