window.addEventListener("load", function () {

    document.getElementById("enviar").addEventListener("click", function (event) {

        event.preventDefault();
        
        let titulo = document.getElementById("titulo").value;
        let url = document.getElementById("url").value;
        let descripcion = document.getElementById("descripcion").value;

        let figure = document.createElement('figure');
        
        // Crear la imagen y configurar el atributo src
        let img = document.createElement('img');
        img.setAttribute("src", url);

        let h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(titulo));

        let p = document.createElement('p');
        p.appendChild(document.createTextNode(descripcion));

        figure.appendChild(img);
        figure.appendChild(h3);
        figure.appendChild(p);

        document.getElementById("galeria").appendChild(figure);
    });
});
