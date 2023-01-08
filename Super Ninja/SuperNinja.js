class ninja {
    constructor(nombre, salud = 0, velocidad = 3, fuerza = 3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log(this.nombre);
    }
    showStats() {
        return(`Nombre: ${this.nombre}, fuerza: ${this.fuerza}, velocidad: ${this.velocidad}, salud: ${this.salud}`);
    }
    drinkSake() {
        this.salud += 10;
    }
}

//HERENCIA DE ATRIBUTOS 
//Con "Super" tenemos acceso a los atributos de la clase padre, en este caso de ninja

class Sensei extends ninja{
    constructor(nombre, salud, velocidad, fuerza, sabiduría){  //aquí pude haber tenido menos cod pero aun así llegamos al resultado deseado jiji
        super(nombre, salud, velocidad, fuerza);
        this.sabiduría = sabiduría;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }


}


const ninja1 = new ninja("Ninja");
ninja1.sayName();
ninja1.drinkSake();
console.log(ninja1.showStats()); 

const superSensei = new Sensei("Master Splinter", salud=200, velocidad=10, fuerza=10, sabiduría = 10);
console.log(superSensei);
superSensei.speakWisdom();
superSensei.drinkSake();
superSensei.showStats()

// Humilde :) y honesto 