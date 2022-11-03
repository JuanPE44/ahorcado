
const abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const divInicio = document.querySelector('.app-inicio');
const divJuego = document.querySelector('.app-juego');
const botonEmpezar = document.querySelector('.inicio-boton');

const jugador1Color = '#5ec96c';
const jugador2Color = '#5eb9c9';


function rellenarLetras() {
  const letras = document.querySelector('.letras');
  const fragmento = document.createDocumentFragment();
  abecedario.forEach(letra => {
    const l = new Letra(letra);
    let divLetra = l.divLetra()
    fragmento.appendChild(divLetra);
  })
  letras.appendChild(fragmento);
}

const jugador1 = new Jugador('J1',jugador1Color, 'player 1');
const jugador2 = new Jugador('J2',jugador2Color, 'player 2');
const j = new Juego();

j.pintarPuntaje();


botonEmpezar.addEventListener('click', (e)=> {
  e.preventDefault();
  j.iniciar();
})

document.querySelectorAll('.btn-continuar').forEach(btn => {
  btn.addEventListener('click', ()=> {
    j.continuar();
  })
})

