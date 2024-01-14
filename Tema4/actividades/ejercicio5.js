function cargarCien() {
    let formulario = document.getElementById('formulario');

    for (let i = 0; i < 100; i++) {
        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        
        let aleatorio = Math.floor(Math.random()*100)+1;
        check.setAttribute('value', aleatorio);

        let label = document.createElement('label');
        label.appendChild(check);
        label.appendChild(document.createTextNode(" " + aleatorio));

        formulario.appendChild(label);

        let br = document.createElement('br');
        formulario.appendChild(br);
    }
}
function marcarTodos(event){
    event.preventDefault();
    console.log(event);
    //devuelve coleccion, lo paso a array para que se pueda iterar con foreach//
    let inputs=Array.from(document.getElementsByTagName('input'));

    inputs.forEach(input => {
        input.checked=true;
    });

    
};
function desmarcarTodos(event){
    event.preventDefault();
    //devuelvee coleccion y lo tratare como una coleccion//
    let inputs=document.getElementsByTagName('input');

    for (const input of inputs) {
        input.checked=false;
    }
};

window.addEventListener('load', function () {
    cargarCien();
    this.document.getElementById('todos').addEventListener('click',marcarTodos);
    this.document.getElementById('ninguno').addEventListener('click',desmarcarTodos);
});
