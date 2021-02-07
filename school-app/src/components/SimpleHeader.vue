<template>
  <header class="simple-header">
    <div class="simple-header-ellipse">

    </div>
    <i v-if="!noback" class="iconfont icon-zuobian" @click="goBack"></i>
    <i v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> 
    <div class="simple-header-sousuo-icon"> 
      <i class="iconfont icon-sousuo" @click="showPopup"></i>
    </div> 
    <van-popup
      v-model="showSearch"
      closeable
      close-icon-position="top-right"
      position="right"
      :style="{ height: '100%' }"
      class="simple-header-search"
    >
      <div class="simple-header-search-box">
        <div class="simple-header-search-top">
          <div class="search-top-title"> 学校类别 </div>
          <div class="search-top-term">
            <van-dropdown-menu>
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
          </div>
        </div>
        <div class="simple-header-search-center"></div>
        <div class="simple-header-search-bottom">
          <van-button round type="info">查询</van-button>
        </div>
      </div>
    </van-popup>
  </header>
</template>

<script>
export default {
  props: { 
    back: {
      type: String,
      default: ''
    },
    noback: {
      type: Boolean,
      default: false
    }
  }, 
  data(){
    return{
      showSearch: false,     
      value1: 0,
      option1: [
        { text: '全部', value: 0 },
        { text: '新款', value: 1 },
        { text: '活动', value: 2 },
      ],
    }
  }, 
  methods: {
    showPopup(){
      this.showSearch = true;
    },
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .simple-header {
    .fj();
    .wh(100%, 44px);
    line-height: 44px;
    padding: 0 10px;
    .boxSizing();
    margin: auto; 
    overflow: hidden;
    .simple-header-ellipse{
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
    .simple-header-name {
      font-size: 14px;
    }
    .simple-header-sousuo-icon{
      i{
        font-size: 14px;
        padding: 2px;
      }
    }
    .simple-header-search{
      > i{
        font-size: 14px;
        top: 10px;
        right: 10px;
      }
      .simple-header-search-box{
        margin-top: 32px;
        .simple-header-search-top{
          .fj();
          font-size: 12px;
          height: 30px;
          .search-top-title{
            line-height: 30px;
            margin-left: 10px; 
            margin-right: 10px; 
          }
          .search-top-term{
            width: 100px;
            .van-dropdown-menu__bar{
              height: 30px;
              box-shadow: none;
              .van-dropdown-menu__title{
                font-size: 12px;
              }
            }
          } 
          span{
            font-size: 10px;
          }
        }
        .simple-header-search-bottom{
          position: fixed;
          bottom: 0;
          width: 100%;
          text-align: center;
          button{
            width: 100%;
            font-size: 12px;
            height: 28px;
          }
        }
      }
    }
  }
</style>
