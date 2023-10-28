export class Company{

    constructor(nombre,responsable,cif,telefono,direccion){
        this.nombre=nombre;
        this.responsable=responsable;
        this.cif=cif;
        this.telefono=telefono;
        this.direccion=direccion;

    };

    ////////setters////////
    setNombre(nombre){
        this.nombre = nombre;
    }

    setResponsable(responsable){
        this.responsable = responsable;
    }

    setCif(cif){
        this.cif = cif;
    }

    setTelefono(telefono){
        this.telefono = telefono;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    ////////getters///////
    getNombre(){
        return this.nombre;
    }

    getResponsable(){
        return this.responsable;
    }

    getCif(){
        return this.cif;
    }

    getTelefono(){
        return this.telefono;
    }

    getDireccion(){
        return this.direccion;
    }
    
    ///////toString///////
    toString() {
        return `Nombre: ${this.nombre}\nResponsable: ${this.responsable}\nCIF: ${this.cif}\nTeléfono: ${this.telefono}\nDirección: ${this.direccion}`;
    }
};