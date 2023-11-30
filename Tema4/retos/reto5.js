//funcion que cambia los bordes a color rojo de las clases seleccionadas
const cambiarBorde=(clase)=>{
    let coleccion=Array.from(document.getElementsByClassName(clase));
    coleccion.forEach(element => {
        element.style.border="solid 10px red";
        setTimeout(() => {
            console.log("Eliminando borde");
            element.style.border = "none";
        }, 2000);
});
};
//evento principal que da acceso al resto siempre que la pagina este cargada.
window.addEventListener("load", function(){

    Array.from(this.document.getElementsByTagName("img")).forEach(element => {// traigo todos los elementos que son imagenes
        element.addEventListener("mouseover",function(event){// las itero y les añado un evento moseover
            let descripcion=element.getAttribute("alt");

            document.getElementById("descripcion").innerHTML=descripcion;//que muestra el alt de la foto
        })
    }); 
    Array.from(this.document.getElementsByTagName("button")).forEach(element=>{//cojo todos los elementos que sean botones 

        element.addEventListener("click", function(event){// extraigo su id y la analizo para cambiar el borde segun el elmento que toque.
            let boton=event.target.id;

            switch (boton) {
                case 'malignos':
                    cambiarBorde("malignos");
                    break;
                case 'griffindor':
                    cambiarBorde("griffindor");
                    break;
                case 'ravwenclaw':
                    cambiarBorde("ravwenclaw");
                    break;
                case 'slicerin':
                    cambiarBorde("slicerin");
                    break;
                case 'profesores':
                    cambiarBorde("profesor");
                    break;
                case 'cobardes':
                    cambiarBorde("cobarde");
                    break;
                default:
                    break;
            }
        })
    })
})