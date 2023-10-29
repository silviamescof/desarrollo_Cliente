import { Installation } from "./installation";//importar archivos de objetos JS
import { Company } from "./company";
import { School } from "./school";

//clase principal

//array escuelas
this.schools=[];


    //metodo para aniadir escuela
   const addSchool=(school)=>{
        if(school instanceof School){
            this.schools.push(school);
            console.log("escuela añadida");
        }else{
            this.schools.push(null);
        };
        
    };
    //metodo para eliminar escuela
    const deleteSchool=(school)=>{
        let posicion=this.schools.indexOf(school);
        if (posicion !== -1) {
            this.schools.splice(indice, 1); // Elimina un elemento en el índice encontrado
          }    
    };
    //metodo para modificar escuela
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
    //aniade escuela
    addSchool(new School("ies jandula","andujar","la señora directora","953507486","carretera de los villares"));
    console.log(schools);//imprime la escuela