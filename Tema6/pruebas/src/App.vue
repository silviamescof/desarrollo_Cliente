<script setup>
import { ref , reactive} from 'vue'

  const miNombre = 'Silvia'
  const miEdad = 31;
  const selector = 'azul'
  let contador= ref(0);
  const miColor = ref('azul');

  const decremento = ()=>{
    contador.value--;
    if(contador < 0){
      miColor.value='rojo'
    }
  }
  const incremento = ()=>{
    contador.value++;
    if(contador > 0 && contador<5){
      miColor.value='blue'
    }else{
      miColor.value='green'
    }
  }

  function saludar(nombre){
    alert(`Hola ${nombre}`)
  }

</script>

<template>
  <h1 :class="miColor">El valor del contador es {{contador }}</h1>
  <button @click="incremento">incrementar</button>
  <button @click="decremento">decrementar</button>
</template>

<style scoped>
.azul{
  color:blue;
}
.red{
  color:red;
}
.verde{
  color:green
}
 
</style>
