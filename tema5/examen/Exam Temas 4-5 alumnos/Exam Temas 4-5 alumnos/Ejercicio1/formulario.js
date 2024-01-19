/**1) Crea un formulario con los siguientes campos:
• Identificador (formado por dos letras en mayúscula, un símbolo y cuatro dígitos (ej. DD#8908))
• Nombre (campo de texto 50 caracteres)
• Correo electrónico: en formato varios caracteres (letras, números, puntos o guiones altos o bajos, 
20 máximo) seguido de arroba, letras (20 máximo), punto (1), y 2 o 3 letras.
• Edad (campo numérico y mayor a 18)
• Teléfono (campo de texto, con formato + y dos o tres cifras seguido de guion y 9 cifras)
Añade la siguiente lógica de validación en JavaScript:
• Valida que todos los campos sean requeridos, no estén vacíos y cumplan el formato requerido.
• Muestra un mensaje de error si algún campo no cumple con las condiciones de validación y otro 
distinto en caso de que esté vacío a la derecha del campo que es incorrecto.
• Si todos los campos son válidos, envía los datos al servidor (simula este proceso con una alerta que 
muestre los datos).
Eventos:
• Asocia el evento onfocus al identificador para que al poner el foco se vacíe dicho elemento.
• Asocia el evento onblur al identificador para que al perder el foco compruebe que cumple con la 
expresión regular y aparezca a la derecha un tick verde o rojo mostrando si es correcto o no.
 */


function validarInput(input){

    if(input.validity.valueMissing){
        input.nextElementSibling.textContent = 'Silvia dice que el elemento es obligatorio';
    }else if(input.validity.typeMismatch){
        let tipo = input.type;
        input.nextElementSibling.textContent = 'Silvia dice que el elemento no cumple el formato de '+tipo;
    }else if(!input.validity.patternMismatch){
        input.nextElementSibling.textContent = 'Silvia dice que el elemento no cumple con el patron establecido';
    }else if(!input.validity.tooShort ){
        input.nextElementSibling.textContent = 'Silvia dice que el elemento es demasiado corto';
    }else if(!input.validity.tooLong){
        input.nextElementSibling.textContent = 'Silvia dice que el elemento es demasiado largo';
    }else if(!input.validity.rangeUnderflow ){
        input.nextElementSibling.textContent = 'Silvia dice que el elemento es de menor valor a lo establecido';
    }else if(!input.validity.rangeOverflow){
        input.nextElementSibling.textContent = 'Silvia dice que el elemento es de mayor valor a lo establecdo';
    }
    input.textContent = '✅';
}
function vaciar(input){
    input.textContent = '';
}
function validar(event){
    event.preventDefault();

    let formulario= document.getElementById('formulario');
    let inputs= formulario.querySelectorAll('input')

    for (const input of inputs) {

        input.addEventListener('focus',vaciar(input));

        input.addEventListener('onblur',validarInput(input));    
    };
    if(formulario.checkValidity()){
        document.getElementById('alerta').textContent= 'El formulario es correcto y se va a enviar';
    }

    
}


window.addEventListener('load', function (){
    this.document.getElementById('boton').addEventListener('click', validar);
});