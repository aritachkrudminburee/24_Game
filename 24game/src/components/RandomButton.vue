<script setup>
defineEmits(['randomNumbers'])
</script>
 
<template>
    <button @click="$emit('randomNumbers')">
        Random
    </button>
</template>
 
<style>
</style>
