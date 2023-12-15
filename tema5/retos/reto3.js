async function muestraItem() {

  let valor = document.getElementById("tipo").value;

  console.log(valor);

  try {
      const peticion = await fetch("reto3.php?nombre=" + valor);

      if (!peticion.ok) {

          throw 'Error, algo no ha ido bien';
      }

      const respuesta = await peticion.json();
      console.log(respuesta);

      // Crear una lista (ul) en lugar de una tabla para agregar elementos li
      let tabla=document.getElementById("tabla");

      for (let propiedad in respuesta){

        console.log(respuesta[propiedad]);
        let fila = document.createElement("tr");
          for (let prop in respuesta[propiedad]) {
            let celda = document.createElement("td");
            console.log(respuesta[propiedad][prop]);
            celda.textContent = respuesta[propiedad][prop];
            fila.appendChild(celda);
          };
          tabla.appendChild(fila);
          
        
      }

  } catch (error) {
      console.error('Error al obtener nombres:', error);
  };

};
console.log("kjbvlxjkhbv");

  document.getElementById("tipo").addEventListener("change", muestraItem);

