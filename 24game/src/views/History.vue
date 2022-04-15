
<script setup>
import { ref , onBeforeMount } from 'vue'
import HistoryList from '../components/HistoryList.vue'
const history = ref([])
const profile = ref([])
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

onBeforeMount(async () => {
  await getProfile()
})

const getProfile = async () => {
  const res = await fetch('http://localhost:5000/profile')
  if (res.status === 200) {
    profile.value = await res.json()
    console.log(profile.value)
    return profile.value
  } else console.log('error, cannot get notes')
}
</script>
<template>
    <HistoryList :historys="history" />
</template>

<style>
</style>