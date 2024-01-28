<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExp from './components/IncomeExp.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import { ref,computed } from 'vue';

//////////////VARIABLES//////////////////
let total = computed(() => {
  return transacciones.value.reduce((total, [, valor]) => {
    return total + valor;
  }, 0);
});
let gastos = computed(() => {
  return transacciones.value.reduce((total, [, valor]) => {
    return valor <= 0 ? total + valor : total;
  }, 0);
});
let ingresos = computed(() => {
  return transacciones.value.reduce((total, [, valor]) => {
    return valor > 0 ? total + valor : total;
  }, 0);
});
let transacciones = ref([]);

///////////FUNCIONES///////////////////
const quitarTransaccion = (index)=>{
  transacciones.value.splice(index, 1);
}
const anadeTransaccion = (concepto , input) => {
  transacciones.value.push([concepto, input]);
};
</script>

<template>
  <div>
    <Header></Header>
    <Balance :total="total"></Balance>
    <IncomeExp :gastos="gastos" :ingresos="ingresos"></IncomeExp>
    <h3>History</h3>
    <div v-for="(transaccion, index) in transacciones" :key="index">
          <TransactionList :transaccion="transaccion" :index="index" @eliminar="quitarTransaccion"></TransactionList>
    </div>
    <AddTransaction @datosTransaccion="anadeTransaccion"></AddTransaction>
  </div>
</template>

<style scoped>
/* Estilos opcionales */
</style>
