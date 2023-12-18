function decode(message) {
    let nivel = 0;
    let resultado = '';
    let subcadena = '';
  
    const invertir = cadena => cadena.split('').reverse().join('');
  
    for (let i = 0; i < message.length; i++) {
      if (message[i] === '(') {
        if (nivel > 0) {
          // Dentro de un paréntesis anidado, simplemente concatenamos
          subcadena += message[i];
        }
        nivel++;
      } else if (message[i] === ')') {
        nivel--;
        if (nivel === 0) {
          // Invertir y agregar la subcadena al resultado
          resultado += invertir(decode(subcadena)); // Recursividad para manejar anidamientos internos
          subcadena = '';
        } else {
          // Dentro de un paréntesis anidado, simplemente concatenamos
          subcadena += message[i];
        }
      } else {
        if (nivel === 0) {
          // Fuera de paréntesis, simplemente agregamos al resultado
          resultado += message[i];
        } else {
          // Dentro de un paréntesis anidado, simplemente concatenamos
          subcadena += message[i];
        }
      }
    }
  
    return resultado;
  }
  
  // Ejemplos de uso
  const a = decode('hola (odnum)');
  console.log(a); // 'hola mundo'
  
  const b = decode('(olleh) (dlrow)!');
  console.log(b); // 'hello world!'
  
  const c = decode('sa(u(cla)atn)s');
  console.log(c); // 'santaclaus'
  
  const d = decode('santa)alc(us');
  console.log(d); // 'santaclaus'
  