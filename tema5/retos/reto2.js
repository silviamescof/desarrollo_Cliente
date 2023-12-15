async function obtieneBares(){
    const respuesta= await fetch("../bares.json");
    if(!respuesta.ok){
        throw `Error ${respuesta.status}`;
    }
    const bares= await respuesta.json();
    return bares;
}
window.addEventListener("load", function () {
    this.document.getElementById("anterior").addEventListener("click", async function (event) {
        let imagen = document.getElementsByTagName("img")[0];
        elementoActual = imagen.getAttribute("src");
        console.log(elementoActual);
        let bares = await obtieneBares();
        let posicion = bares.indexOf(elementoActual);
        console.log(posicion);

        // Verifica que haya al menos dos elementos en el array antes de acceder a ellos
        if (bares.url_imagen && bares.url_imagen[posicion - 1]) {
            imagen.setAttribute("src", bares.url_imagen[posicion - 1]);
        } else {
            console.error("No hay imagen anterior disponible.");
        }
    });

    this.document.getElementById("siguiente").addEventListener("click", async function (event) {
        let imagen = document.getElementsByTagName("img")[0];
        elementoActual = imagen.getAttribute("src");
        console.log(elementoActual);
        let bares = await obtieneBares();
        let posicion = bares.indexOf(lementoActual);
        console.log(posicion);

        // Verifica que haya al menos dos elementos en el array antes de acceder a ellos
        if (bares.url_imagen && bares.url_imagen[posicion + 1]) {
            imagen.setAttribute("src", bares.url_imagen[posicion + 1]);
        } else {
            console.error("No hay imagen siguiente disponible.");
        }
    });
});