<script setup>

defineEmits(['submit'])
defineProps({
    inputs: {
        type: String,
    }
})

</script>
 
<template>
    <button @click="$emit('submit')">submit</button>
</template>
 
<style>
</style>
