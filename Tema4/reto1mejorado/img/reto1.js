let audio = document.getElementById("audio");
let cartas=["img0","img1","img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"];

let rutas=["./img/pocahontas.png",
            "./img/ariel.png",
            "./img/sirenita.png",
            "./img/jasmine.png",
            "./img/cuasimodo.png",
            "./img/pocahontas.png",
            "./img/ariel.png",
            "./img/sirenita.png",
            "./img/jasmine.png",
            "./img/cuasimodo.png"];

let cartasPulsadas=new Map();

const iniciarJuego=()=>{
    comenzar.style.display='none';
    descripcion.innerHTML='Ve levantando cada una de las cartas. Encuentra la pareja adecuada para cada uno de nuestros personajes. Ya sabes, la mejor compañia es uno mismo<br>'+
                    'Las normas son: <br> -Cada pareja encontrada suma dos puntos. -Cuando tengas 10 puntos, habrás ganado la partida';
    puntos.innerHTML=`${contador} puntos.`;

    audio.play();

    cartas.forEach(element => {
        element.setAttribute("src","./img/carta.png");
    });

};

function girarCarta(event){
    let carta=event.target.id();

    if(cartasPulsadas.length<1){
        if(carta.getAttribute()==="./img/carta.png"){
            carta.setAttribute("src",rutas[0]);
            rutas.unshift();
        }
        

    }

    


};

for(let i=0;i<cartas.length;i++){
    document.getElementById(cartas[i]).addEventListener("click", function(event){girarCarta()});
}