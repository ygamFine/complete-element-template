<template>
    <div class="main">
      <el-container class="container">
        <el-aside style="width: initial;">
          <div class="home_logo">
            <i class="el-icon-picture-outline" v-if="isCollapse"></i>
            <p v-else>济南奥维信息科技</p>
          </div>
          <!--text-color="#fff"-->
          <!--active-text-color="red"-->
          <el-menu class="el-menu-vertical"
                   @open="handleOpen"
                   @close="handleClose"
                   background-color="#0C2540"
                   text-color="#fff"
                   active-text-color="red"
                   :collapse="isCollapse">
            <!-- 一级菜单渲染 -->
            <router-link v-for="(item,index) in menuList"
                         v-if="!item.ishide && item.leaf"
                         :to="item.children[0].path"
                         :key="index">
              <!-- 一级菜单标题 -->
              <el-menu-item :index="String(index)">
                <i class="el-icon-lx-home"></i>
                <span slot="title">{{ item.name }}</span>
              </el-menu-item>
            </router-link>
            <!-- 存在二级菜单的渲染 -->
            <el-submenu v-for="(item,index) in menuList"
                        v-if="!item.ishide && !item.leaf"
                        :index="String(index)">
              <!-- 一级展开栏 -->
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{ item.name }}</span>
              </template>
              <!--二级菜单组-->
              <el-menu-item-group>
                <router-link v-for="(m,i) in item.children" :to="m.path" :key="i">
                  <el-menu-item index="1-1" >{{m.name}}</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <!--顶部栏-->
          <el-header class="header_home" style="height: 50px;">
            <div class="menu_switch">
              <i class="el-icon-lx-sort" @click="isCollapse = !isCollapse"></i>
            </div>
            <div class="header_action_bar">
              <ul>
                <li><i class="el-icon-lx-full"></i></li>
                <li>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      张赟<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>个人中心</el-dropdown-item>
                      <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
                <li><i class="el-icon-lx-moreandroid"></i></li>
              </ul>
            </div>
          </el-header>
          <el-main>
            <!--面包屑-->
            <bread-crumbs-bar></bread-crumbs-bar>
            <!--二级路由入口-->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>

    </div>
</template>
<script>
import breadCrumbsBar from '@/components/common/breadCrumbs/breadCrumbs'

export default {
    components: {
      breadCrumbsBar
    },
    data(){
      return {
        // 菜单折叠
        isCollapse: false,
        // 菜单列表
        menuList: []
      }
    },
    created() {
      // 获取菜单列表
      this.getMenuList();
    },
    mounted() {

    },
    methods: {
      getMenuList() {
        // 获取路由列表
        let routerList = this.$router.options.routes;
        // 列表赋值
        this.menuList = routerList;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped lang="scss">

  $background_menu: #0C2540;
  $background_head: #2E4F70;
  .container{
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .el-aside{
      background-color: $background_menu;
    }
    .home_logo{
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: $background_menu;
      text-align: center;
      font-size: 16px;
      color: #fff;
      border-bottom: 1px solid #0C231D;
      i,img{
        font-size: 20px;
        color: #fff;
      }
    }
    .header_home{
      width: 100%;
      height: 20px;
      background-color: $background_head;
      display: flex;
      justify-content: space-between;
      .header_action_bar{
        height: 100%;
        display: flex;
        align-items: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        ul{
          width: 100%;
          height: 100%;
          display: flex;
          li{
            padding: 0 15px;
            line-height: 50px;
            color: #fff;
            i{
              font-size: 18px;
              cursor: pointer;
              position: relative;
              top: 2px;
            }
            .el-dropdown-link{
              color: #fff;
              margin-left: 20px;
              i{
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    .menu_switch{
      width: 30px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        font-size: 22px;
        cursor: pointer;
        color: #fff;
      }
    }
    .el-menu-vertical{
      border-right: 1px solid #545c64;
      background-color: $background_menu;
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 220px;
    }
    .el-main{
      padding: 0;
    }


  }
  .el-menu-item-group__title{
    padding: 0 !important;
  }
  .el-menu-item.is-active {
    background-color: #0f1e31 !important;
  }
</style>
