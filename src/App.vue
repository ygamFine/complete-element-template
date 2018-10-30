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
    // 进行用户设备判断
    let equipment = window.navigator.userAgent;
    // Mac OS
    let macOS = equipment.indexOf('Mac OS');
    // Windows
    let win = equipment.indexOf('windows');
    if (macOS > -1) {
      // 引入 富文本所需要的 mac os 字体
      require('./public/css/font.mac.css');
    }
    if (win > -1) {
      // 引入 富文本所需要的 windos 字体
      require('./public/css/font.win.css');
    }
  },
  mounted() {
  },
  methods: {
  },
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
