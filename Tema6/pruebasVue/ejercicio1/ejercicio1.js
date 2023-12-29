const contenido = Vue.createApp({
    data() {
      return {
        informacion: null
      };
    },
    mounted() {
      this.consulta();
    },
    methods: {
      async consulta() {
        try {
          let response = await fetch('ejercicio1.json');
  
          if (!response.ok) {
            throw new Error(`Error al obtener el archivo JSON. Código de estado: ${response.status}`);
          }
  
          let data = await response.json();
          console.log('Datos obtenidos:', data);
          this.informacion = data;
          
          console.log('Información:', this.informacion);
        } catch (error) {
          console.error('Error en la petición:', error);
        }
      }
    }
  });
  
  const mountedContenido = contenido.mount("#contenido");
  