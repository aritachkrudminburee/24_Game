
<script setup>
import { ref , onBeforeMount } from 'vue'
import HistoryList from '../components/HistoryList.vue'
const history = ref([])
//Get
onBeforeMount(async () => {
  await getHistory()
})

const getHistory = async () => {
  const res = await fetch('http://localhost:5000/history')
  if (res.status === 200) {
    history.value = await res.json()
    console.log(history.value)
    return history.value
  } else console.log('error, cannot get notes')
}

const removehis = async (id) => {
  const res = await fetch(`http://localhost:5000/history/${id}`, {
    method: 'DELETE'
  })
   if (res.status === 200) {
    history.value = history.value.filter((history) => history.id !== id)
    console.log('deleted successfully')
  } else console.log('error, cannot delete data')
}

</script>
<template>
    <HistoryList :historys="history" @removehistory="removehis" />

</template>

<style>
</style>