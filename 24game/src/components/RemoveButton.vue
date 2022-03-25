<script setup>
defineEmits(['removeN'])
</script>
 
<template>
    <button @click="$emit('removeN')">Remove</button>
</template>
 
<style>
</style>