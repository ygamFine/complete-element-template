<template>
  <div class="login">
    <div class="login_window">
      <h1>后台管理系统</h1>
      <div class="login_form">
        <el-form :model="loginForm" ref="loginRef" status-icon :rules="rules">
          <el-form-item prop="username">
            <el-input
              placeholder="用户名"
              prefix-icon="el-icon-lx-people"
              clearable
              v-model="loginForm.username">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              type="password"
              clearable
              prefix-icon="el-icon-lx-lock"
              v-model="loginForm.password">
            </el-input>
          </el-form-item>
        </el-form>
        <p>
          <el-checkbox v-model="loginForm.rememberPassword">记住密码</el-checkbox>
          <span class="right forget_password">忘记密码?</span>
        </p>
        <p><el-button type="primary" @click="loginSystem">登录</el-button></p>
      </div>
    </div>
    <div class="website_info">
      <a href="http://www.jnaw.top" target="_blank">济南奥维信息科技公司</a>
      <p>©2016 AllView. All rights reserved.</p>
    </div>
  </div>
</template>
<script>

import { signInInt } from '@/api/api';
import * as pl from '@/public/js/public';
export default {
  data () {
    return {
      // 登录表单
      loginForm: {
        // 用户名
        username: '',
        // 密码
        password: '',
        // 是否记住密码
        rememberPassword: false,
      },
      rules: {
        username: [
          { validator: this.formVerification, trigger: 'blur' }
        ],
        password: [
          { validator: this.formVerification, trigger: 'blur' }
        ]
      }
    }
  },
  created() {

  },
  mounted() {
    // 初始化 登录
    this.init();
  },
  methods: {
    init() {
      //表单
      let loginForm = this.loginForm;
      // 判断 账号密码 是否存在 cookie 内
      if(pl.getCookie('username') && pl.getCookie('password')){
        // cookie 取出账号赋值
        loginForm.username = pl.getCookie('username');
        // cookie 取出密码赋值
        loginForm.password = pl.getCookie('password');
        // cookie 取出记住密码的状态赋值
        loginForm.rememberPassword = true;
      }
    },
    // 登录
    loginSystem() {
      // 进行表单验证
      this.$refs.loginRef.validate((valid) => {
        if (!valid){
          pl.message('必填项为空',2);
          return;
        }
        let loginForm = this.loginForm;
        // 登录所需参数
        let datas = {
          username : this.loginForm.username,
          password: this.loginForm.password
        }
        // 登录通讯开启
        signInInt(datas).then(res => {
          if (res.code) {
            // 如果选中记住密码
            if(loginForm.rememberPassword){
              //保存帐号到cookie，有效期7天
              pl.setCookie('username',loginForm.username.trim(),7);
              //保存密码到cookie，有效期7天
              pl.setCookie('password',loginForm.password.trim(),7);
            }else{
              // 删除 cookie 中的 账号
              pl.delCookie('username');
              // 删除 cookie 中的 密码
              pl.delCookie('password');
            }
            // 提示语
            pl.message(res.message);
            // 登录成功 进入首页
            console.log(this);
            this.$router.push({ path: '/home' });
          }else{
            // 提示语
            pl.message(res.message,2);
          }
        })
      });
    },
    // 表单验证
    formVerification(rule, value, callback) {
      // 如果是用户名
      if (rule.field == 'username') {
        if (!value) {
          return callback(new Error(' '));
        }
      }else if (rule.field == 'password') {
        if (!value) {
          return callback(new Error(' '));
        }
      }
      callback();
    }
  }

}
</script>

<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
  }
  .login_window {
    width: 450px;
    margin: 0px auto;
    padding-top: 150px;
    h1 {
      font-size: 24px;
      text-align: center;
      padding: 20px 0;
  }
    i {
      font-size: 18px;
  }
  }
  .login_form {
    padding: 20px 50px;
    button {
      width: 100%;
      margin: 10px 0;
  }
  }
  .login_form .el-input,
  .login_form p {
    margin: 0px 0;
  }
  .forget_password {
    font-size: 14px;
    color: #4896ec;
    cursor: pointer;
    &:hover {
      color: #75b0f0;
  }
  }
  .website_info {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 20px;
    a,
    p{
      font-size: 14px;
      color: #999;
      &:hover{
        text-decoration: underline;
      }
    }

  }

</style>
