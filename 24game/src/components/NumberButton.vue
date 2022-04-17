<script setup>
import {ref,computed,onUpdated,onMounted} from 'vue'
defineEmits(['NumberMe'])
const prop = defineProps({
    items: {
        type: [Array, Object],
        require: true
    },
    isDisabled: {
        type: Boolean,
        default: true
    }
})
// const disabled = ref(false)
// // const disableChoose = computed(() => {
// //     console.log(disabled.value);
// //     return disabled.value = prop.isDisabled
// // })
// // onUpdated(() => console.log(disabled.value))
// onMounted(() => {
//     alert("Game is start")
//     })
// const status = ref([false,false,false,false])
// const changeStatus = (index) => {
//     status.value[index] = !status.value[index]
// }
</script>

<template>
<p>Number Generator</p>
    <div class="grid-container">
        <div v-for="(item, index) in prop.items" :key="index">
            <div class="grid-number">
                {{ item }}
            </div>
            <button class="button-color" @click="$emit('NumberMe', item.toString())">{{ "Choose" }} </button>
            
        </div>
    </div>
</template>

<style>
.grid-container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 150px;
    justify-content: center;
}
.grid-number {
    display: grid;
    border: 2px solid rgba(0, 0, 0, 1);
    border-color: #6C4A3F;
    padding: 20px;
    font-size: 40px;
    color: #6C4A3F;
    font-family: "Red Hat Display";
    text-align: center;
    background-color: #EFD6E5;
    outline: 2px solid #8c8eb8;
    margin: 0px 15px 30px 15px;
}
.button-color {
    background-color: #EFD6E5;
    color: #6C4A3F;
    font-family: "Red Hat Display";
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    width: 150px;
    height: 50px;
    border: 2px solid #785346;
    border-radius: 25px;
}
.button-color:disabled {
    background-color: #E33434;
}
.button-color:hover {
  background-color: #f79ed4;
  opacity: 0.8;
}
</style>