<template>
  <div id="app">
    <router-view to="/login"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  }
}
</script>

<style>
  html,
  body,
  #app{
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
  }
</style>
