sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`Nombre: ${this.nombre}, fuerza: ${this.fuerza}, velocidad: ${this.velocidad}, salud: ${this.salud}`)
    }
    drinkSake() {
        this.salud += 10
    }