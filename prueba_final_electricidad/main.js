import { Installation } from "./installation";
import { Company } from "./company";
import { School } from "./school";


let escuelas=[];

//////////////////////////////////crear escuela//////////////////////////////

document.getElementById("schoolForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const localidad = document.getElementById("localidad").value;
    const responsable = document.getElementById("responsable").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;

    // Crear una instancia de la clase School con los datos del formulario
    const nuevaEscuela = new School(nombre, localidad, responsable, telefono, direccion, instalacion);

    console.log("Escuela creada:"+ nuevaEscuela+ "Ahora le asociaremos una instalacion");
    window.location.href = "/installation.html";
});
///////////////////////////////////crear instalacion/////////////////////////////////
document.getElementById("installationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const exterior = document.getElementById("exterior").value;
    const interior = document.getElementById("interior").value;
    const enchufes = document.getElementById("enchufes").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const presupuesto = document.getElementById("presupuesto").value;

    // Crea una instancia de la clase Installation con los datos del formulario
    nuevaInstalacion=new Installation(exterior, interior, enchufes, cantidad, presupuesto, company);

    console.log("Instalación creada:"+ nuevaInstalacion+ "da de alta la compania de la instalacion");
    window.location.href = "/company.html";
});
/////////////////////////////////alta company////////////////////////////////////////////////////

document.getElementById("companyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const responsable = document.getElementById("responsable").value;
    const cif = document.getElementById("cif").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;

    // Crea una instancia de la clase con los datos del formulario
    const nuevaCompania = new Company(nombre, responsable, cif, telefono, direccion);
    nuevaInstalacion.setCompany(nuevaCompania);
    nuevaEscuela.setInstalacion(nuevaInstalacion);
    escuelas.push(nuevaEscuela);
    // Aquí puedes hacer algo con la instancia de la compañía, como enviarla a un servidor o mostrarla en la página.
    console.log("Compañía creada:", nuevaCompania+ "estas de nuevo en el menu principal");
    window.location.href = "/index.html";
});