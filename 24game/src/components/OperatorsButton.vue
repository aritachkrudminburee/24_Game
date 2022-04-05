<script setup>

defineEmits(['operatorMe'])
const operators = ['+', '-', '*', '/','(',')']
</script>
 
<template>
<p>Operators</p>
    <div class="grid-container">
        <div v-for="(item, index) in operators" :key="index">
            <div class="grid-number">
                <button class="button-color" @click="$emit('operatorMe', item)">{{ item }}</button>
            </div>
        </div>
    </div>
</template>
 
<style>
.grid-container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 200px;
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
    background-color: #f2a7be;
    outline: 2px solid #8c8eb8;
    margin: 50px;
}
</style>