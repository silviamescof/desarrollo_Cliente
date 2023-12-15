const API_URL = "https://jsonplaceholder.typicode.com"; 

async function pideDatos(){
    
    try {
        const peticion = await fetch(`${API_URL}/users`);

        if(!peticion.ok){
            throw 'Erorr algo no ha ido bien';
        }
        const respuesta= await peticion.json();
    
        let elemento = document.getElementById("app");

        respuesta.forEach(element => {

            let datos="<li>Nombre: "+element.name+"📧  Email: "+element.email+"</li>";
            elemento.innerHTML+=datos; 
        });

      } catch (error) {
        console.error('Error al obtener nombres:', error);
      };
};

pideDatos();