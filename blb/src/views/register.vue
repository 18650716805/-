<template>
  <div class="register">
    <div class="back">
        <router-link to="/"><img src="../assets/back.png" alt=""></router-link>
    </div>
    <div id="logo">
        <img src="../assets/2便利宝app注册界面.png" alt="">
    </div>
    <div id="login">
        <div class="login-group username">
            <input type="text" placeholder="请输入账号" v-model="username">
        </div>
        <div class="login-group password">
            <input type="password" placeholder="密码" v-model="password">
        </div>
    
        <div class="login-btn" @touchstart='register'>
            注册
        </div>
        <div class="login-register">
            <span class="forget">注册即视为同意<a href=""> 便利宝App用户协议</a></span>

        </div>
    </div>
  </div>
</template>
<script>

import { Register } from "../components/common/api.js";
import { loginsuccess } from "../components/common/until.js";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    register() {
      //          var tel=this.username.trim()
      // var email=this.password.trim()
      // var username1=this.username.trim()
      // let password1= this.password.trim()
      // var reg=/^1+[3-9]+[0-9]{9}$/i
      // var regemail=/^[A-Za-z\d]+([-_.|A-Za-z\d]{3,})@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      // var regqq=/^[\d]+[0-9]{5,}@([A-z\d]+[-.])+[a-z]{2,4}$/
      if (this.username == "" || this.password == "") {
        alert("请输入需要注册的账号密码");
        return;
      }
      // if(!reg.test(tel)){
      //     alert('请输入正确的手机号码')
      //     return
      // }
      // if(!regemail.test(email)){
      //     alert('请输入邮件地址')
      //     return
      // }
      let that=this
      Register({
        username: this.username,
        password: this.password
      }).then(function(data) {
        
        if (data.data.code == 0) {
     
          loginsuccess("注册成功");
           that.$router.push('/');
        } else if (data.data.code == 200) {
       
          loginsuccess("用户名存在");
         
        }
      });
    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ffa11b;
}
.back {
  position: absolute;
  top: 0.933rem;
  left: 0;
  width: 100%;
  padding-left: 15px;
}

.back a img {
  width: 0.467rem;
  height: 0.467rem;
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
  margin-top: 0.733rem;
  color: #fff;
  letter-spacing: 2px;
  font-size: 0.507rem;
}
.login-register {
  width: 100%;
  font-size: 0.333rem;
  color: #fff;
  margin-top: 0.4rem;
  text-align: center;
}
</style>

