<script setup>
  import { defineProps, defineEmits } from 'vue';

  ////////////VARIABLES/////////////////////////
  const props = defineProps({
    transaccion: Array,
    index: Number
  });
  const esPositivo = props.transaccion[1] >= 0 ? 'esPositivo' : '';
  const emits = defineEmits('eliminar');

  ///////////////////FUNCIONES//////////////////
  const ordenDeEliminar = (index) => {
    emits('eliminar', index)  
  };

</script>

<template>
  <ul id="list" class="list">
    <li v-if="esPositivo" class="plus">
      {{ props.transaccion[0]?  props.transaccion[0] : 'CASH' }} <span>${{ Math.abs(props.transaccion[1]) }}</span
      ><button class="delete-btn">x</button>
    </li>
    <li v-else class="minus">
      {{ props.transaccion[0]?  props.transaccion[0] : 'PAIMENT' }} <span>-$ {{ Math.abs(props.transaccion[1]) }}</span>
      <button @click="ordenDeEliminar(props.index)"  class="delete-btn">x</button>
    </li>
  </ul>
</template>
