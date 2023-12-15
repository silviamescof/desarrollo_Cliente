//funcion que obtiene todos los bares del json
async function obtieneBares() {
    const response = await fetch('../bares.json');
    if (!response.ok) {
      throw `Error ${response.status}`;
    }
    const bares = await response.json();
    return bares;
}
// funcion que crea los options de forma dinamica
async function creaOptions() {
    try {
      const bares = await obtieneBares();  
  
      let select = document.getElementById("bares");
  
      for (const bar of bares) {
        let option = document.createElement("option");
        option.setAttribute("value", bar.nombre);
        option.textContent = bar.nombre;
        select.appendChild(option);
      }
    } catch (error) {
      console.error('Error al obtener nombres:', error);
    }
}
  
  // Llamada a la función creaOptions para cargar las opciones en el select
  creaOptions();

window.addEventListener("load",function(event){

    Array.from(this.document.getElementsByTagName("select")).forEach(element => {

        element.addEventListener("change",async function(event){
            
            let div=document.getElementById("informacion");
            let bares= await obtieneBares();
            let selectedBar = event.target.options[event.target.selectedIndex];
            bares.forEach(bar => {
                if(bar.nombre===selectedBar.value){
                    div.innerHTML='Nombre: '+bar.nombre+'<br>'+'Direccion: '+bar.direccion;
                }
                
            });
        })
    });
});

  