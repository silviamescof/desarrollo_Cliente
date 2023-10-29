import { Installation } from "./installation";//importar archivos de objetos JS
import { Company } from "./company";
import { School } from "./school";

//clase principal

//array escuelas
this.schools=[];


    //metodo para aniadir escuela
   const addSchool=(nombre, localidad,responsable, telefono,direccion,exterior,interior,enchufes,cantidad,presupuesto,nomcia,responcia,cifcia,telecia,direccioncia )=>{
       schools.push(new School(nombre,localidad,responsable,telefono,direccion,
                    new Installation(exterior,interior,enchufes,cantidad,presupuesto,
                    new Company(nomcia,responcia,cifcia,telecia,direccioncia))));
        
    };
    //metodo para eliminar escuela
    const deleteSchool=(nombre)=>{
        let posicion=this.schools.indexOf(nombre);
        if (posicion !== -1) {
            this.schools.splice(indice, 1); // Elimina un elemento en el índice encontrado
          };    
    };
    //metodo para modificar escuela
  const modifySchool=(parametro, valor,id)=>{

        let posicion=this.schools.indexOf(id);
        switch(parametro){
            case 1:
                this.schools[posicion].setNombre(valor);
                break;
            case 2:
                this.schools[posicion].setLocalidad(valor);
                break;
            case 3:
                this.schools[posicion].setResponsable(valor);
                break;
            case 4:
                this.schools[posicion].setTelefono(valor);
                break;
            case 5:
                this.schools[posicion].setDireccion(valor);
                break;
            default:
                console.log("error inesperado");
        };
    };
    const consultar=(nombre)=>{
        let posicion=this.schools.indexOf(nombre);
        console.log(this.schools[posicion]);
        return this.schools[posicion];
    }
    const modifyInstallation=(parametro, valor,id)=>{

        let posicion=this.schools.indexOf(id);
        switch(parametro){
            case 1:
                this.schools[posicion].instalacion.setExterior(valor);
                break;
            case 2:
                this.schools[posicion].instalacion.setInterior(valor);
                break;
            case 3:
                this.schools[posicion].instalacion.setEnchufes(valor);
                break;
            case 4:
                this.schools[posicion].instalacion.setCantidad(valor);
                break;
            case 5:
                this.schools[posicion].instalacion.setPresupuesto(valor);
                break;
            default:
                console.log("error inesperado");
        };
    };
    const modifyCompany=(parametro, valor,id)=>{

        let posicion=this.schools.indexOf(id);
        switch(parametro){
            case 1:
                this.schools[posicion].instalacion.company.setNombre(valor);
                break;
            case 2:
                this.schools[posicion].instalacion.company.setResponsable(valor);
                break;
            case 3:
                this.schools[posicion].instalacion.company.setCif(valor);
                break;
            case 4:
                this.schools[posicion].instalacion.company.setTelefono(valor);
                break;
            case 5:
                this.schools[posicion].instalacion.company.setDireccion(valor);
                break;
            default:
                console.log("error inesperado");
        };
    };