
function interaccion(event){
    let p=event.target;
    console.log(p);

    if(event.detail===1){
        //ocultamos
        p.setAttribute('class','oculto');
        p.style.display='none';
    }else{
        //eliminamos
        p.setAttribute('class','eliminado');
        p.style.display='none';
    };
}
function aparecer(event){
    let parrfosOcultos=document.querySelectorAll('p[class=oculto]');
    for (const p of parrfosOcultos) {
        p.style.display='block';
    }
}

window.addEventListener('load', function(){
    let todosLosP=this.document.getElementsByTagName('p');

    for (const p of todosLosP) {
        p.addEventListener('click', interaccion);
    }

    this.document.getElementById('boton').addEventListener('click',aparecer);
})