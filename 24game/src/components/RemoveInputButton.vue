<script setup>
defineEmits(['removeI'])
</script>
 
<template>
    <button class="rmInputButton" @click="$emit('removeI')">Remove input</button>
</template>

<style>
.rmInputButton {
  background-color: #FF2400; /* Green */
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 1.0;
  transition-duration: 0.1s;
  cursor: pointer;
  border: 2px solid #FF2400;
  border-radius: 25px;
}

.rmInputButton:hover {
  background-color: #FF2400;
  color: white;
  opacity: 0.6;
}
</style>