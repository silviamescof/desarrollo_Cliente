function imprimeTabla(respuesta) {
    console.log("entra");
  let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";  // Limpiar la tabla antes de añadir nuevas filas

    // Agregar encabezados de la tabla
    tabla.innerHTML += "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th></tr>";

    respuesta.forEach(element => {
        // Acumular contenido en una variable
        let fila = "<tr>";
        fila += '<td>' + element.nombre + '</td>';
        fila += '<td>' + element.descripcion + '</td>';
        fila += '<td><img src="./img/' + element.imagen + '"></td>';
        fila += "</tr>";

        // Añadir la fila a la tabla
        tabla.innerHTML += fila;
    }); 
}
async function verArmas(event){
    
    //// lo primero, obtener el valor del bando//

    let bando=document.getElementById("bando").value;

    console.log(bando);
    /// lo segundo hacer la consulta

    let consulta= await fetch("reto4.php?bando="+bando);

    if(!consulta.ok){
        throw 'Erorr algo no ha ido bien';
    }
    const respuesta= await consulta.json();
    
    console.log(respuesta);

    imprimeTabla(respuesta);
};



window.addEventListener("load",function(){

    document.getElementById("ver").addEventListener("click", verArmas);
});
