class Letra {
  constructor(letra) {
    this.letra = letra;
    this.usada = false;
  }

  divLetra() {
    const letra = document.createElement('div');
    letra.innerHTML = this.letra;
    letra.classList.add('letra');
    letra.addEventListener('click',()=> {
      this.usada = true;
      letra.classList.add('letra-usada');
      j.comprobarLetra(this.letra);
      j.comprobarGano();
      j.comprobarPerdio();
    })
    return letra;
  }
}