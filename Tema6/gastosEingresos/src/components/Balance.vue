<script setup>
    import { defineProps } from 'vue'; 

    let propiedadesHeredas= defineProps({
        total:Number
    })
</script>

<template>
    <h4>Your Balance</h4>
    <h1 id="balance">{{total.toFixed(2)}}€</h1>

</template>

<style scoped>

</style>
