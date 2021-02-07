<template>
  <div class="login"> 
    <div class="login-back">
      <div class="login-body ">
          <van-form @submit="onSubmit">
            <div class="login-body-title">
              <div class="van-ellipsis">智慧校园</div>
              <div class="van-ellipsis">工地安全监测系统</div>
            </div>
            <van-field
              v-model="username"
              name="username"
              label="账号"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="登录密码"
            />
            <div style="margin: 16px;">
              <van-button round block color="#1baeae" native-type="submit" >登录</van-button>
            </div>
          </van-form>
      </div>
    </div> 
  </div>
</template> 

<script>
import { login } from '../service/user'
import { setLocal } from '@/common/js/utils'
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {  
    async onSubmit(values) {   
      try{
        const { data } = await login({
          "username": values.username,
          "password": values.password
        })  
        setLocal('token', data.token)
        // 更换界面
        window.location.href = '/'
      }catch(error){
        console.log('异常抛出。。。',error.message);
      }
    },
  }
}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .login {
    .login-back { 
      overflow: hidden;
      position: fixed;
      width:100%;
      height:100%;
      background: url("../img/loginImg.jpg") no-repeat;
      background-size:cover;
      .login-body {
        .center; 
        text-align: center;
        padding: 0 20px; 
        height: 47vh;
        width: 90%;
        box-shadow: 0 0 28px -2px #333333;
        background: rgba(0,0,0,0.5);
        .van-form{
          width: 50%;
          .center; 
        }
        .login-body-title{
          font-size: 20px;
          font-weight: 800;
          font-family: cursive;
          color: #ffffff;
        }
        .van-cell{ 
          background: none;
          span,input{
            font-size: 12px;
            color: #ffffff;
          }
          .van-field__label{
            width: 50px;
          }
        } 
      }   
    } 
  }
 
</style>
