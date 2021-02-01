<template>
  <div class="warning-box">
    <header class="warning-header wrap">
      <i class="iconfont icon-More"></i>
      <div class="warning-name">
        <span class="app-name">警报</span> 
      </div>
      <i class="iconfont icon-More"></i>
    </header>
    <nav-bar />
  </div>
</template>

<script>
import navBar from '@/components/NavBar'

export default {
  name: "Warning",
  components: {
    navBar
  }
};
</script>

<style lang="less" scoped>
  @import '../common/style/mixin';
  .warning-box {
    .warning-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      .fj();
      .wh(100%, 44px);
      line-height: 44px;
      padding: 0 10px;
      .boxSizing();
      color: #252525;
      background: #fff;
      border-bottom: 1px solid #dcdcdc;
      .warning-name {
        font-size: 14px;
      }
    }
  }
</style>
