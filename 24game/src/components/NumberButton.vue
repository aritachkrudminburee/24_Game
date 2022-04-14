<script setup>

defineEmits(['NumberMe'])
defineProps({
    items: {
        type: [Array, Object],
        require: true
    }
})
</script>

<template>
<h2>Number Generator</h2>
    <div class="grid-container">
        <div v-for="(item, index) in items" :key="index">
            <div class="grid-number">
                <button class="button-color" @click="$emit('NumberMe', item.toString())">{{ item }}</button>
            </div>
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
    border-color: #ababab;
    padding: 20px;
    font-size: 30px;
    font-family: "Trebuchet MS";
    text-align: center;
    background-color: #FFFFFF;
    outline: 2px solid #8c8eb8;
    margin: 50px;
    border-radius: 15px;
}
.button-color {
    background-color: #FCEC90;
    width: 60px;
    height: 40px;
    border: 1px solid;
    border-radius: 10px;
}
</style>