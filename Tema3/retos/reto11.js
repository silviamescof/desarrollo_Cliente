/**
 * Crea tres objetos que te permitan almacenar información de sandkills. Deberás realizarlos
de la siguiente manera.
– sandkill1: creado como un literal.
– sandkill2: creado con la definición de Object (utilizando new).
– sandkill3: primero crearás un constructor de objeto llamado Sandkill y a partir de él
te crearás el objeto sandkill3.
Los tres objetos tendrán las mismas propiedades: nombre, edad, especialidad. Y un método
.mostrar() que devuelva una cadena con la información de cada sandkill en una sola línea.
Posteriormente añade a sandkill1 la propiedad «nacionalidad» y a sandkill2 la propiedad
«lenguajeFavorito». Por último, borra de sandkill3 la propiedad «especialidad».
Crea una función que, pasado un objeto de tipo Sandkill, muestre todas sus propiedades,
pero sin llamar a su método mostrar. Llama a la función tres veces para mostrar la
información de los tres objetos creados.
DESARROLLO WEB EN ENTORNO CLIENTE UD03. OBJETOS PREDEFINIDOS DEL LENGUAJE - RETOS
CFGS. DESARROLLO DE APLICACIONES WEB UD01 - PÁGINA 4
Modifica en sandkill1 el nombre, en sandkill2 el lenguajeFavorito y en sandkill3 la edad.
Vuelve a llamar a la función de mostrar las propiedades de los tres objetos.
 */
const mostrar=(sandkill)=>{
    let cadena="";
     for(propiedad in sandkill){
        cadena+=`  ${propiedad} = ${sandkill[propiedad]}  `;
     } 
     return cadena;
};

const Sandkill1={
    nombre:"Silvia",
    edad:32,
    especialidad:"programadora",
    nacionalidad:"checa"  
};
const Sandkill2=new Object();
Sandkill2.nombre= "Francisco";
Sandkill2.edad=25;
Sandkill2.especialidad= "developer";
Sandkill2.lenguajeFavorito="Javascript";

class Sandkill{
    constructor(nombre,edad,especialidad){
        this.nombre=nombre
        this.edad=edad
    };
};

const Sandkill3=new Sandkill("angel",23,"backend");

console.log(mostrar(Sandkill1));
console.log(mostrar(Sandkill2));
console.log(mostrar(Sandkill3));
