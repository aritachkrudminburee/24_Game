<script setup>
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
      </div>
    </ul>
  </div>
  </div>
</template>

<style>
.historyList {
    font-family:"Red Hat Display";
    font-size: 20px;
    line-height: 35px;
}
.wrapper {
  background-color: #F5F2EA;
  margin: 20px 500px 0 500px;
  padding: 10px;
}
</style>