import { Installation } from "./installation";
import { Company } from "./company";
import { School } from "./school";

this.schools=[];



   const addSchool=(school)=>{
        if(school instanceof School){
            this.schools.push(school);
            console.log("escuela añadida");
        }else{
            this.schools.push(null);
        };
        
    };
    const deleteSchool=(school)=>{
        let posicion=this.schools.indexOf(school);
        if (posicion !== -1) {
            this.schools.splice(indice, 1); // Elimina un elemento en el índice encontrado
          }    
    };
  const modifySchool=(parametro, valor,id)=>{
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
        };
    };

    addSchool(new School("ies jandula","andujar","la señora directora","953507486","carretera de los villares"));
    console.log(schools);