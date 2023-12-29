// Importar la función createApp desde el módulo Vue
import { createApp } from 'vue';
import App from './App.vue';

// Crear una aplicación de Vue
const app = createApp(App);

// Configuración de la aplicación (data, methods, etc.)
app.config.globalProperties.$data = {
  count: 0
};

app.config.globalProperties.$methods = {
  increment() {
    this.$data.count++;
  }
};

// Montar la aplicación en el elemento con id 'app'
app.mount('#app');
