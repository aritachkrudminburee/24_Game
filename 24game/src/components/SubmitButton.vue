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

.submitButton:hover {
  background-color: #067D46;
  color: white;
  opacity: 0.6;
}
</style>
