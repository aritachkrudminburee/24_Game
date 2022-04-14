<script setup>
defineProps({
  historys: {
    type: Array,
    require: true
  }
})
</script>

<template>
  <div>
    <h1>History List</h1>
    <ul>
      <div v-for="(history, index) in historys" :key="index">
        round :{{ history.id }}, Number : {{ history.number }}, result: {{ history.result }}
      </div>
    </ul>
  </div>
</template>

<style></style>