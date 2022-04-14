<script setup>

defineEmits(['operatorMe'])
const operators = ['+', '-', '*', '/','(',')']
</script>
 
<template>
<h2>Operators</h2>
    <div class="grid-container">
        <div v-for="(item, index) in operators" :key="index">
            <div class="grid-number">
                <button class="button-color" @click="$emit('operatorMe', item)">{{ item }}</button>
            </div>
        </div>
    </div>
</template>
 
<style>
</style>