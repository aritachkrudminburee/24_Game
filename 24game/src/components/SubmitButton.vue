<script setup>
defineEmits(['submit'])
</script>
 
<template>
    <button @click="$emit('submit')">submit</button>
</template>
 
<style>
</style>
