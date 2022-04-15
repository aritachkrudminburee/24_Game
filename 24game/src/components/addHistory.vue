<script setup>import { onUnmounted, computed } from 'vue';

defineEmits(['Add'])
const props = defineProps({
  history: {
    type: Object,
    default: {}
  }
})


const newHistory = computed(() => {
  return {
    id: props.history.id,
    number: props.history.number,
    result: props.history.result
  }
})
console.log(newHistory.value)

</script>
 
<template>
  <button @click="$emit('Add', newHistory.number, newHistory.result)">submit</button>
</template>
 
<style>
</style>
