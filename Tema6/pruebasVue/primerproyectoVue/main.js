// Importar la biblioteca Vue
import { createApp } from 'vue';

// Definir el componente
const App = {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  template: `
    <div>
      <button @click="increment">
        Count is: {{ count }}
      </button>
    </div>
  `,
};

// Crear una aplicación de Vue
const app = createApp(App);

// Montar la aplicación en el elemento con id 'app'
app.mount('#app');
