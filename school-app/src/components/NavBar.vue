<template>
  <div class="nav-bar van-hairline--top">
    <ul class="nav-list">
      <router-link tag="li" class="nav-list-item active" to="realTime">
        <i class="iconfont icon-shishi"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="warning"> 
        <van-icon class="iconfont icon-jingbao" name="shopping-cart-o"  />
        <span>警报</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="monitor">
        <i class="iconfont icon-shipin"></i>
        <span>监控</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="user">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>  
export default {
   
}
</script>

<style lang="less" scoped >
  @import '../common/style/mixin';
  .nav-bar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 5px 0;
    z-index: 1000;
    background: #fff;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    .nav-list {
      width: 100%;
      .fj();
      flex-direction: row;
      padding: 0;
      .nav-list-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        text-align: center;
        color: #666;
        &.router-link-active {
          color: @primary;
        }
        i {
          text-align: center;
          font-size: 22px;
        }
        .icon-jingbao:before{
          content: "\e643" !important;
        }
        span{
          font-size: 12px;
        }
        .van-icon-shopping-cart-o {
          margin: 0 auto;
          margin-bottom: 2px;
        }
      }
    }
  }
</style>
