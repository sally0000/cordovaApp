<template>
  <div class="modular-Screening"> 
    <van-dropdown-menu>
      <van-dropdown-item :title="title" v-model="currentSearch" :options="option" @change="changeDropdown(currentSearch)"/>
    </van-dropdown-menu> 
  </div> 
</template>

<script>
export default {  
  props: { 
    option: {//下拉内容，文本跟对应值，数组形式
      type: Array,
      default: () => []
    },
    title:{
      type:String,
      default:''
    },
    value: [String,Number],
  }, 
  data(){
    return{   
      currentSearch: this.value, //默认值 
      }
  }, 
  methods: { 
    changeDropdown (node) {
      this.$emit('child-data',node);
    },
  }
}
</script>

<style lang="less">
  @import '../common/style/mixin';
  .modular-Screening { 
    .van-dropdown-menu{
       padding: 2px;
      .van-dropdown-menu__bar{
        box-shadow:none;
      }
      .van-ellipsis,.van-cell__title span{
        font-size: 12px;
      } 
    }
  }
</style>
