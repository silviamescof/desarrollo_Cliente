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

    setNombre(nombre){
        this.nombre=nombre;
    };

    setLocalidad(localidad){
        this.localidad=localidad;
    };

    setResponsable(responsable){
        this.responsable=responsable;
    };

    setTelefono(telefono){
        this.telefono=telefono;
    };

    setDireccion(direccion){
        this.direccion=direccion;
    };

    setInstalacion(instalacion){
        this.instalacion=instalacion instanceof Installation ? instalacion : null;
    };
    
    ///////////getters///////////

    getInstalacion(){
        return this.instalacion;
    };

    getNombre(){
        return this.nombre;
    };

    getLocalidad(){
        return this.localidad;
    };

    getResponsable(){
        return this.responsable;
    };

    getTelefono(){
        return this.telefono;
    };

    getDireccion(){
        return this.direccion;
    };

    ///////////toString///////////

    toString() {
        return `Nombre: ${this.nombre}\nLocalidad: ${this.localidad}\nResponsable: ${this.responsable}\nTeléfono: ${this.telefono}\nDirección: ${this.direccion}\nInstalación: ${this.instalacion ? this.instalacion.toString() : "No hay instalación asignada"}`;
    }
};