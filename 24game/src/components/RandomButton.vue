<script setup>
defineEmits(['randomNumbers'])
</script>
 
<template>
    <button @click="$emit('randomNumbers')">
        Start
    </button>
</template>
 
<style>
</style>
