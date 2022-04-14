<script setup>
import{ onUnmounted } from 'vue'
defineEmits(['randomNumbers'])
onUnmounted(() => {
    alert("Game is start")
    })
</script>
 
<template>
    <button class="stButton" @click="$emit('randomNumbers')">
        Start
    </button>
</template>

<style>
/* .stButton {
  background-color: #067D46; 
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
} */
.stButton {
  border: none;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black; 
  border: 2px solid #4CAF50;
  border-radius: 25px;
}

.stButton:hover {
  background-color: #067D46;
  color: white;
  opacity: 0.6;
}
</style>