<template>
  <div class="view_page home">
    <el-card class="box-card">
      <!--卡片头部-->
      <div slot="header" class="clearfix">
        <div class="">123</div>
        <div class=""><el-button @click="go()">默认按钮</el-button></div>
      </div>
      <!--卡片内容-->
      主体内容
    </el-card>
  </div>
</template>

<script>
  export default {
    mounted() {
    },
    methods: {
      go() {
        this.$router.push({'path': '/test-details'})
      }
    }
  }
</script>

<style>

</style>
