<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <div id="app">
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {

    'app-header':Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
body{
  background:rgb(41, 41, 41);
}
</style>
