/**
 * El siguiente programa necesitará dos archivos en javascript. El primero contendrá el
prototipo Sandkill creado en el ejercicio anterior. El segundo permitirá trabajar con arrays
de cualquier tipo de dato.
Diseña un programa que permita realizas las siguientes operaciones:
• Insertar un sandkill en una lista al principio.
• Insertar un sandkill en una lista al final.
• Borrar el primer sandkill de la lista.
• Borrar el último sandkill de la lista.
• Mostrar la lista de sandkills.
DESARROLLO WEB EN ENTORNO CLIENTE UD03. OBJETOS PREDEFINIDOS DEL LENGUAJE - RETOS
CFGS. DESARROLLO DE APLICACIONES WEB UD01 - PÁGINA 5
• Mostrar la lista de sandkills ordenada.
• Buscar un sandkill a partir de su nombre.
• Buscar un sandkill a partir de su posición.
Hazlo de tal manera que puedas reutilizar el archivo de gestión de arrays y te funcione con
cualquier tipo de objeto que crees.
 */

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
class ControllerSandkill{
    constructor(){

        this.array=[];
    };


insertaPrincipio=(sandkill)=>{
    this.array.unshift(sandkill);
};

insertaFinal=(sandkill)=>{
    this.array.push(sandkill);
};
eliminaPrimero=()=>{
    return this.array.shift();
};
eliminaUltimo=()=>{
    return this.array.pop();
};
verSandkills=()=>{
    this.array.forEach((value,index) => console.log(value));
};
mostrarOrdenada=()=>{
    this.array.sort((a,b)=>a.nombre.localeCompare(b.nombre));
    this.array.forEach((value,index)=>console.log(value));
};
buscarSandkill=(nombre)=>{
    return this.array.find(value=>value.nombre.localeCompare(nombre)==0);

};
buscarPosicion=(posicion)=>{
    return this.array[posicion];
};

};
const controler=new ControllerSandkill();

controler.insertaPrincipio(new Sandkill("silvia",31,"developer"));
controler.insertaPrincipio(new Sandkill("francisco",25,"backend"));
controler.insertaPrincipio(new Sandkill("juanma",28,"fronted"));
controler.insertaPrincipio(new Sandkill("alejandro",18,"analista"));
controler.insertaPrincipio(new Sandkill("alejandro dos",20,"consultor"));
controler.insertaPrincipio(new Sandkill("enrique",20,"developer"));
controler.insertaFinal(new Sandkill("jose",19,"developer"));
controler.insertaFinal(new Sandkill("angel",20,"developer"));

//controler.verSandkills();

//controler.eliminaPrimero();
//controler.verSandkills();
controler.eliminaUltimo();
controler.verSandkills();

console.log('el sandkill de nombre juanma es este:'+controler.buscarSandkill("juanma"));
controler.mostrarOrdenada();
