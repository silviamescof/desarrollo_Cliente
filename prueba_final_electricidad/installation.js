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

    set company(company){
        this.company=company instanceof Company?company:null;
    };
    //////////getters/////////

    get company(){
        
        return this.company;
    };
    /////////toString/////////
};