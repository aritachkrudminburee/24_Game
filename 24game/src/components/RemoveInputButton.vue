<script setup>
defineEmits(['removeI'])
</script>
 
<template>
    <button @click="$emit('removeI')">Remove input</button>
</template>
 
<style>
</style>