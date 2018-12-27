<template>
    <div class="login">
        <div id="logo">
            <img src="../assets/2便利宝app注册界面.png" alt="">
        </div>
        <div id="login">
            <div class="login-group username">
                <input type="text" placeholder="请输入账号 / 用户名" v-model="username">
            </div>
            <div class="login-group password">
                <input type="password" placeholder="密码" v-model="password">
            </div>
           <div class="login-btn" @click="login">
                登录
            </div>
            <div class="login-register">
                <span class="forget"><a href=""> 忘记密码？</a></span>
                <span class="register">还没有账号？<router-link to="/register">注册</router-link></span>
            </div>
        </div>
        <div id="foot">
            <p>第三方登录</p>
            <div class="login-other">
                <div class="qq"></div>
                <div class="wechat"></div>
                <div class="sina"></div>
            </div>
        </div>
    </div>
</template>

<script>

import {Login} from "../components/common/api.js";
import {loginsuccess} from "../components/common/until.js";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {

    login() {
      
      let that = this
      Login({   
        username: this.username,
        password: this.password
     
      }).then(function(data) {
    
    
      
        if (data.data.code == 0) { 
           let th=that
          localStorage.token = data.data.data._token;
          loginsuccess("登录成功", function() {
         
            th.$router.push("/home")
          //  window.location.href='home'
          });
        }else{
          loginsuccess('登录失败',() => {
                localStorage.clear()
            })
         
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ffa11b;
}

#logo {
  width: 3.413rem;
  height: 3.413rem;
  border-radius: 50%;
  position: absolute;
  top: 2rem;
}

#logo img {
  width: 3.413rem;
  height: 3.413rem;
}

#login {
  width: 6.467rem;
  height: 5.16rem;
}

::-webkit-input-placeholder {
  color: #1e2625;
}
.username {
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #778f8d;
  background: url("../assets/username.png") no-repeat 8px 8px;
  background-size: 0.667rem;
}
.password {
  border-radius: 0 0 4px 4px;
  background: url("../assets/password.png") no-repeat 8px 8px;
  background-size: 0.667rem;
}

.login-group {
  width: 100%;

  padding: 0;

  padding-left: 1.067rem;
  background-color: #fff;
}

input {
  color: #00a0e9;
  /* width: 100%; */
  height: 1.267rem;
  border: none;
  outline: none;
}
.login-btn {
  widows: 100%;
  height: 1.2rem;
  background: #da851a;
  line-height: 1.2rem;
  text-align: center;
  border-radius: 4px;
  margin-top: 0.467rem;
  color: #fff;
  letter-spacing: 2px;
  font-size: 0.507rem;
}
.login-register {
  width: 100%;
  font-size: 0.333rem;
  color: #fff;
  margin-top: 0.267rem;
}
.login-register span {
  display: inline-block;
}
.login-register span a {
  color: #fff;
}
.login-register .forget {
  float: left;
}
.login-register .register {
  float: right;
}
#foot {
  width: 6.467rem;
  height: 2.4rem;
  position: absolute;
  bottom: 0.667rem;
  font-size: 0.333rem;
  color: #fff;
}
#foot p {
  width: 80%;
  text-align: center;
  background: url("../assets/第三方登录.png") no-repeat center;
  background-size: 5rem;
  margin: 0;
  margin-bottom: 0.8rem;
  position: relative;
  left: 24px;
}
.login-other {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.login-other div {
  width: 1.267rem;
  height: 1.267rem;
  border: 1px solid #fff;
  padding: 4px;
  border-radius: 50%;
}
.login-other .qq {
  background: url("../assets/login-QQ.png") no-repeat center;
  background-size: 0.667rem;
}
.login-other .wechat {
  background: url("../assets/login-wechat.png") no-repeat center;
  background-size: 0.667rem;
}
.login-other .sina {
  background: url("../assets/login-sina.png") no-repeat center;
  background-size: 0.667rem;
}
</style>
