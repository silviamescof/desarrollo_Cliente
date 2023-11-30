
        //funcion que valida el formulario
        
        let destruyeCookie= setInterval(()=>{

            let sistema= new Date();
            let hora=sistema.getHours();
            let minutos=sistema.getMinutes();
            let segundos=sistema.getSeconds();

            if(hora=="23" && minutos=="59" && segundos=="59"){
                localStorage.removeItem('forfaits');
            };

        },1000);

        function validarformulario(event) {
            event.preventDefault();
               /*Traemos todos los elemtnos del formulario, este validador funciona con cualqueir formulario, 
               siempre y cuando TODOS los imput se correspondan con un span que tenga de id="span"+ la id del input*/
                let elementos = document.getElementById("miFormulario").elements;
                /*El metodo anterior nos devuelve una coleccion por lo que lo parseamos a un array 
                para poder trabajar con el como dicho objeto*/
                let elementosArray = Array.from(elementos);
                let esSocio = document.getElementById("miembro").checked;
                console.log(esSocio);
                let valido=true;

                //console.log(elementosArray);//linea de depuracion
                /*el array contiene en cada posicion un elemento html del formulario, solo los elementos input tienen
                reglas de validacion, por lo que aunque los recorra todos, solo va a reaccionar a los elementos que tengan
                reglas de validacion y que estas no se cumplan, por ello, vamos revisando elemento por elemento*/
                
                elementosArray.forEach(element => {

                        
                    //console.log(element);//linea de depuracino
                        //construimos el la id del span para poder acceder a el
                        let spanId = 'span' + element.id;

                        //console.log(spanId);//linea de depuracion
                        //traemos el span que ya hemos identificado
                        let spanElement = document.getElementById(`${spanId}`);
                        
                        //console.log(spanElement);//linea de depuracion
                        //nos aseguramos de que no contenga ningun valor
                        //spanElement.innerHTML = '';

                        //console.log(element.checkValidity());//linea de depuracion
                    //pasamos el validador..... si el elemento que tenemos en esta iteracion NO es valido....
                    if (!element.checkValidity()) {
                            valido=false;
                        /*si no es valido se ha debido de crear un mensaje no obstante se coprueba*/
                        if (element.validationMessage) {
                            //y se incluye en el  span
                            spanElement.innerHTML += `<br>Error: ${element.validationMessage}`;
                            spanElement.style.border="solid 1px red";
                            spanElement.style.color="red";
                        }
                        //si no tiene valor....
                        if (element.validity.valueMissing) {
                            //se incluye en el span
                            spanElement.innerHTML += `<br>Valor faltante`;
                            spanElement.style.border="solid 1px red";
                            spanElement.style.color="red";
                            
                        }
                        //si no cumple con el patron.. se incluye en el span
                        if (element.validity.patternMismatch) {
                            spanElement.innerHTML += `<br>Tipo incorrecto`;
                            spanElement.style.border="solid 1px red";
                            spanElement.style.color="red";
                        };
                           
                    };
                });
                if (esSocio) {

                    let valorSocios = localStorage.getItem("socios");

                    valorSocios++;
                    localStorage.setItem("socios", valorSocios);
                     
                    document.getElementById("socios").innerHTML = 'Socios' + valorSocios;
                };
                       
                if(valido){
                    let valor=localStorage.getItem("forfaits");
                    valor++;
                    localStorage.setItem("forfaits", valor);

                    document.getElementById("forfaits").innerHTML = 'Forfaits'+valor;
                };
        };

        document.getElementById("socios").innerHTML = 'Socios '+localStorage.getItem("socios");
        document.getElementById("forfaits").innerHTML = 'Forfaits '+localStorage.getItem("forfaits");

        /*evento contenedor del resto de escuchadores, que sive para que el resto escuchen
        siemore y cuando la pagina esté cargada, es una forma de evitar errores al ejecutar acciones
        sobre elementos, que puedieran no estar cargados*/

        window.addEventListener("load", function(){
            //evento que valida el formulario para personalizar los errores
            document.getElementById("enviar").addEventListener("click", validarformulario);

            //evento que despliega los elementos ocultos
            document.getElementById("miembro").addEventListener("click", function(event) {

                //coge todos los elementos que sean de clase oculto
                let ocultoElements = document.querySelectorAll(".oculto");
                //itera sobre ellos eliminando dicha propiedad
                ocultoElements.forEach(element => {
                    element.removeAttribute("hidden");
                });
               
            });
            this.document.getElementById("resetforfaits").addEventListener("click",function(){
                localStorage.setItem("forfaits", 0);
            });
            this.document.getElementById("resetsocios").addEventListener("click",function(){
                localStorage.setItem("socios", 0);
            });
           
        });