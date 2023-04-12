class Juego {
  constructor() {
    this.palabraActual = "";
    this.jugadorActual = jugador1;
    this.contadorLetras = 0;
  }

  iniciar() {
    const inputInicio = document.querySelector(".inicio-input");
    const divPalabra = document.querySelector(".palabra");
    divInicio.style.display = "none";
    divJuego.style.display = "flex";
    this.palabraActual = inputInicio.value;
    for (let i = 0; i < this.palabraActual.length; i++) {
      divPalabra.innerHTML += `<span>_</span>`;
    }
    rellenarLetras();

    this.jugadorActual === jugador1
      ? (this.jugadorActual = jugador2)
      : (this.jugadorActual = jugador1);
    this.pintarPuntaje();
  }

  comprobarLetra(letra) {
    const spansPalabras = document.querySelectorAll(".palabra span");
    let letraCorrecta = false;
    for (let i = 0; i < this.palabraActual.length; i++) {
      if (this.palabraActual[i] === letra) {
        spansPalabras[i].innerHTML = letra;
        letraCorrecta = true;
        this.contadorLetras++;
      }
    }
    if (!letraCorrecta) {
      this.pintarErrores(letra);
      this.pintarPuntaje();
    }
  }

  pintarErrores(letra) {
    const divErrores = document.querySelector(".errores");
    divErrores.innerHTML += `<span>${letra} </span>`;
    this.jugadorActual.errores++;
    this.jugadorActual.puntaje++;
    console.log(this.jugadorActual.clase);
    this.pintarAhorcado();
  }

  pintarPuntaje() {
    document.querySelector(".jugador-J1 span").innerHTML = jugador1.puntaje;
    document.querySelector(".jugador-J2 span").innerHTML = jugador2.puntaje;
    document.querySelector(
      ".app"
    ).style.borderBottom = `5px solid ${this.jugadorActual.color}`;
    const jugador = document.querySelector(".jugadorActual");
    jugador.innerHTML = this.jugadorActual.txt;
    jugador.style.color = `${this.jugadorActual.color}`;
  }

  pintarAhorcado() {
    switch (this.jugadorActual.errores) {
      case 1:
        this.parteDelCuerpo(".cabeza").style.visibility = "visible";
        break;
      case 2:
        this.parteDelCuerpo(".cuerpo").style.visibility = "visible";
        break;
      case 3:
        this.parteDelCuerpo(".mano-i").style.visibility = "visible";
        break;
      case 4:
        this.parteDelCuerpo(".mano-d").style.visibility = "visible";
        break;
      case 5:
        this.parteDelCuerpo(".pierna-i").style.visibility = "visible";
        break;
      case 6:
        this.parteDelCuerpo(".pierna-d").style.visibility = "visible";
        break;
    }
  }

  despintarAhorcado() {
    this.parteDelCuerpo(".cabeza").style.visibility = "hidden";
    this.parteDelCuerpo(".cuerpo").style.visibility = "hidden";
    this.parteDelCuerpo(".mano-i").style.visibility = "hidden";
    this.parteDelCuerpo(".mano-d").style.visibility = "hidden";
    this.parteDelCuerpo(".pierna-i").style.visibility = "hidden";
    this.parteDelCuerpo(".pierna-d").style.visibility = "hidden";
  }

  parteDelCuerpo(parteClase) {
    return document.querySelector(
      `.jugador-${this.jugadorActual.clase} ${parteClase}`
    );
  }

  comprobarGano() {
    if (this.palabraActual.length === this.contadorLetras) {
      console.log("gano");
      const divGano = document.querySelector(".contenedor-gano");
      document.querySelector(".contenedor-gano .span-palabra").innerHTML =
        this.palabraActual;
      setTimeout(() => {
        divGano.style.display = "flex";
      }, 1000);
    }
  }

  comprobarPerdio() {
    if (this.jugadorActual.errores === 6) {
      console.log("perdio");
      const divPerdio = document.querySelector(".contenedor-perdio");
      document.querySelector(".contenedor-perdio .span-palabra").innerHTML =
        this.palabraActual;
      setTimeout(() => {
        divPerdio.style.display = "flex";
      }, 1000);
    }
  }

  continuar() {
    const inputInicio = document.querySelector(".inicio-input");
    const divPalabra = document.querySelector(".palabra");
    this.despintarAhorcado();
    this.palabraActual = "";
    this.contadorLetras = 0;
    this.jugadorActual.errores = 0;
    document.querySelector(".contenedor-perdio").style.display = "none";
    document.querySelector(".contenedor-gano").style.display = "none";
    document.querySelector(".letras").innerHTML = "";
    document.querySelectorAll(".errores span").forEach((span) => {
      span.innerHTML = "";
    });
    divInicio.style.display = "flex";
    divJuego.style.display = "none";
    inputInicio.value = "";
    divPalabra.innerHTML = "";
  }
}
