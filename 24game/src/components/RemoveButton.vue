<script setup>
import{ onUnmounted } from 'vue'
defineEmits(['removeN'])
onUnmounted(() => {
    alert("Game is end")
    })
</script>
 
<template>
    <button class="rmButton" @click="$emit('removeN')">Remove</button>
</template>
 
<style>
.rmButton {
  background-color: #067D46; /* Green */
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.8;
  transition-duration: 0.1s;
  cursor: pointer;
  border: 2px solid #067D46;
  border-radius: 25px;
}


.rmButton:hover {
  background-color: #067D46;
  color: white;
  opacity: 0.6;
}
</style>