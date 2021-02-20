<template>
  <div class="realTime-box">
    <s-header :noback="true" :back="'/realTime-search'"></s-header> 
    <r-body/>
    <nav-bar/>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader"
import rBody from "@/views/RealTime/RealTimeBody"
import navBar from '@/components/NavBar' 
export default {
  name: "RealTime",
  components: {
    sHeader,
    rBody,
    navBar
  },
  props: { 
  },
  data() {
    return {
      
    }
  },
  mounted() { 
  },
  methods: {  
     
  }
};
</script>

<style lang="less" > 
 @import '@/common/style/mixin';
  .realTime-box{
    background: #FAFAFA;  
  }

</style>
