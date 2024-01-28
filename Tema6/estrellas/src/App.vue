<script setup>
import divEstrellas from './components/divEstrellas.vue';
import cosas from './assets/datos'
import { ref, computed } from 'vue'; 

const modificarcosas=(nota, index)=>{

  if(cosas.value[index].nota < 5){
    cosas.value[index].nota = nota +1
  } else {
    cosas.value[index].nota = 1
  } 
}
</script>

<template>
      <div v-for="(cosa, index) in cosas" :key="index">
          <divEstrellas :cosa="cosa" :index="index" @incrementar="modificarcosas"/>
      </div>
</template>

<style scoped>
  .display {
    display: flex;
    align-items: center;
}

.display img {
    width: 15px;
    margin: 1px;
}

.display button {
    margin-right: 20px;
}

.boton {
    width: 165px;
}

.estrellas {
    width: 125px;
    height: 22px;
}
</style>
