/**<!--Realiza un programa que cree dinámicamente una tabla de 100x100. Cada elemento de la
tabla tendrá un número único, que empezará en 1 y se irá incrementando de 1 en 1.
Este programa además tendrá una función que será “Calcular numero casi primos”. Esta
función hará que todas las celdas de la tabla que tengan números “Casi primos” se pongan
con un fondo amarillo.
Definimos aquí que es un “Número casi primo”:
● Número casi primo: es un número que solo es divisible por sí mismo, la unidad y por
un solo número que no sea ni la unidad ni si mismo.
Ejemplo:
2 no es un número casi primo, porque es divisible por 1 y por 2, pero no por otro número.
4 es un número casi primo, porque es divisible por 1, por 4 y por 2.
8 no es un número casi primo, porque es divisible por 1, por 8 y por 2, pero además también
es divisible por 4.--> */


// Función para verificar si un número es casi primo
function esCasiPrimo(numero) {
    // Contador para los divisores
    let contadorDivisores = 0;

    // Iterar desde 1 hasta el número
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contadorDivisores++;
        }

        // Detener el bucle si encontramos más de 2 divisores
        if (contadorDivisores > 2) {
            return false;
        }
    }

    // Retornar verdadero si tiene exactamente 2 divisores
    return contadorDivisores === 2;
}

// Función para crear la tabla y aplicar el estilo a los casi primos
function crearTabla() {
    let tabla = document.createElement('table');

    // Iterar sobre las filas
    for (let i = 0; i < 100; i++) {
        let fila = document.createElement('tr');

        // Iterar sobre las columnas
        for (let j = 0; j < 100; j++) {
            let numero = i * 100 + j + 1; // Calcular el número único
            let celda = document.createElement('td');
            celda.textContent = numero;

            // Verificar si el número es casi primo y aplicar el estilo
            if (esCasiPrimo(numero)) {
                celda.classList.add('casi-primo');
            }

            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}

// Llamar a la función para crear la tabla al cargar la página
window.addEventListener('load', crearTabla);