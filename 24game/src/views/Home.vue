<script setup>

</script>
 
<template>
    <br/>
    <img class="logoImg" src="../assets/logo.png" /> 
    <h1>24 Game</h1>
    <!-- <button class="stButton"><router-link :to="{ name: 'game' }">Play</router-link></button> -->
    <p class="descBox">
        Make the number 24 from the four numbers shown.
        You can add, subtract, multiply and divide.
        Use all four numbers on the card,
        but use each number only once.
        You do not have to use all four operations
    </p>
</template>

<style>
body {
    background-color: #FFC0CB;
}
h1 {
    margin: 45px 0 35px 0;
    color: #6C4A3F;
    font-size: 96px;
    font-family:"Ribeye";
}
h2 {
    color: #6C4A3F;
    font-family:"Ribeye";
}
p {
    font-family:"Red Hat Display";
    font-size: 22px;
    color: #808080;
    text-shadow:-0.7px -0.7px 0 #000,0.7px -0.7px 0 #000,-0.7px 0.7px 0 #000,0.7px 0.7px 0 #000;  
}
.logoImg {
    margin: 10px 0 10px 0;
    border-radius: 50%;
    width: 200px;
}
.stButton {
  background-color: #6C4A3F;
  color: white;
  /* padding: 16px 16px; */
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 150px;
  height: 50px;
  border: 2px solid #6C4A3F;
  border-radius: 25px;
}
.stButton:hover {
  background-color: #896B60;
}
.descBox {
    width: 40%;
    background: #EFD6E5;
    box-shadow: 0 0 6px 1px #FFC0CB;
    align-items: center;
    padding: 16px 16px;
    margin-left: 30%;
    margin-right: 20%;
    position: relative;
}
</style>