<script setup>
import NumberButton from "./components/NumberButton.vue"
import OperatorsButton from "./components/OperatorsButton.vue"
import RandomButton from "./components/RandomButton.vue"
import SubmitButton from "./components/SubmitButton.vue"
import RemoveButton from './components/RemoveButton.vue'
import RemoveInputButton from './components/RemoveInputButton.vue'

import { ref, computed } from 'vue'

////////////////////////////////////// ห้ามเเก้ของเก่า ////////////////
const input = ref('');
const inputAns = ref('');
const dataError = [1111, 1678, 3467]
const isError = ref(false);
const numbers = ref([]);
const randomNum = () => {
  while (numbers.value.length < 4) {
    var r = Math.floor(Math.random() * 9) + 1;
    if (numbers.value.indexOf(r) === -1) numbers.value.push(r);
    console.log(r)
  }
  for (let i = 0; i < dataError.length; i++) {
    let myFunc = num => Number(num);
    var intArr = Array.from(String(dataError[i]), myFunc);
    console.log(intArr)
    if (checkArray(intArr.sort(), Array.from(numbers.value).sort()) === 1) { numbers.value = []; randomNum(); }
  }
  console.log(numbers.value)
}

const resetNum = () => {
  numbers.value = []
  input.value = ''
  isError.value = false
  inputAns.value = ''
}

const addInput = () => {
  inputAns.value = input.value
  console.log(inputAns.value)
  check()
}
const justNumbers = (string) => {
  var numsStr = string.replace(/[^0-9]/g, '');//รับแค่ String 0-9 ออกมานอกเหนือจากนั้นให้ลบไปโดยใช้ ''
  return parseInt(numsStr);//ส่ง String ที่ได้มากลับ แต่เปลี่ยนเป็นตัวเลขก่อนค่อยส่งกลับ
}
const checkArray = (arraya, arrayb) => {
  let a = arraya;
  let b = arrayb;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return -1
    }
  }
  return 1
}
const check = () => {
  console.log(numbers.value)
  try {
    var reCheckNum = Array.from(numbers.value)
    console.log(reCheckNum)
    console.log(eval(inputAns.value));//เปลี่ยนจาก String ที่ได้มาจาก input ที่กรอกเป็น สมการ แล้วแสดงออกมา
    var number = justNumbers(inputAns.value);
    console.log(number);
    var checkNum = Array.from(number.toString()).map(Number)//เปลี่ยนค่าใน array ให้กลายเป็น ตัวเลข
  }
  catch (err) {
    alert("Error for input value")
    input.value = ''
    isError.value = true
  }
  console.log(checkNum.sort())
  if (checkArray(reCheckNum.sort(), checkNum.sort()) !== -1) {
    if (24 == eval(inputAns.value)) {
      alert("win")
      isError.value = false
    }
    else {
      alert("Lose")
      isError.value = false
    }
  }
  else {
    alert("Error for value number")
    isError.value = true
  }
  input.value = ''
}
const sumAns = computed(() => {
  return eval(inputAns.value);
})
//////////////////////////////////////


const cal = (a) => { input.value = input.value + a ,alert("you choose : " + a)}

const remove = () => { input.value = input.value.slice(0, -1)}


</script>
<template>
  <div>
    <h1 align="center">Hello</h1>
    
    <RandomButton @randomNumbers="randomNum()" />
    <NumberButton :items="numbers" @NumberMe="cal($event)" />
    <RemoveButton @removeN="resetNum()" />
    <OperatorsButton @operatorMe="cal($event)" />
    <RemoveInputButton @removeI="remove()"/>

    <h4>Your Answer :</h4>
    <input type="text" v-model="input" />
  </div>

    <SubmitButton @submit="addInput()" />

  <h4 v-show="sumAns">Your result of previous answer {{ sumAns }}</h4>
  <p
    v-show="isError"
  >Your input is not number in random set or have duplicate number, please input again</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>