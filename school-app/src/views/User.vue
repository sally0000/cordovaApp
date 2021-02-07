<template>
  <div class="user-box">
    <header class="user-header wrap">
      <div class="user-name"> 
        <div class="user-bag">
          <div class="user-img">
              <img src="http://s.yezgea02.com/1604040746310/aaaddd.png"/>
              <div>
                <div class="user-img-name">{{ user.username }}</div>
                <div class="user-img-name2">{{ user.roles[0] }}</div>
              </div>
          </div>
          <div class="user-info">
            <div class="info">
              <div class="user-desc">
                <span class="user-desc-num1">4</span>
                <span class="name">总监测设备数</span>
              </div>
              <div class="user-desc">
                <span class="user-desc-num2">3</span>
                <span class="name">安全监测</span>
              </div>
              <div class="user-desc">
                <span class="user-desc-num3">1</span>
                <span class="name">环境监测</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> 
    
    <div class="user-list">
      <van-cell is-link to="" >
        <template title>
          <i class="iconfont icon-gongcheng" style="color:#8D93E0"></i>
          <span class="custom-title">工程关注</span>
        </template>
      </van-cell>
      <van-cell is-link to="" >
        <template title>
          <i class="iconfont icon-huanjing" style="color:#50be77"></i>
          <span class="custom-title">环境警报历史信息</span>
        </template>
      </van-cell>
      <van-cell is-link to="" >
        <template title>
          <i class="iconfont icon-anquanjinggaox" style="color:#8D93E0"></i>
          <span class="custom-title">安全警报历史信息</span>
        </template>
      </van-cell>
      <van-cell is-link to="about" >
        <template title>
          <i class="iconfont icon-zhishu" style="color:#58b756"></i>
          <span class="custom-title">环境警报指数说明</span>
        </template>
      </van-cell>
      <van-cell is-link to="" @click="showOverlay = true">
        <template title>
          <i class="iconfont icon-xiugaimima1" style="color:#A4A4A4"></i>
          <span class="custom-title">修改密码</span>
        </template>
      </van-cell>
      <van-cell is-link to="" @click="showPopup = true">
        <template title>
          <i class="iconfont icon-tuichu1" style="color:#A4A4A4"></i>
          <span class="custom-title">退出登录</span>
        </template>
      </van-cell>
    </div> 
    <div class="user-edition">
      Version 1.0.1
    </div>
    <!-- 修改密码遮罩层 -->
    <van-overlay :show="showOverlay" @click="showOverlay = false">
      <div class="user-wrapper" @click.stop>
        <div class="user-block" >
          <van-icon class="user-close" name="cross" @click="showOverlay = false"/>
          <van-form @submit="onSubmit">
            <van-field                    
              maxlength="20"
              :type="oldType?'password':'text'"
              v-model="oldPassword"  
              name="oldPassword"       
              placeholder="原密码"
              class="pwd-input"
            >  
              <van-icon slot="right-icon" v-if="!oldType" @click="changeSeen1(oldType)" name="browsing-history" />
              <van-icon slot="right-icon" v-else @click="changeSeen1(oldType)" name="closed-eye"/>
            </van-field>
            <van-field                    
              maxlength="20"
              :type="newType?'password':'text'"
              v-model="newPassword"        
              name="newPassword"   
              placeholder="新密码"
              class="pwd-input"
            >  
              <van-icon slot="right-icon" v-if="!newType" @click="changeSeen2(newType)" name="browsing-history" />
              <van-icon slot="right-icon" v-else @click="changeSeen2(newType)" name="closed-eye"/>
            </van-field>
            <van-field                    
              maxlength="20"
              :type="ConfirmType?'password':'text'"
              v-model="confirmPassword"   
              name="confirmPassword"      
              placeholder="确认密码"
              class="pwd-input"
            >  
              <van-icon slot="right-icon" v-if="!ConfirmType" @click="changeSeen3(ConfirmType)" name="browsing-history" />
              <van-icon slot="right-icon" v-else @click="changeSeen3(ConfirmType)" name="closed-eye"/>
            </van-field>
            <div style="margin: 16px;">
              <van-button round block color="#8D93E0" native-type="submit" >提交</van-button>
            </div>
          </van-form>
        </div>
      </div>
    </van-overlay>
    <!-- 圆角弹窗 -->
    <van-popup
      v-model="showPopup"
      round
      position="bottom" 
    >
      <div class="user-popup">
        <span>退出系统后， 你将不再收到任何消息</span>
        <van-divider />
        <van-button type="default" class="user-popup-affirm" @click="logOut">确认</van-button>
        <div class="user-popup-cut"></div>
        <van-button type="default" @click="showPopup = false">取消</van-button>
      </div>
    </van-popup>
    <nav-bar></nav-bar>
    
  </div>
</template>

