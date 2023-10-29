import { Company } from "./company";

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

    set setCompany(company){
        this.company=company instanceof Company?company:null;
    };

    set setExterior(exterior){
        this.exterior=exterior;
    };

    set setInterior(interior){
        this.interior=interior;
    };

    set setEnchufes(enchufes){
        this.enchufes=enchufes;
    };

    set setCantidad(cantidad){
        this.cantidad=cantidad;
    };

    set setPresupuesto(presupuesto){
        this.presupuesto=presupuesto;
    };
    
    //////////getters/////////

    get getCompany(){
        return this.company;
    };

    get getExterior(){
        return this.exterior;
    };

    get getInterior(){
        return this.interior;
    };

    get getEnchufes(){
        return this.enchufes;
    };

    get getCantidad(){
        return this.cantidad;
    };

    get getPresupuesto(){
        return this.presupuesto;
    };
    /////////toString/////////

    toString() {
        return `Exterior: ${this.exterior}, Interior: ${this.interior}, Enchufes: ${this.enchufes}, Cantidad: ${this.cantidad}, Presupuesto: ${this.presupuesto}, Company: ${this.company ? this.company.toString() : 'N/A'}`;
    }
};

