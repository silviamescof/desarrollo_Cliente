class Sandkill{
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

/////////////////////////////////ejercicio13////////////////////


let sandskills=[];

sandskills.unshift({nombre:"silvia",edad:31,especialidad:1,companero:null});
console.log(sandskills);
sandskills.push({nombre:"Isaac",edad:40,especialidad:40,companero:sandskills[0]});
console.log(sandskills);
sandskills.shift();
console.log(sandskills);
sandskills.pop();
console.log(sandskills);

sandskills.unshift({nombre:"silvia",edad:31,especialidad:1,companero:null});
sandskills.push({nombre:"Isaac",edad:40,especialidad:40,companero:sandskills[0]});

sandskills.sort();
console.log(sandskills);
let nombre="silvia";
let sandkillBuscado = sandskills.find( a =>a.nombre==nombre);
console.log(sandkillBuscado);

let posicion=1;
console.log(sandskills[1]);