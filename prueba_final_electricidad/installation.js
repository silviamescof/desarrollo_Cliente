import { Company } from "./company";//importar datos de la clase company

//clase installlation
export class Installation{
    constructor(exterior,interior,enchufes,cantidad,presupuesto,company){
        this.exterior=exterior;
        this.interior=interior;
        this.enchufes=enchufes;
        this.cantidad=cantidad;
        this.presupuesto=presupuesto;
        this.company=company instanceof Company ? company:null;
    };
    /////////setters/////////

    setCompany(company){
        this.company=company instanceof Company?company:null;
    };

    setExterior(exterior){
        this.exterior=exterior;
    };

    setInterior(interior){
        this.interior=interior;
    };

    setEnchufes(enchufes){
        this.enchufes=enchufes;
    };

    setCantidad(cantidad){
        this.cantidad=cantidad;
    };

    setPresupuesto(presupuesto){
        this.presupuesto=presupuesto;
    };
    
    //////////getters/////////

    getCompany(){
        return this.company;
    };

    getExterior(){
        return this.exterior;
    };

    getInterior(){
        return this.interior;
    };

    getEnchufes(){
        return this.enchufes;
    };

    getCantidad(){
        return this.cantidad;
    };

    getPresupuesto(){
        return this.presupuesto;
    };
    /////////toString/////////

    toString() {
        return `Exterior: ${this.exterior}, Interior: ${this.interior}, Enchufes: ${this.enchufes}, Cantidad: ${this.cantidad}, Presupuesto: ${this.presupuesto}, Company: ${this.company ? this.company.toString() : 'N/A'}`;
    }
};

