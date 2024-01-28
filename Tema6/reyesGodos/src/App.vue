<script setup>
import { ref,computed } from 'vue';
import { productos } from './datos.js';

let contador = ref(0);

const creaUrl = computed(()=>{
  let name= productos[contador.value].nombre.toLocaleLowerCase();
  name = name.replace(/^\w/, (letra) => letra.toUpperCase());
  
  return `https://www.html6.es/img/rey_${name}.png`;
})

const incrementa = () => {
  contador.value++;
  if (contador.value === productos.length) {
    contador.value = 0;
  }
}
</script>

<template>
  <h1>Cena numero {{ contador + 1 }} con el rey Godo {{ productos[contador].nombre }}</h1>
  <h3>Precio de la cena {{ productos[contador].precio }} Euros</h3>
  <div v-if="productos[contador].finDeSemana === true" class="rojo">(Solo Fin de Semana)</div>
  <div v-else class="verde">(De lunes a Viernes)</div>
  <div v-if="productos[contador].precio <= 100">Oferta!!!! Precio con un 10% de descuento. 
    Pagas solo {{ productos[contador].precio*0.9.toFixed(2) }} €!! <img src=""></div>
  <img :src="creaUrl">
  <button @click="incrementa">Siguiente {{ contador + 1 }}/{{ productos.length }}</button>
</template>

<style scoped>
  .rojo{
    border-radius: 25px;
    background-color: red;
    width: 10%;
    padding: 0.5% 0.5%;
    color: white;
  }
  .verde{
    border-radius: 25px;
    background-color: green;
    width: 10%;
    padding: 0.5% 0.5%;
    color: white;
  }
  img{
    margin-top: 3%;
  }
  div{
    margin: 2%;
  }
  
</style>
