<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--   <HelloWorld></HelloWorld>-->
<!--    <Index></Index>-->
<!--    <Login></Login>-->
    <router-view> </router-view>
  </div>
</template>

<script>

import HelloWorld from "./components/HelloWorld";
import  Index from "./components/view/Index";
import Login from "./components/view/Login";
export default {
  name: 'App',
  // components: {HelloWorld: HelloWorld,Index:Index,Login:Login},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
