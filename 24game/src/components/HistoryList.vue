<script setup>
defineEmits(['removehistory'])
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
    <div class="wrapper">
      <ul>
        <div class="historyList" v-for="(history, index) in historys" :key="index">
          <p> ROUND : {{ history.id }} , Number Set : {{ history.number }} , RESULT : {{ history.result }} </p>
          <router-link class="hisButton" :to="{
            name: 'Retry', params: {
              id: history.id,
              Number1: history.number[0].toString(), Number2: history.number[1].toString(), Number3: history.number[2].toString(), Number4: history.number[3].toString()
            }
          }
          ">
            Retry</router-link>
        <button class="hisButton" @click="$emit('removehistory', history.id)">Delete</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<style>
.historyList {
  font-family: "Red Hat Display";
  font-size: 20px;
  line-height: 35px;
}

.wrapper {
  background-color: #F5F2EA;
  margin: 20px 400px 0 400px;
  padding: 10px;
}
.hisButton {
  text-align: center;
  font-size: 18px;
  font-family: "Red Hat Display";
  margin: 4px 50px 0 0px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: #896B60;
  border: 2px solid #6C4A3F;
  border-radius: 10px;
  padding: 5px 15px;
}
.conButton:hover {
  background-color: #6C4A3F;
  opacity: 0.8;
}
</style>
