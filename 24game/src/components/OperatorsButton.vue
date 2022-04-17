<script setup>

defineEmits(['operatorMe'])
const operators = ['+', '-', '*', '/','(',')']
</script>
 
<template>
<h2>Operators</h2>
    <div class="grid-container">
        <div v-for="(item, index) in operators" :key="index">
                <button class="button-color" @click="$emit('operatorMe', item)">{{ item }}</button>
        </div>
    </div>
</template>
 
<style>
.grid-container {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
}
</style>