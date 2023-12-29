<!-- src/components/ButtonCounter.vue -->
<template>
    <div>
      <button @click="increment">Incrementar</button>
      <p>Contador: {{ count }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente, si es necesario */
  </style>
  