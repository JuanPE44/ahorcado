class Jugador {
    constructor(clase,color) {
        this.clase = clase;
        this.color = color;
        this.errores = 0;
        this.elemento = `<span>${clase}</span>`
    }
}