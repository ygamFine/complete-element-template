<template>
  <div class="view_page home">
    <el-card class="box-card">
      <!--卡片头部-->
      <div slot="header" class="clearfix">
        <div class="">TEST</div>
        <div class=""><el-button>默认按钮</el-button></div>
      </div>
      <!--卡片内容-->
      …………
      <div class="arrow"></div>
    </el-card>
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
  .arrow{
    width: 100%;
    height: 900px;
  }
</style>
