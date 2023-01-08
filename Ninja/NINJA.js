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

const ninja1 = new ninja("Ninja");
ninja1.sayName();
ninja1.drinkSake();
console.log(ninja1.showStats()); 



