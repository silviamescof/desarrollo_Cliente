 // Función que se ejecutará cuando se mueva el ratón
 function obtenerPosicionRaton(event) {
    // Obtener la posición del ratón
    const x = event.clientX;
    const y = event.clientY;

    // Mostrar la posición en la consola (puedes hacer lo que quieras con estos valores)
    let contenedor=document.getElementById("contenido");
    let tabla=document.createElement('table');
    let fila=document.createElement('tr');
    let celda1=document.createElement('td');
        celda1.textContent=`POSCICION DEL RATON`;
    let celda2=document.createElement('td');
        celda2.textContent=`X = ${x}`;
    let celda3=document.createElement('td');
        celda3.textContent=`Y = ${y}`;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        
    tabla.appendChild(fila);
    contenedor.appendChild(tabla);

    console.log(`Posición del ratón - X: ${x}, Y: ${y}`);
    console.log(event);
}

// Agregar un event listener para el evento de movimiento del ratón
document.addEventListener('mousemove', obtenerPosicionRaton);