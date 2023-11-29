//array con las rutas que representan las imagenes//
let rutas = [
  "./img/pocahontas.png",
  "./img/ariel.png",
  "./img/sirenita.png",
  "./img/jasmine.png",
  "./img/cuasimodo.png",
  "./img/pocahontas.png",
  "./img/ariel.png",
  "./img/sirenita.png",
  "./img/jasmine.png",
  "./img/cuasimodo.png"
];
//mapa para poder guardar dos valores, 1- el elemento que se ha pulsado 2- la ruta que contiene
let cartasPulsadas = new Map();
let puntos = 0;
// funcion que muestra las reglas e inicializa todos los elementos con la imagen de carta del reves//
const iniciarJuego = () => {
    document.getElementById("comenzar").style.display = 'none';
    document.getElementById("descripcion").innerHTML = 'Ve levantando cada una de las cartas. Encuentra la pareja adecuada para cada uno de nuestros personajes. Ya sabes, la mejor compañía es uno mismo<br>' +
                    'Las normas son: <br> -Cada pareja encontrada suma dos puntos. -Cuando tengas 10 puntos, habrás ganado la partida';
    document.getElementById("puntos").innerHTML = `PUNTOS: ${puntos}`;

    for (let i = 0; i < 10; i++) {
        document.getElementById(i).setAttribute("src", "./img/carta.png");
    }
};
//funcion que comprueba si dos cartas tienen la misma ruta, para saber si son iguales
const comprobarIguales = (carta1, carta2) => {

    //si no son iguales, se vuelve a colocar la imagen de carta del reves al cabo de un minuto
    if (carta1.src !== carta2.src) {
        setTimeout(() => {
            carta1.setAttribute("src", "./img/carta.png");
            carta2.setAttribute("src", "./img/carta.png");
        }, 1000);
    // si son iguales...
    } else {
        puntos += 2;//sumamos dos puntos
        document.getElementById("puntos").innerHTML = `PUNTOS: ${puntos}`;//imprimimos el nuevo valor de los punts

        carta1.removeEventListener("click", girarCarta);//eliminamos el evento que hace reaccionar a esas dos cartas para que si las pinchan de nuevo el juego no las tenga en cuenta
        carta2.removeEventListener("click", girarCarta);

        if (puntos === 10) {//comprobamos si esa ultima pulsacion ha sido la que ha ocasionado la victoria
            // si se obtiene la victoria, si los puntos son 10 ....2*5=10
                document.getElementById("comenzar").style.display='none'; //ocultamos todos los elementos 
                document.getElementById("descripcion").style.display='none';
                document.getElementById("puntos").style.display='none';
            
                for(let i=0;i<10;i++){
                    document.getElementById(i).style.display="none";
                }
                //sacamos por el navegador la informacion de vistoria
                document.write('<h1 style="margin: 30px; font-family: Haettenschweiler;font-size: 3.5em;"">ENHORABUENA, A PARTIR DE AHORA TE APODAS: "EL MEMORION"</h1>');
                document.write('<img src="./img/memorion.jpg" id="memorion" ' +
            'style="height: 300px; margin-left: 50px;">');
        
        };
        };
    
        //limpiamos el mapa, para que si no son iguales, esté a 0 para la nueva comprovacion
    cartasPulsadas.clear();
};
//funciona que gira las cartas
function girarCarta(event) {
    //traemos el elemento
    let carta = event.target;
// si la carta tiene la imagen del reves
    if (carta.getAttribute("src") === "./img/carta.png" && cartasPulsadas.size < 2) {
        //le asignamos la ruta que le corresponde
        carta.setAttribute("src", rutas[carta.id]);
        //añadimos la carta y la ruta al mapa
        cartasPulsadas.set(carta.id, carta);
        //en el caso de que sea la segunda carta de la pareja la que pulsamos, despues de girarla
        if (cartasPulsadas.size === 2) {
            //comprobamos si son iguales
            const cartas = Array.from(cartasPulsadas.values());
            comprobarIguales(cartas[0], cartas[1]);
        }
    }
}



// evento que reaaciona al boton comenzar
document.getElementById("comenzar").addEventListener("click", iniciarJuego);

//las Id de las cartas van del 0 al 9, itero sobre esos valores usando i como atributo de las cartas para asignarle el evento.
for (let i = 0; i < 10; i++) {
    document.getElementById(i).addEventListener("click", girarCarta);
};
