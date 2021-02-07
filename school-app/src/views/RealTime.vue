<template>
  <div class="realTime-box">
    <s-header :name="'实时'" :noback="true"></s-header>
    <div class="realTime-body">
      <van-pull-refresh 
        v-model="isLoading" 
        success-text="刷新成功" 
        @refresh="onRefresh" 
      >
        <p>刷新次数: {{ count }}</p>
      </van-pull-refresh>
    </div>
    <nav-bar />
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader"
import navBar from '@/components/NavBar'

export default {
  name: "RealTime",
  components: {
    sHeader,
    navBar
  },
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
        console.log('我刷新了!!'+this.count+'次');
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped> 
  .realTime-box{
    background: #FAFAFA;
    .realTime-body{
      margin-top: 44px;
      height: calc((100vh - 98px));
      // overflow: hidden;
      // overflow-y: scroll;
      .van-pull-refresh{
        overflow: hidden;
        -webkit-user-select: none;
        user-select: none; 
        height: 192px;
      }
    }
  }

</style>
