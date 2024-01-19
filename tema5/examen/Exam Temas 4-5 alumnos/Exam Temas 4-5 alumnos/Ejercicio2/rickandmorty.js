function mostrarCharacter(respuesta){
    let contenido= document.getElementById('contenido');
    let tarjeta= document.createElement('div');
    tarjeta.setAttribute('class','tarjeta');

    if(Array.isArray(respuesta)){
        respuesta.forEach(personaje => {

        
            let imagen = document.createElement('img');
            imagen.setAttribute('src', personaje.image);
            let id = document.createElement('p');
                id.textContent = personaje.id;
            let name = document.createElement('p');
                name.textContent = personaje.name;
            let species = document.createElement('p');
                species.textContent = personaje.species;
            let especiesName= document.createElement('p');
                especiesName.textContent = personaje.origin.name;
    
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(id);
            tarjeta.appendChild(name);
            tarjeta.appendChild(species);
            tarjeta.appendChild(especiesName);
    
            contenido.appendChild(tarjeta);
        });
    }else{
        let imagen = document.createElement('img');
        imagen.setAttribute('src', personaje.image);
        let id = document.createElement('p');
            id.textContent = personaje.id;
        let name = document.createElement('p');
            name.textContent = personaje.name;
        let species = document.createElement('p');
            species.textContent = personaje.species;
        let especiesName= document.createElement('p');
            especiesName.textContent = personaje.origin.name;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(id);
        tarjeta.appendChild(name);
        tarjeta.appendChild(species);
        tarjeta.appendChild(especiesName);

        contenido.appendChild(tarjeta);
    }
    
}   
function mostrarEpisode(respuesta){
    
    let contenido= document.getElementById('contenido');
    let tarjeta= document.createElement('div');
    tarjeta.setAttribute('class','tarjeta');

    respuesta.forEach(personaje => {

        let id = document.createElement('p');
            id.textContent = personaje.id;
        let name = document.createElement('p');
            name.textContent = personaje.name;
        let airdate = document.createElement('p');
            airdate.textContent = personaje.air_date;

       
        tarjeta.appendChild(id);
        tarjeta.appendChild(name);
        tarjeta.appendChild(airdate);

        contenido.appendChild(tarjeta);
    });

}        
function mostrarLocation(respuesta){
    let contenido= document.getElementById('contenido');
    let tarjeta= document.createElement('div');
    tarjeta.setAttribute('class','tarjeta');

    respuesta.forEach(personaje => {

        let id = document.createElement('p');
            id.textContent = personaje.id;
        let name = document.createElement('p');
            name.textContent = personaje.name;
        let type = document.createElement('p');
            type.textContent = personaje.type;

       
        tarjeta.appendChild(id);
        tarjeta.appendChild(name);
        tarjeta.appendChild(type);

        contenido.appendChild(tarjeta);
    });
}
   


async function iniciar(event){
    event.preventDefault();

    let tipo = document.getElementById('tipo').value;                               console.log(`tipo : ${tipo}`);
    let id = document.getElementById('id').value;                                   console.log(`id : ${id}`);
    let url = 'https://rickandmortyapi.com/api/'+ tipo + id;        
    let  respuesta;
    let peticion;                                                                 console.log(`url : ${url}`);
    do {
        try {
            peticion = await fetch(url);
    
            if (!peticion.ok) {
                throw `Error ${peticion.status} de la BBDD: ${peticion.statusText}`;
            }
    
            respuesta = await peticion.json();
    
            console.log(respuesta.results);
    
            if (tipo === 'character/') {
                mostrarCharacter(respuesta.results);
            } else if (tipo === 'episode/') {
                mostrarEpisode(respuesta.results);
            } else if (tipo === 'location/') {
                mostrarLocation(respuesta.results);
            }
    
            // Verifica si 'next' no existe o es null
            url = respuesta.info && respuesta.info.next !== null ? respuesta.info.next : null;
    
        } catch (error) {
            console.log('estamos entrando en el catch ' + error);
            break; // Sale del bucle en caso de error
        }
    } while (url);
    
       

    
   
}


window.addEventListener('load', function (){
    this.document.getElementById('enviar').addEventListener('click', iniciar);
})