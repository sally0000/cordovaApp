<template>
  <body class="realTime-body">
    <van-pull-refresh 
      v-model="isLoading" 
      @refresh="onRefresh"
      class="realTime-body-pull"
    >
      <!-- 无数据时的展示 --> 
      <div class="empty" v-if="noData">
        <div class="title">空空如也。</div>
      </div>

      <van-list  
        v-else
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"  
	  	  error-text="加载失败，请重试"
        @load="onLoad"
      >
        <div 
          class="realTime-body-content"  
          v-for="(item,index) in reakTimeData"
          :key="index"
          @click="realTimeDetail(item)"
        >
          <div class="realTime-body-content-tp">
              <!--  -->
            <img :src="prefix(item.dataValuePath)" />
            <!-- <img src="//ds.js.design/assets/img/6018e4916e7c88195a92cf8e.png" /> -->
            <div class="realTime-body-content-tpText">
              <div>工程项目：{{ item.projectName }}</div>
              <div>学校名称：{{ item.schoolName }}</div>
              <div>地址：{{ item.schoolAddress }}</div>
            </div>
          </div>
          <div class="realTime-body-content-bt">                      
            <div class="bt-Text">{{ item.deviceName }}</div>
            <div class="bt-Time">
              <div class="bt-Time-hour">更新时间:{{ item.updateTime ? item.updateTime : "00:00" }}</div>
              <div class="bt-Time-state" v-if="item.isOnline == 1" style="color: rgba(47, 156, 90, 1);">在线</div>
              <div class="bt-Time-state" v-else style="color: rgba(255, 87, 51, 1);">离线</div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh> 
  </body>
</template>

<script>
import { getFollowMonitorDevice } from '@/service/realTime'
import { Toast } from 'vant'
export default {
  props: { 
    data: {
      type: Object,
      default: () => {}
    },
  }, 
  data(){
    return{   
      isLoading: false,// 是否处于加载中状态
      loading: false,
      finished: false,// 是否已加载完成 
      pageIndex: 1, // 当前页码
      pageSize: 10, // 分页条数
      total: 0, // 查询总条数
      reakTimeData:[],
      noData: false, // 如果没有数据，显示暂无数据
    }
  }, 
  methods: { 
    getInfo (){
        // Toast.loading({
        //   message: '加载中...',
        //   forbidClick: true
        // }); 
        getFollowMonitorDevice({
            "pageNum":this.pageIndex,
            "pageSize":this.pageSize,
            "keyWordDevOrPro":this.data ? this.data.keyWordDevOrPro : '',
            "onlineStatus":this.data ? this.data.onlineStatus : '',
            "userKey":  localStorage.getItem('userKey')
        })
        .then(res => {  
            // 数据小于10条，已全部加载完毕finished设置为true
            if (res.data.list.length < this.pageSize) {
            this.finished = true;
            } 

            // 如果加载完毕，显示没有更多了
            if (res.data.list.length === 0 && this.pageIndex === 1) {
            this.finished = true;
            this.loading = false;
            this.noData = true
            }
            
            // fix第二页数据未加载完成就强制下拉刷新，导致上一次的第二页的数据跑到这一次第一页的数据的前面的bug
            if (this.pageIndex == res.data.pageNum) {
            this.pageIndex = res.data.pageNum + 1;
            this.reakTimeData = this.reakTimeData.concat(res.data.list); 
            // Toast.clear();
            }   
            // 当请求成功
            this.loading = false

        })
        .catch(error => {
            console.log(error)
        });
    }, 
    onLoad() {  // 上拉列表加载更多 
      this.loading = true;  
      this.getInfo();
    }, 
    onRefresh() { //向下刷新
      // 清空列表数据
      this.pageIndex = 1;
      this.reakTimeData = [];
      this.finished = false;// 滚动加载完成 
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = false;
      this.isLoading = false
      this.noData = false
      this.onLoad();
    }, 
    realTimeDetail(item) {
      this.$router.push({ path: `realTime-detail/${item.deviceId}` })
    },
  }
}
</script>

<style lang="less">
  @import '@/common/style/mixin';
    .realTime-body{
        .realTime-body-pull{
            height: calc((100vh - 168px));
            overflow: hidden;
            overflow-y: scroll;
            .realTime-body-content{
                margin: 0 auto;
                margin-top: 10px;
                .borderRadius(8px);
                width: 315px;
                height: 100px;
                padding: 8px;
                background-color: rgba(255, 255, 255, 1);
                border: 1px solid rgba(255, 255, 255, 1);
                box-shadow:0 0.42667rem 0.8rem rgb(115 126 140 / 27%); 
                .realTime-body-content-tp{
                .fj(); 
                img{
                    .wh(66px,50px); 
                    .borderRadius(5px);
                    border: 1px solid rgba(255, 255, 255, 1);
                } 
                .realTime-body-content-tpText{ 
                    .wh(240px,77px);
                    color: rgba(0, 0, 0, 1);
                    font-size: 12px;
                }
                }
                .realTime-body-content-bt{
                .fj();  
                .bt-Text{
                    .wh(165px,31px);
                    color: rgba(165, 173, 173, 1);
                    font-size: 12px;
                    line-height: 20px;
                }
                .bt-Time{
                    .fj(); 
                    .bt-Time-hour{
                    width: 110px;
                    .wordBreak;
                    height: 20px;
                    line-height: 24px;
                    margin-right: 10px;
                    color: rgba(163, 158, 158, 1);
                    line-height: 24px;
                    text-align: right;
                    }
                    .bt-Time-state{
                    .wh(35px,20px);
                    line-height: 22px;
                    background-color: rgba(255, 255, 255, 1);
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
                    .borderRadius(4px); 
                    text-align: center;
                    opacity: 0.6;
                    }
                }
                }
            } 
        }
    } 
</style>
