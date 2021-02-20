<template>
  <div class="about">
    <s-header ></s-header>
    <div class="about-body">
      <img class="intro-img" src="" alt="">
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
export default {
  components: {
    sHeader
  },
}
</script>

<style lang="less" scoped>
  .about {
    box-sizing: border-box;
    .intro-img {
      width: 100%;
    }
    .about-body {
      margin-top: 44px;
      font-size: 16px;
      a {
        color: #007fff;
      }
    }
  }
</style>
