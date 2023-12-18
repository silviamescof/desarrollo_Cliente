function manufacture(gifts, materials) {
    let validos = [];
  
    gifts.forEach(element => {
      let letras = element.split('');
      let todas = true;
  
      letras.forEach(elemento => {
        // Si alguna letra no está en materials, cambiar todas a false
        if (!materials.includes(elemento)) {
          todas = false;
        }
      });
  
      // Si todas las letras están en materials, agregar la palabra a validos
      if (todas) {
        validos.push(element);
      }
    });
  
    return validos;
  }
  
  // Ejemplo de uso
  const gifts = ['tren', 'oso', 'pelota'];
  const materials = 'tronesa';
  console.log(manufacture(gifts, materials));
  