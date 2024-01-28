<script setup>
import { ref, defineEmits,computed } from 'vue';

///////////VARIABLES///////////////

const emits = defineEmits('datosTransaccion');
const concepto = ref('');
const input = ref('');
const addTransaccion = computed(() => {
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
