document.addEventListener("DOMContentLoaded", function () {
    let victorias = 0;
    let derrotas = 0;

    document.getElementById ("geografia").addEventListener ("click", function () {
       
            const respuesta = prompt( "¿Cuál es el pico más alto de España?");
            const respuestaLowerCase = respuesta.toLowerCase();
            if (respuestaLowerCase === "teide") {
                victorias++;
            } else {
                derrotas++;
            }
            document.getElementById("geografia").disabled = true;
            document.getElementById("geografia").style.display = "none";
            verificarVictoriaDerrota();
        
    });

    document.getElementById("arte").addEventListener("click", function () {
       
            const respuesta = prompt("¿el grito de.....?");
            const respuestaLowerCase = respuesta.toLowerCase();
            if (respuestaLowerCase === "munch") {
                victorias++;
            } else {
                derrotas++;
            }
            document.getElementById("arte").disabled = true;
            document.getElementById("arte").style.display = "none";
            verificarVictoriaDerrota();
        
    });

    document.getElementById("ciencias").addEventListener("click", function () {
       
            const respuesta = prompt("químicamente escribiendo..... agua");
            const respuestaLowerCase = respuesta.toLowerCase();
            if (respuestaLowerCase === "h2o") {
                victorias++;
            } else {
                derrotas++;
            }
            document.getElementById("ciencias").disabled = true;
            document.getElementById("ciencias").style.display = "none";
            verificarVictoriaDerrota();
        
    });

    document.getElementById("deportes").addEventListener("click", function () {
        
            const respuesta = prompt("apellido del futbolista argentino, apodado D10S, barrilete cósmico, pelusa, el cebollita o el mejor jugador del mundo");
            const respuestaLowerCase = respuesta.toLowerCase();
            if (respuestaLowerCase === "maradona") {
                victorias++;
            } else {
                derrotas++;
            }
            document.getElementById("deportes").disabled = true;
            document.getElementById("deportes").style.display = "none";
            verificarVictoriaDerrota();
        
    });

    document.getElementById("espectaculos").addEventListener("click", function () {
        
            const respuesta = prompt("circo y astro");
            const respuestaLowerCase = respuesta.toLowerCase();
            if (respuestaLowerCase === "sol") {
                victorias++;
            } else {
                derrotas++;
            }
            document.getElementById("espectaculos").disabled = true;
            document.getElementById("espectaculos").style.display = "none";
            verificarVictoriaDerrota();
        
    });

    document.getElementById("historia").addEventListener("click", function () {
       
            const respuesta = prompt("Apellido del primer presidente de la democracia española");
            const respuestaLowerCase = respuesta.toLowerCase();
            if (respuestaLowerCase === "suarez") {
                victorias++;
            } else {
                derrotas++;
            }
            document.getElementById("historia").disabled = true;
            document.getElementById("historia").style.display = "none";
            verificarVictoriaDerrota();
        
    });

    function verificarVictoriaDerrota() {
        if (derrotas === 3) {
            document.getElementById("geografia").style.display = "none";
            document.getElementById("arte").style.display = "none";
            document.getElementById("ciencias").style.display = "none";
            document.getElementById("historia").style.display = "none";
            document.getElementById("deportes").style.display = "none";
            document.getElementById("espectaculos").style.display = "none";
            document.write('<span class="imagen"><img src="loos.svg" width="200px" height="200px"></span>');
        }
        if (victorias === 4) {
            document.getElementById("geografia").style.display = "none";
            document.getElementById("arte").style.display = "none";
            document.getElementById("ciencias").style.display = "none";
            document.getElementById("historia").style.display = "none";
            document.getElementById("deportes").style.display = "none";
            document.getElementById("espectaculos").style.display = "none";
            document.write('<span class="imagen"><img src="victoria.svg" width="200px" height="200px"></span>');
        }
    }
});