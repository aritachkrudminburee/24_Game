<script setup>
import NumberButton from "../components/NumberButton.vue"
import OperatorsButton from "../components/OperatorsButton.vue"
import SubmitButton from "../components/SubmitButton.vue"
import RemoveButton from '../components/RemoveButton.vue'
import RemoveInputButton from '../components/RemoveInputButton.vue'
import { ref, computed, onUpdated , } from 'vue'
import { useRoute,useRouter  } from 'vue-router'
const appRouter = useRouter()
let { params } = useRoute()
const input = ref('');
const inputAns = ref('');
const testValue = ref('');
const numbers = ref([]);
const status = ref(false)
const statusSummit = ref(false)
const result = ref('')
const continueHis = () => {
 numbers.value.push(parseInt(params.Number1));
 numbers.value.push(parseInt(params.Number2));
 numbers.value.push(parseInt(params.Number3));
 numbers.value.push(parseInt(params.Number4));
    status.value = true;
    console.log(numbers.value)
}
const editHistory = async () => {
    addInput();
  const res = await fetch(`http://localhost:5000/history/${params.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
  body: JSON.stringify({ number: numbers.value, result: result.value })
    })
  await res.json()
appRouter.push({name: 'historylist' })
};
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
    console.log(a)
    console.log(b)
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
            result.value = "WIN"
        }
        else {
            result.value = "LOSE"
        }
    }
    else {
        result.value = "Error use incomplete numbers "
    }
    alert(result.value)
}
const sumAns = computed(() => {
    return eval(inputAns.value);
})
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
onUpdated(() => checkvalue())
</script>
<template>
    <div>
        <h1 align="center">24 Game</h1>
        <p v-if="!status">
        <button class="stButton" @click="continueHis">Start To Retry</button>
        </p>
        <div v-else-if="status">
            <NumberButton :items="numbers" @NumberMe="cal($event) ;" /> <br/>
            <RemoveButton @removeN="resetNum()" />
            <h2>Your Answer </h2>
            <input type="text" v-model="input" style="width: 350px; height: 40px" /> &nbsp; &nbsp;
            <span v-if="input !== ''">
                <RemoveInputButton @removeI="remove() ; " />
            </span> &nbsp;
            <span v-if="statusSummit">
                <SubmitButton @submit="editHistory()" />
            </span>
            <OperatorsButton @operatorMe="cal($event) ;  " />
        </div>
        <h4 v-show="sumAns">Your result of previous answer {{ sumAns }}</h4>
    </div>
</template>

<style>
#app {
    text-align: center;
    /* margin-top: 50px; */
}
</style>