<script setup>
import { ref, computed } from 'vue';

import { defineProps , defineEmits} from 'vue'; 


const props = defineProps({
    cosa:Object,
    index:Number
})
const emits= defineEmits(['incrementar'])
const incrementarNota = (nota, index) =>{
    
    emits('incrementar', nota , index)
}

</script>

<template>
    <div class="display">
        <button class="boton">
            {{ cosa.ropa }} {{ cosa.marca }}
        </button>
        <div class="estrellas">
            <span v-for="index in cosa.nota" :key="index">
                <img src="./../../public/estrella.png" alt="estrella">
            </span>
        </div>
        <span v-for="(e, index) in cosa.nota">   
    </span>
    <button @click="incrementarNota(cosa.nota, index)">+</button>
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
