import { Installation } from "./installation";
import { Company } from "./company";
import { School } from "./school";


class Launcher{
    constructor(){
       this.schools=[];
    }

   static addSchool(school){
        if(school instanceof School){
            this.schools.push(school);
            console.log("escuela añadida");
        }else{
            this.schools.push(null);
        };
        
    };
    static deleteSchool(school){
        let posicion=this.schools.indexOf(school);
        if (posicion !== -1) {
            this.schools.splice(indice, 1); // Elimina un elemento en el índice encontrado
          }    
    }
    static modifySchool(parametro, valor,id){
        switch(param){
            case 1:
                //set nombre de la escuela
                break;
            case 2:
                //set 
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
        }
    }
};