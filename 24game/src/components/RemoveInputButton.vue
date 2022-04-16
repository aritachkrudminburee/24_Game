<script setup>
defineEmits(['removeI'])
</script>
 
<template>
    <button class="rmInputButton" @click="$emit('removeI')">Remove input</button>
</template>

<style>
.rmInputButton {
  width: 200px;
  height: 50px;
  text-align: center;
  font-size: 22px;
  font-family: "Ribeye";
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: #896B60;
  border: 2px solid #6C4A3F;
  border-radius: 25px;
}
.rmInputButton:hover {
  background-color: #6C4A3F;
  opacity: 0.8;
}
</style>