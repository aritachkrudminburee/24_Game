<script setup></script>

<template>
  <div>
    <div>
      <router-link class="navBar" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="navBar" :to="{ name: 'Profile' }">Profile</router-link>
      <router-link class="navBar" :to="{ name: 'game' }">Play</router-link>
      <router-link class="navBar" :to="{ name: 'historylist' }">History</router-link>
      <router-link class="navBar" :to="{ name: 'Member' }">Members</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
a {
  color: gray;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  font-family: "Red Hat Display";
  cursor: pointer;
}
.navBar:hover {
  background-color: #896B60;
}
.navBar:active {
  background-color: #9c6d5c;
}
</style>
