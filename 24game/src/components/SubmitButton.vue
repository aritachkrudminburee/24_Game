<script setup>
import { onUnmounted } from 'vue';

defineEmits(['submit'])
onUnmounted (() => alert("cant use submit because input isnt equation"))

</script>
 
<template>

    <button @click="$emit('submit')" >submit </button>
</template>
 
<style>
</style>
