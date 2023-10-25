/**
 * Crea un buen prototipo para almacenar información de Sandkills. Los objetos de este tipo 
tendrán la siguiente información: 
• Nombre. 
• Edad. 
• Especialidad: almacenará un número (1, 2, 3). 
• Compañero: almacenará un objeto de tipo Sandkill. 
Además dispondrá de los siguientes métodos: 
• mostrar: devuelve una cadena con la información del Sandkill nombre, edad, 
especialidad y nombre del compañero. ¡Ojo! Para mostrar esta información 
utilizarás los métodos get de cada propiedad. 
• getNombre: devuelve el nombre del sandkill. 
• getEdad: devuelve la edad del sandkill. 
• getEspecialidad: devuelve una cadena con la especialidad a partir del número 
indicado. Si es 1, devuelve Sistemas; si es 2 devuelve Web; si es 3 devuelve 
Multiplataforma. 
• getNombreCompanero: devuelve una cadena con el nombre del compañero 
(getNombre). 
• getCompanero: devuelve un objeto de tipo Sandkill. 
• setNombre: modifica el nombre del sandkill. 
• setEdad: modifica la edad del sandkill. 
• setEspecialidad: modifica la especialidad del sandkill (recibe un número). 
• setEspecialidadNombre: recibe una cadena y almacena un número en función de si 
la cadena recibida es Sistemas (1), Web (2) o Multiplataforma(3). 
• setCompanero: recibe un objeto de tipo Sandkill y lo almacena. 
 */

export default class Sandkill{
    constructor(nombre,edad,especialidad,companero){
        this.nombre=nombre;
        this.edad=edad;
        this.especialidad= /1|2|3/.test(especialidad) ? especialidad : 1 ;
        this.companero=companero instanceof Sandkill ? companero : null ;
    };
    /////////////////////////getters////////////////////////
    getNombre(){
        return this.nombre;
    };
    getEdad(){
        return this.edad;
    };
    getEspecialidad(){

        if(this.especialidad==1){
            return "Sistemas";
        }else if(this.especialidad==2){
            return "Web";
        }else if(this.especialidad==3){
            return "Multiplataforma";
        };
        
    };
    getCompanero(){
        return this.companero;
    };
    ////////////////////////////////////getters//////////////////////////
    setNombre(nombre){
        this.nombre=nombre;
    };
    setEdad(edad){
        this.edad=edad;
    };
    setEspecialidad(especialidad){
        this.especialidad= /1|2|3/.test(especialidad) ? especialidad : 1 ;
    };
    
    setCompanero(companero){
        this.companero=companero instanceof Sandkill ? companero : null ;
    };

    /////////////////////////////////toString///////////////////////////////
    toString(){

        let cadena="";
         return cadena+=`nombre: ${this.getNombre()}, edad: ${this.getEdad()}, especialidad: ${this.getEspecialidad()}, companero= ${this.getCompanero()} .`;
    };
    ////////////////////////////////////propios//////////////////////////////
    getNombreCompaner(){

        return this.companero.getNombre();
    };

    setEspecialidadNombre(nombre){

        if(nombre==="sistemas"){
            this.setEspecialidad(1);
        }else if(nombre==="web"){
            this.setEspecialidad(2);
        }else if(nombre==="multiplataforma"){
            this.setEspecialidad(3);
        };
    };
};

let sand1=new Sandkill("silvia",31,"1",new Sandkill("francisco",26,2,null));
let sand2=sand1.getCompanero();
sand2.setCompanero(new Sandkill("angel",23,3,null));


console.log(sand1);
console.log(sand2);
console.log(sand1.toString());

sand1.setEspecialidad(4);
console.log(sand1);
