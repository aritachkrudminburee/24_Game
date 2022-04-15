<script setup>
import{ onUnmounted } from 'vue'
defineEmits(['randomNumbers'])

</script>
 
<template>
    <button class="randButton" @click="$emit('randomNumbers')">
        Random
    </button>
</template>

<style>
.randButton {
  width: 150px;
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

.randButton:hover {
  background-color: #6C4A3F;
  opacity: 0.8;
}
</style>