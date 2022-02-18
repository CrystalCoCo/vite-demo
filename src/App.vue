<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import request from "@/utils/request.js"
// import { onMounted } from 'vue';

//   onMounted(() => { 
//     request('/api/getList').then(res => {
//       console.log(res);
//     })
//   });
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view />
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
