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
          <router-link :to="{
            name: 'Retry', params: {
              id: history.id,
              Number1: history.number[0].toString(), Number2: history.number[1].toString(), Number3: history.number[2].toString(), Number4: history.number[3].toString()
            }
          }
          ">
            continue</router-link>
        <button @click="$emit('removehistory', history.id)">Delete</button>
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
  margin: 20px 500px 0 500px;
  padding: 10px;
}
</style>
