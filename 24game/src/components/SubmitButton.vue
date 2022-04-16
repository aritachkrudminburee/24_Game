<script setup>
defineEmits(['submit'])
defineProps({
    inputs: {
        type: String,
    }
})
</script>
 
<template>
    <button class="submitButton" @click="$emit('submit')">submit</button>
</template>
 
<style>
.submitButton {
  background-color: #00ba63;
  color: white;
  width: 150px;
  height: 50px;
  text-align: center;
  font-size: 22px;
  font-family: "Ribeye";
  margin: 60px 2px 0px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: 2px solid #00ba63;
  border-radius: 25px;
}
.submitButton:hover {
  background-color: #55faad;
  color: white;
  opacity: 0.6;
}
</style>
