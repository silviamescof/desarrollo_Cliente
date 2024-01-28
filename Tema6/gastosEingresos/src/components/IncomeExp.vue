<script setup>
import { defineProps } from 'vue'; 

const props = defineProps({
    gastos:Number,
    ingresos:Number
})
</script>

<template>
  <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">+{{props.ingresos.toFixed(2)}}€</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">{{props.gastos.toFixed(2)}}€</p>
        </div>
      </div>
</template>

<style scoped>

</style>
