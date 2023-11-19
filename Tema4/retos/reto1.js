let audio = document.getElementById("audio");

let cartas=[document.getElementById("img0"),
            document.getElementById("img1"),
            document.getElementById("img2"), 
            document.getElementById("img3"), 
            document.getElementById("img4"), 
            document.getElementById("img5"), 
            document.getElementById("img6"), 
            document.getElementById("img7"), 
            document.getElementById("img8"), 
            document.getElementById("img9")];

let rutas=["/img/pocahontas.png","/img/ariel.png","/img/sirenita.png","/img/jasmine.png","/img/cuasimodo.png",
"/img/pocahontas.png","/img/ariel.png","/img/sirenita.png","/img/jasmine.png","/img/cuasimodo.png"];
rutas = shuffleArray(rutas);
let comenzar=document.getElementById("comenzar");
let descripcion=document.getElementById("descripcion");
let puntos=document.getElementById("puntos")
let contador=0;
let imagenPulsada='';
let pulsaciones=new Map();

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const iniciarJuego=()=>{
    comenzar.style.display='none';
    descripcion.innerHTML='Ve levantando cada una de las cartas. Encuentra la pareja adecuada para cada uno de nuestros personajes. Ya sabes, la mejor compañia es uno mismo<br>'+
                    'Las normas son: <br> -Cada pareja encontrada suma dos puntos. -Cuando tengas 10 puntos, habrás ganado la partida';
    puntos.innerHTML=`${contador} puntos.`;

    audio.play();

    cartas.forEach(element => {
        element.setAttribute("src","/img/carta.png");
    });

};
const compruebaIguales=()=>{
    
        if (pulsaciones.size === 2) {
            const values = Array.from(pulsaciones.values());
            if (values[0] !== values[1]) {
                const keys = Array.from(pulsaciones.keys());
                setTimeout(() => {
                    keys.forEach(element => {
                        element.setAttribute("src", "/img/carta.png");
                    });
                }, 1000);
            } else {
                contador += 2;
                puntos.innerHTML='PUNTOS: '+contador;
            }
    
            // Limpiar el mapa después de comprobar las cartas
            pulsaciones.clear();
    
        }
    
    
};
const compruebaVictoria=()=>{
    if(contador==10){
        comenzar.style.display='none';
        descripcion.style.display='none';
        puntos.style.display='none';
    
        cartas.forEach(element => {
            element.style.display='none';
        });
        document.write('<h1 style="margin: 30px; font-family: Haettenschweiler;font-size: 3.5em;"">ENHORABUENA, A PARTIR DE AHORA TE APODAS: "EL MEMORION"</h1>');
        document.write('<img src="/img/memorion.jpg" id="memorion" ' +
    'style="height: 300px; margin-left: 50px;">');

    };
};
const cartaCero=()=>{
    if(pulsaciones.size<1){
        cartas[0].setAttribute("src",`${rutas[0]}`);
        pulsaciones.set(cartas[0],rutas[0]);
    }else{
        cartas[0].setAttribute("src",`${rutas[0]}`);
        pulsaciones.set(cartas[0],rutas[0]);
        compruebaIguales();
        compruebaVictoria();
    };
};    

const cartaUno=()=>{
    if(pulsaciones.size<1){
        cartas[1].setAttribute("src",`${rutas[1]}`);
        pulsaciones.set(cartas[1],rutas[1]);
    }else{
        cartas[1].setAttribute("src",`${rutas[1]}`);
        pulsaciones.set(cartas[1],rutas[1]);
        compruebaIguales();
        compruebaVictoria();
    };
}; 
const cartaDos=()=>{
    if(pulsaciones.size<1){
        cartas[2].setAttribute("src",`${rutas[2]}`);
        pulsaciones.set(cartas[2],rutas[2]);
    }else{
        cartas[2].setAttribute("src",`${rutas[2]}`);
        pulsaciones.set(cartas[2],rutas[2]);
        compruebaIguales();
        compruebaVictoria();
    };
};
const cartaTres=()=>{
    if(pulsaciones.size<1){
        cartas[3].setAttribute("src",`${rutas[3]}`);
        pulsaciones.set(cartas[3],rutas[3]);
    }else{
        cartas[3].setAttribute("src",`${rutas[3]}`);
        pulsaciones.set(cartas[3],rutas[3]);
        compruebaIguales();
        compruebaVictoria();
    };
};   
const cartaCuatro=()=>{
    if(pulsaciones.size<1){
        cartas[4].setAttribute("src",`${rutas[4]}`);
        pulsaciones.set(cartas[4],rutas[4]);
    }else{
        cartas[4].setAttribute("src",`${rutas[4]}`);
        pulsaciones.set(cartas[4],rutas[4]);
        compruebaIguales();
        compruebaVictoria();
    };
};            
const cartaCinco=()=>{
    if(pulsaciones.size<1){
        cartas[5].setAttribute("src",`${rutas[5]}`);
        pulsaciones.set(cartas[5],rutas[5]);
    }else{
        cartas[5].setAttribute("src",`${rutas[5]}`);
        pulsaciones.set(cartas[5],rutas[5]);
        compruebaIguales();
        compruebaVictoria();
    };
};
const cartaSeis=()=>{
    if(pulsaciones.size<1){
        cartas[6].setAttribute("src",`${rutas[6]}`);
        pulsaciones.set(cartas[6],rutas[6]);
    }else{
        cartas[6].setAttribute("src",`${rutas[6]}`);
        pulsaciones.set(cartas[6],rutas[6]);
        compruebaIguales();
        compruebaVictoria();
    };
};        
const cartaSiete=()=>{
    if(pulsaciones.size<1){
        cartas[7].setAttribute("src",`${rutas[7]}`);
        pulsaciones.set(cartas[7],rutas[7]);
    }else{
        cartas[7].setAttribute("src",`${rutas[7]}`);
        pulsaciones.set(cartas[7],rutas[7]);
        compruebaIguales();
        compruebaVictoria();
    };
}; 
const cartaOcho=()=>{
    if(pulsaciones.size<1){
        cartas[8].setAttribute("src",`${rutas[8]}`);
        pulsaciones.set(cartas[8],rutas[8]);
    }else{
        cartas[8].setAttribute("src",`${rutas[8]}`);
        pulsaciones.set(cartas[8],rutas[8]);
        compruebaIguales();
        compruebaVictoria();
    };
};
const cartaNueve=()=>{
    if(pulsaciones.size<1){
        cartas[9].setAttribute("src",`${rutas[9]}`);
        pulsaciones.set(cartas[9],rutas[9]);
    }else{
        cartas[9].setAttribute("src",`${rutas[9]}`);
        pulsaciones.set(cartas[9],rutas[9]);
        compruebaIguales();
        compruebaVictoria();
    };
};           
comenzar.addEventListener("click",iniciarJuego);
cartas[0].addEventListener("click",cartaCero);
cartas[1].addEventListener("click",cartaUno);
cartas[2].addEventListener("click",cartaDos);
cartas[3].addEventListener("click",cartaTres);
cartas[4].addEventListener("click",cartaCuatro);
cartas[5].addEventListener("click",cartaCinco);
cartas[6].addEventListener("click",cartaSeis);
cartas[7].addEventListener("click",cartaSiete);
cartas[8].addEventListener("click",cartaOcho);
cartas[9].addEventListener("click",cartaNueve);