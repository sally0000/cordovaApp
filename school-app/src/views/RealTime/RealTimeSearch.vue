<template>
  <div class="realTimeSearch-box">
    <m-header> 
        <div class="modular-header-searchs">
            <van-field      
                clearable
                type="text"
                v-model="screeningData.keyWordDevOrPro" 
                placeholder="请输入设备名或项目名。" 
            >  
                <van-icon slot="right-icon" name='search'  @click="onSearch"/>
            </van-field> 
        </div>
    </m-header>
    <div class="screeningBox">
      <m-Screening :title="'在建状态'" :option="option" :value="screeningData.onlineStatus" @child-data="statusSearch"/> 
    </div>
    <r-body :data="screeningData" ref="rBody"/>
  </div>
</template>

<script>
import mHeader from "@/components/Modular" 
import mScreening from "@/components/ModuleScreening" 
import rBody from "@/views/RealTime/RealTimeBody"
import { getCategoryScreen } from "@/service/realTime" 
export default {
  name: "RealTime",
  components: {
    mHeader,
    mScreening,
    rBody
  },
  data() {
    return {  
      option: [],
      screeningData:{
        onlineStatus:'0', //在线状态
        keyWordDevOrPro:"",//关键字
      },
    }
  },
  mounted() {
      this.init();
  },
  methods: {
    async init() {
      try{
        //在建状态下拉框
        const { data } = await getCategoryScreen({ keyword: "EMS_PROJECT_STATUS" })
        data.forEach((item,i)=>{
            let obj = {}
            obj.text = item.name;
            obj.value = item.keyword;
            this.option.push(obj)
        })
      }catch(error){
        console.log('异常抛出。。。',error.message);
      }
    },
    onSearch(){ 
      this.$refs.rBody.onRefresh(); 
    }, 
    statusSearch(data){  
      this.screeningData.onlineStatus  = data; 
      this.$refs.rBody.onRefresh(); 
    }
  }
};
</script>

<style lang="less" scoped> 
  @import '@/common/style/mixin';
  .realTimeSearch-box{
    background: #FAFAFA;
    .screeningBox{
      overflow: scroll;
      width: 100%;
      background-color:#ffffff;
      .fj(space-evenly); 
    }
    .realTimeSearch-body{
      height: calc((100vh - 175px));
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
