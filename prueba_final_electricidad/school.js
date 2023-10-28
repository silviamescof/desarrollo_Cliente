import { Installation } from "./installation";
import { Company } from "./company";

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

    set setInstalacion(instalacion){
        this.instalacion=instalacion instanceof Installation ? instalacion : null;
    };

    ///////////getters///////////

    get getInstalacion(){
        return this.instalacion;
    };

    ///////////toString///////////
};