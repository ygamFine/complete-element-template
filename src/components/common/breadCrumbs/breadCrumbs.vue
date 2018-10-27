<template>
  <div class="bread_crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: [],
  data(){
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .bread_crumbs{
    width: 100%;
    height: 51px;
    background-color: #fff;
    border-top: 1px solid #f6f6f6;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    display: flex;
    align-items: center;
    padding-left: 25px;
  }
</style>
