var miventana=null;
let x=0;
let y=0;
let colores=["rojo","naranja","amarillo","verde","azul","morado"];
//la primera ventana//

const abrir=()=>{

    miventana=open("","_blank","toolbar=no,scrollbars=no,resizable=no,width=500,height=200");

    miventana.document.write('<h1 id="texto">Este es el texto que cambiara de color</h1>');
    //botones del popup//
    //colores//
    for (const color in colores) {
        miventana.document.write(`<button id="${colores[color]}">${colores[color]}</button>`);
    };
    //cerrar//
    miventana.document.write('<button id="closePop">cerrar</button>');
    //movimiento//
    miventana.document.write('<button id="moveToUp">UP</button>');
    miventana.document.write('<button id="moveToDow">DOW</button>');
    miventana.document.write('<button id="moveToRig">RIGTH</button>');
    miventana.document.write('<button id="moveToLeft">LEFT</button>');
    
    //eventos del pop up//
    miventana.document.getElementById("rojo").addEventListener("click", rojo);
    miventana.document.getElementById("naranja").addEventListener("click", naranja);
    miventana.document.getElementById("amarillo").addEventListener("click", amarillo);
    miventana.document.getElementById("verde").addEventListener("click", verde);
    miventana.document.getElementById("azul").addEventListener("click", azul);
    miventana.document.getElementById("morado").addEventListener("click", morado);

    miventana.document.getElementById("closePop").addEventListener("click", closePop);

    miventana.document.getElementById("moveToUp").addEventListener("click", moveToUP);
    miventana.document.getElementById("moveToDow").addEventListener("click",moveToDow);
    miventana.document.getElementById("moveToRig").addEventListener("click",moveToRig);
    miventana.document.getElementById("moveToLeft").addEventListener("click",moveToLeft);
    
 };
const cerrar=()=>{
    miventana.close();
};
const imprimir=()=>{
    print();
}; 



// el popup//
const rojo=()=>{

    miventana.document.getElementById("texto").style.color="red";
};
const naranja=()=>{

    miventana.document.getElementById("texto").style.color="orange";
};
const amarillo=()=>{

    miventana.document.getElementById("texto").style.color="yellow";
};
const verde=()=>{

    miventana.document.getElementById("texto").style.color="green";
};
const azul=()=>{

    miventana.document.getElementById("texto").style.color="blue";
};
const morado=()=>{

    miventana.document.getElementById("texto").style.color="purple";
};

const closePop=()=>{
    miventana.close();
}

const moveToUP = () => {
    y = y - 10;

    if (y > 0) {
        miventana.moveBy(0, (-1)*y);
    } else {
        miventana.alert("No podemos ir más arriba");
    }
};

const moveToDow = () => {
    y = y + 10;

    if (y < window.outerHeight) {

        miventana.moveBy(0, y);
    } else {
        miventana.alert("No podemos ir más abajo");
    }
};

const moveToRig=()=>{
    x=x+10;
    if(x< window.outerWidth){

        miventana.moveBy(x,0);

    }else{
        miventana.alert("No nos podemos salir ");
    }
}
const moveToLeft=()=>{
    x=x-10;
    if(x>0){
        miventana.moveBy((-1)*x,0);
    }else{
        miventana.alert("No nos podemos salir ");
    }
}
//events windows//////
document.getElementById("abrir").addEventListener("click", abrir);
document.getElementById("cerrar").addEventListener("click", cerrar);
document.getElementById("imprimir").addEventListener("click", imprimir);

