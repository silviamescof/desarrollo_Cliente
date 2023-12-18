function findNaughtyStep(original, modified) {
    for (const elemento of modified) {
      if (!original.includes(elemento)) {
        return elemento;
      }
    }
  
    for (const elemento of original) {
      if (!modified.includes(elemento)) {
        return elemento;
      }
    }
  
    return '';
  }
  
  // Ejemplos de uso
  const original1 = 'abcd';
  const modified1 = 'abcde';
  console.log(findNaughtyStep(original1, modified1)); // 'e'
  
  const original2 = 'stepfor';
  const modified2 = 'stepor';
  console.log(findNaughtyStep(original2, modified2)); // 'f'
  
  const original3 = 'abcde';
  const modified3 = 'abcde';
  console.log(findNaughtyStep(original3, modified3)); // ''
  