<script> 
import navBar from "@/components/NavBar" 
import { booleanVlue, setLocal} from '@/common/js/utils'
import { Toast } from 'vant'
import { logout, register, getUserInfo } from '../service/user'
export default {
  components: {
    navBar
  },
  data(){
    return{
      user: {},
      showOverlay: false,    
      showPopup: false,
      type:"password",  
      typeOldPassword:"password",
      eyeIconOldPassword:false,
      typeNewPassword:"password",
      eyeIconNewPassword:false,
      oldPassword:'',
      newPassword:'',
      confirmPassword:'',
      oldType:true,  
      newType:true,  
      ConfirmType:true,  
    }
  },
  async mounted() {
    try{
      const { data } = await getUserInfo()
      this.user = data
    }catch(error){
      console.log('异常抛出。。。',error.message);
    }
  },
  methods: {  
    //点击图标看密码
    changeSeen1(types){
       this.oldType = booleanVlue(types);
    },
    changeSeen2(types){
       this.newType = booleanVlue(types);
    },
    changeSeen3(types){
      this.ConfirmType = booleanVlue(types);
    },
    async logOut() {
      const { errcode } = await logout()
      if (errcode == 0) {
        setLocal('token', '')
        this.$router.replace("/login");
      }
    },
    async onSubmit(values) {  
      try{
        await register({
          "oldPassword": values.oldPassword,
          "newPassword": values.newPassword,
          "username": "admin"
        })   
        Toast.success('密码修改成功！')
      }catch(error){
        console.log('异常抛出。。。',error.message);
      }
    }
  }, 
}
</script>

<style lang="less" >
  @import '../common/style/mixin'; 
  .user-box {
    background: #FCFDFF;
    .user-header { 
      width: 100%; 
      margin: auto; 
      overflow: hidden;  
      height: 200px;
      .user-name{
        position: relative;
        width: 100%; 
        height: 120px; 
        text-align: center; 
        &::after{
          opacity: 0.4; 
          width: 140%; 
          height: 120px; 
          position: absolute; 
          left: -20%; 
          top: 0; 
          z-index: 0; 
          content: ''; 
          border-radius: 0 0 50% 50%; 
          background: linear-gradient(45deg, @primary, #7a80ce);
        }
      }
      .user-bag{
          width: 80%; 
          background: #fff; 
          box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.33);
          .borderRadius(10px);
          .cl;
          top: 60px;
          z-index: 1;
        .user-img{
          height: 40px; 
          text-align: center; 
          position: relative;
          top: -25px;
          img {
            .wh(40px, 40px);
            border-radius: 50%;
            margin-top: 5px;
          }
          > div{   
            line-height: 18px;
          }
          .user-img-name{
            font-size: 16px;
            font-weight: 700;
          }
          .user-img-name2{
            font-size: 12px;
            font-weight: 700;
          }
        }
        .user-info {
          margin: 10px;
          height: 60px;
          margin-top: 20px;
          .info {
            .fj;
            width: 100%;
            height: 100%;
            padding: 8px 10px;
            .boxSizing();
            .user-desc {
              text-align: center;
              display: flex;
              flex-direction: column;
              color: #333333;
              span { 
                font-size: 12px;
                padding: 2px 0;
              }
              .user-desc-num1{
                color: rgba(67, 207, 124, 1);
              }
              .user-desc-num2{
                color:  rgba(255, 195, 0, 1);
              }
              .user-desc-num3{
                color:rgba(232, 86, 86, 1);
              }
            }
          }
        }
      }


    } 
    .user-list {
      background: #fff;
      .van-cell{
        padding: 6px;
        i{
          font-size:16px;
          margin:0 6px 0 6px;
          vertical-align: middle;
        }
      }
      span {
        font-size: 12px;
      }
    }
    .user-edition{
      font-size: 14px;
      color: #BDBDBD;
      position: absolute;
      float: right;
      right: 20px;
      bottom: 60px;
    }
    .user-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    } 
    .user-block {
      .user-close{
        float: right;
        margin: 12px 12px 0px 12px;
      }
      .van-form{
        margin: 7px;
        .van-cell__title{
          width: 56px;
        } 
        .pwd-input > input{
          font-size: 14px;
        }
      }
      background-color: #fff;
      border-radius: 10px;
    }
    .user-popup{
      font-size: 14px;
      text-align: center;
      .van-divider{
        margin: 4px 0 0 0;
        border-color: #969784;
      }
      span{
        font-size: 12px;
        line-height: 28px;
        color: rgb(133, 133, 133);
      }
      div{
        line-height: 26px;
      }
      .user-popup-affirm{
        span{
          color: #f01414; 
        }
      }
      .van-button{
        width: 100%;
        border: none;
      }
      .user-popup-cut{
        width: 100%;
        height: 5px;
        background: #55545410;
      }
    }
  }
</style>
