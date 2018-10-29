<template>
  <div class="bread_crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item,index) in realList"
        :to="{ path: item.path }"
        :key="index">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: [],
  data(){
    return {
      realList: []
    }
  },
  watch:{
    $route(){
      // 路由改变 重新赋值
      this.realList = this.$route.meta;
    }
  },
  created() {
    // 路由加载赋值
    this.realList = this.$route.meta;
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
