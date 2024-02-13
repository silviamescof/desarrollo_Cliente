<script setup>
import { ref, defineEmits,computed } from 'vue';
import { useToast } from 'vue-toastification';

///////////VARIABLES///////////////
//const toast= useToast()
const emits = defineEmits('datosTransaccion');
const concepto = ref('');
const input = ref('');
//funcion para emitir valores al padre//
const addTransaccion = computed(() => {
  /*yo ya he controlado un mensaje predefinido si  no hay concepto pero si queremos hacerlo required podemos mandar notificaciones con Toast
  de la siguiente manera: if(concepto.value)===''{
    toast.error(incluir aqui el mensaje de error)*/
  emits('datosTransaccion', concepto.value, input.value);
  concepto.value = '';
  input.value = '';
});
</script>

<template>
  <form id="form">
    <div class="form-control">
      <label for="text">Text</label>
      <input v-model="concepto" type="text" id="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount">Amount <br />(negative - expense, positive - income)</label>
      <input v-model="input" type="number" id="amount" placeholder="Enter amount..." />
    </div>
    <button @click.prevent="addTransaccion" class="btn">Add transaction</button>
  </form>
</template>

<style scoped>
/* Estilos opcionales */
</style>
