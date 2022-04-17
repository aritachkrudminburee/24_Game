<script setup>
import NumberButton from "../components/NumberButton.vue"
import OperatorsButton from "../components/OperatorsButton.vue"
import RandomButton from "../components/RandomButton.vue"
import SubmitButton from "../components/SubmitButton.vue"
import RemoveButton from '../components/RemoveButton.vue'
import RemoveInputButton from '../components/RemoveInputButton.vue'

import { ref, computed, onUpdated } from 'vue'

////////////////////////////////////// ห้ามเเก้ของเก่า ////////////////
const input = ref('');
const inputAns = ref('');
const testValue = ref('');
const dataError = [1111, 1678, 3467]
const numbers = ref([]);
const status = ref(false)
const statusSummit = ref(false)
const history = ref([])
const result = ref('')
/////fetch

// POST
const createNewhistory = async () => {
    addInput();
    const res = await fetch('http://localhost:5000/history', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ number: numbers.value, result: result.value })
    })
    if (res.status === 201) {
        const addedhistory = await res.json()
        history.value.push(addedhistory)
        console.log('added sucessfully')
    } else console.log('error, cannot be added')
    resetNum();
}

////

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
    status.value = true;
    console.log(numbers.value)
}

const resetNum = () => {
    numbers.value = []
    input.value = ''
    inputAns.value = ''
    testValue.value = ''
    status.value = false
    statusSummit.value = false
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
        input.value = ''
        isError.value = true
    }
    console.log(checkNum.sort())
    if (checkArray(reCheckNum.sort(), checkNum.sort()) !== -1) {
        if (24 == eval(inputAns.value)) {
            result.value = "win"
        }
        else {
            result.value = "lose"
        }
    }
    else {
        result.value = "Error! use incomplete numbers."
    }
    alert(result.value)
}
const sumAns = computed(() => {
    return eval(inputAns.value);
})
//////////////////////////////////////


const cal = (a) => { input.value = input.value + a }

const remove = () => { input.value = input.value.slice(0, -1) }

const checkvalue = () => {
    try {
        if (input.value === "") { return statusSummit.value = false; }
        eval(input.value)
        justNumbers(input.value);
    } catch (err) {
        return statusSummit.value = false;
    }
    return statusSummit.value = true;
}

//////////// lift cycle
// onBeforeMount(() => alert("onBeforeMount")) 
// onMounted (() => alert("onMounted"))
// onBeforeUpdate(() => alert("onBeforeUpdate" + input.value))
onUpdated(() => checkvalue())

const checkDisabled = computed(() => {
    let num1 = numbers.value.toString().trim()
    let input1 = input.value.trim()
    let strCheck = num1.includes(input1)
    console.log(num1);
    console.log(input1);
    console.log(strCheck);
    if(input1 == ""){
        console.log("input false log");
        return false
    } else {
        if(strCheck){
            console.log("Yay");
            return true
        } else {
            console.log("sad");
            return false
        }
    }
})
/////////////
</script>
<template>
    <div>
        <h1 align="center">24 Game</h1>
        <p v-if="!status">
        <p>Click To Button To Start The Game</p>
        <RandomButton @randomNumbers="randomNum()" />
        </p>
        <div v-else-if="status">
            <NumberButton :isDisabled="checkDisabled.value" :items="numbers" @NumberMe="cal($event) ;" />
            <!-- input.value.includes(numbers.value.toString()) -->
            <RemoveButton @removeN="resetNum()" />
            <h2>Your Answer </h2>
            <input type="text" v-model="input" style="width: 350px; height: 40px" /> &nbsp; &nbsp;
            <span v-if="input !== ''">
                <RemoveInputButton @removeI="remove() ; " />
            </span> &nbsp;
            <span v-if="statusSummit">
                <SubmitButton @submit="createNewhistory()" />
            </span>
            <OperatorsButton @operatorMe="cal($event) ;  " />
        </div>
        <!-- <h4 v-show="sumAns">Your result of previous answer {{ sumAns }}</h4> -->
    </div>
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
