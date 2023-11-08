/**
 * Realiza un programa que reciba una cadena con el siguiente formato:
“nombre:apellidos:telefono:email:codigopostal”
Tras recibir la cadena, debe desglosar y mostrar la siguiente información:
● Código postal.
● Apellidos.
● Email.
● Suponiendo un formato de email “direccion@servidor” debe mostrar el nombre del
servidor asociado.
 */

let cadena="silvia:mesa cofrades:62739845:smescof060@g.educaand.es:23740";
let array=cadena.split(":");
//console.log(array);
let nombre=array[0];
let apellidos=array[1];
let telefono=array[2];
let email=array[3];
let servidor=email.split("@")[1];

console.log('nombre: '+nombre);
console.log('apellido: '+apellidos);
console.log('telefono '+telefono);
console.log('email: '+email);
console.log('servidor: '+servidor);