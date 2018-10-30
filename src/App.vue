<template>
  <div id="app">
    <router-view to="/login"/>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style>
  /*引入 富文本所需要的 windos 字体*/
  @import './public/css/font.win.css';
  /*引入 富文本所需要的 mac os 字体*/
  @import './public/css/font.mac.css';

  html,
  body,
  #app{
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
  }
</style>
