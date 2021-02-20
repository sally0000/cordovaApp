<template>
  <header class="modular-header">
    <div class="modular-header-ellipse">
      <div class="modular-header-back">
        <i  class="iconfont icon-zuobian" @click="goBack"></i> 
      </div> 
      <slot></slot>
    </div> 
  </header> 
</template>

<script>
export default {
  props: {   
  }, 
  data(){
    return{     
    }
  }, 
  methods: { 
    goBack(){
      this.$router.go(-1)
    }, 
  }
}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .modular-header { 
    margin: auto; 
    overflow: hidden;
    .modular-header-ellipse{
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
          background: linear-gradient(45deg, @primary, #7a80ce);
        }
        .modular-header-back{
          position:absolute;
          .fj();
          .wh(100%, 44px);
          line-height: 44px;
          padding: 0 10px;
          .boxSizing();
          z-index: 1; 
        } 
        .modular-header-searchs{
          width: 80%;
          height: 38px;
          border: 1px solid rgba(189, 189, 189, 1);
          background-color: rgba(255, 255, 255, 1);
          z-index: 1;
          .center;
          .borderRadius(8px);
          .van-cell{
            border-radius: 8px;
            height: 100%;
            width: 100%;
            padding: 8px;
            .van-field__control{
              font-size: 12px;
            }
          }
        }
    }
    .modular-header-name {
      font-size: 14px;
    }
    .modular-header-sousuo-icon{
      i{
        font-size: 14px;
        padding: 2px;
      }
    } 
  }
</style>
