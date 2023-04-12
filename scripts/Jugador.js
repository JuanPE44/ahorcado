class Jugador {
  constructor(clase, color, txt) {
    this.clase = clase;
    this.color = color;
    this.errores = 0;
    this.elemento = `<span>${clase}</span>`;
    this.txt = txt;
    this.puntaje = 0;
  }
}
