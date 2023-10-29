import { Installation } from "./installation";//inportar objetos instalacion y compania
import { Company } from "./company";

//clase escuela
export class School{
    constructor(nombre,localidad,responsable,telefono,direccion,instalacion){
        this.nombre=nombre;
        this.localidad=localidad;
        this.responsable=responsable;
        this.telefono=telefono;
        this.direccion=direccion;
        this.instalacion=instalacion instanceof Installation ? instalacion:null;

    };
    

    ///////////setters//////////

    set setNombre(nombre){
        this.nombre=nombre;
    };

    set setLocalidad(localidad){
        this.localidad=localidad;
    };

    set setResponsable(responsable){
        this.responsable=responsable;
    };

    set setTelefono(telefono){
        this.telefono=telefono;
    };

    set setDireccion(direccion){
        this.direccion=direccion;
    };

    set setInstalacion(instalacion){
        this.instalacion=instalacion instanceof Installation ? instalacion : null;
    };
    
    ///////////getters///////////

    get getInstalacion(){
        return this.instalacion;
    };

    get getNombre(){
        return this.nombre;
    };

    get getLocalidad(){
        return this.localidad;
    };

    get getResponsable(){
        return this.responsable;
    };

    get getTelefono(){
        return this.telefono;
    };

    get getDireccion(){
        return this.direccion;
    };

    ///////////toString///////////

    toString() {
        return `Nombre: ${this.nombre}\nLocalidad: ${this.localidad}\nResponsable: ${this.responsable}\nTeléfono: ${this.telefono}\nDirección: ${this.direccion}\nInstalación: ${this.instalacion ? this.instalacion.toString() : "No hay instalación asignada"}`;
    }
};