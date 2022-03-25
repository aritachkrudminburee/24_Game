<script setup>
import NumberButton from "./components/NumberButton.vue"
import { ref } from "vue"
const numbers = ref([]);
const randomNum = () => {
  while (numbers.value.length < 4) {
    var r = Math.floor(Math.random() * 9) + 1;
    if (numbers.value.indexOf(r) === -1) numbers.value.push(r);
  }
}
</script>

<template>
  <div>
    <h1 align="center"> Hello </h1>
    <button @click="randomNum">random</button>
    <NumberButton :items="numbers" />
    <p> {{ numbers }} </p>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>