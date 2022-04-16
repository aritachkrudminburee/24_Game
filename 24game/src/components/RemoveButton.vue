<script setup>
import{ onUnmounted } from 'vue'
defineEmits(['removeN'])
</script>
 
<template>
    <button class="rmButton" @click="$emit('removeN')">Reset</button><br/>
</template>
 
<style>
.rmButton {
  width: 150px;
  height: 50px;
  text-align: center;
  font-size: 22px;
  font-family: "Ribeye";
  margin: 60px 2px 0px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #6C4A3F;
  color: white;
  border: 2px solid #6C4A3F;
  border-radius: 25px;
}


.rmButton:hover {
  background-color: #6C4A3F;
  opacity: 0.8;
}
</style>