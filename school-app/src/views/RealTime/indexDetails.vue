<template>
  <div class="realTime-details">
    <header class="realTime-details-header">
        <div class="realTime-details-header-ellipse">
        <div class="realTime-details-header-back">
            <i class="iconfont icon-zuobian" @click="goBack"></i>
        </div> 
        </div> 
    </header>
    <div class="realTime-body">
        <div class="realTime-body-figure">
            <div class="figure-top">
                <div class="figure-top-name">扬尘噪音监测（储能中学）</div>
                <div class="figure-top-time">2020-02-18 16:58:20</div>
            </div>
            <div class="figure-content">
                <div class="figure-content-one">
                    <div class="figure-content-pm">
                      <div class="box-top">
                        <div class="box-top-num">23</div>
                        <div class="box-top-nuit">
                          <div>差</div>
                          <div>ug/m3</div>
                        </div>
                      </div>
                      <div class="box-down">PM2.5</div>
                    </div>
                    <div class="figure-content-pm">
                      <div class="box-top">
                        <div class="box-top-num">23</div>
                        <div class="box-top-nuit">
                          <div>差</div>
                          <div>ug/m3</div>
                        </div>
                      </div>
                      <div class="box-down">PM10</div>
                    </div> 
                </div>
                <div class="figure-content-two">
                    <div class="figure-content-tsp"> 
                      <div class="figure-content-pm">
                        <div class="box-top">
                          <div class="box-top-num">37</div>
                          <div class="box-top-nuit">
                            <div>差</div>
                            <div>ug/m3</div>
                          </div>
                        </div>
                        <div class="box-down">TSP</div>
                      </div> 
                    </div> 
                    <div class="figure-content-box">
                        <div class="box-center">
                          <div>
                            <div class="box-top-num">40.4</div>
                            <div>优 (db)</div>
                            <div class="box-down">噪音</div>
                          </div>
                        </div>
                        <div class="box-center">
                          <div>
                            <div class="box-top-num">40.4</div>
                            <div>优 (0C)</div>
                            <div class="box-down">温度</div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="figure-content-three">
                    <div class="box-center">
                      <div>
                        <div class="box-top-num">40.4</div>
                        <div>差 (%)</div>
                        <div class="box-down">湿度</div>
                      </div>
                    </div>
                    <div class="box-center">
                      <div>
                        <div class="box-top-num">40.4</div>
                        <div>差 (kpa)</div>
                        <div class="box-down">气压</div>
                      </div>
                    </div> 
                </div>
                <div class="figure-content-four">
                    <div class="figure-content-pm">
                      <div class="box-top">
                        <div class="box-top-num">0</div>
                        <div class="box-top-nuit">
                           <div>优 (m/s)</div>
                        </div>
                      </div>
                      <div class="box-down">风速</div>
                    </div> 
                    <div class="figure-content-pm">
                      <div class="box-top">
                        <div class="box-top-num">0</div>
                        <div class="box-top-nuit">
                          <div>优 (位)</div>
                        </div>
                      </div>
                      <div class="box-down">方向</div>
                    </div> 
                    <div class="figure-content-pm">
                      <div class="box-top">
                        <div class="box-top-num">11</div>
                        <div class="box-top-nuit">
                          <div>良 (级别)</div>
                        </div>
                      </div>
                      <div class="box-down">风力</div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="realTime-body-eacher">
            动图--eacher
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RealTimeDetails",
  components: {
  },
  props: { 
    noback: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  mounted() { 
  },
  methods: {  
    goBack(){
      this.$router.go(-1)
    },
  }
};
</script>

<style lang="less" > 
 @import '@/common/style/mixin';
  .realTime-details{
    background: #FCFDFF;  
    .realTime-details-header-ellipse{
        position: relative;
        width: 100%; 
        height: 44px; 
        text-align: center; 
        .realTime-details-header-back{
        position:absolute;
        .fj();
        .wh(100%, 44px);
        line-height: 44px;
        padding: 0 10px;
        .boxSizing();
        z-index: 1; 
        } 
    } 
    .realTime-body{ 
      .cl; 
      > div{ 
        width: 350px;
        height: 213px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.49);
        border-radius: 8px;
        margin-bottom: 10px;  
      }
      .realTime-body-figure{
        > div{
          padding: 6px 6px;
        }
        .figure-top{
          .fj();
          font-size: 12px;
          height: 28px;
          line-height: 28px;
          .figure-top-name{
            width: 144px;
            color: rgba(166, 166, 166, 1);
          }
          .figure-top-time{
            width: auto; 
            background-color: rgba(255, 255, 255, 1);
            border: 1px solid rgb(241 143 143 / 53%);
            border-radius: 6px;
            color: rgba(255, 87, 51, 1); 
            text-align: center;
            padding: 0 4px 0 4px;
          }
        }
        .figure-content{
          .fj();
          height: 160px; 
          .figure-content-one{
            width: 109px;
             .fj();
             .ff();
            > div{
              width: 109px; 
              background-color: rgb(227 195 205 / 48%);
              border-radius: 8px; 
              height: 76px;
            } 
            .box-top-num{
              font-size: 32px;  
            }
            .box-down{ 
              font-size: 14px;  
            }
          }
          .figure-content-two{
            width: 89px;
            .fj();
            .ff();
            .figure-content-tsp{ 
              width: 89px;
              height: 60px;
              background-color: rgb(227 195 205 / 48%);
              border-radius: 6px;
              .box-top-num{
                font-size: 26px;  
              }
              .box-down{ 
                font-size: 14px;  
              }
            }
            .figure-content-box{ 
              display: flex;
              .ff(row nowrap);
              .fj(); 
              > div{ 
                width: 43px;
                height: 92px;
                background-color:rgb(180 227 136 / 44%);
                border-radius: 6px;  
              } 
            }
          } 
          .figure-content-three{
            width: 46px; 
            .fj();
            .ff();
            > div{
              width: 46px; 
              background-color:rgb(227 195 205 / 48%);
              border-radius: 6px;
              height: 78px;
            }
          }
          .figure-content-four{
            width: 78px;
            .fj();
            .ff();
            > div{
              width: 78px;
              height: 50px;
              background-color: rgb(180 227 136 / 44%);
              border-radius: 6px;
            }
            .figure-content-pm .box-top{
              margin: 4px auto 0px auto;
              .box-top-num{
                font-size: 18px; 
                font-weight: 600; 
                .aCenter;
              }
              .box-top-nuit{
                line-height: 26px;
              }
             }
            .figure-content-pm .box-down{ 
              font-size: 14px;  
              font-weight: 600; 
              width: 56px
            }
          }
          .figure-content-pm{
            .ff();
            .box-top{
              margin: 10px auto 0px auto;
              .fj();  
              .box-top-nuit{
                margin-left: 2px;
              }
            }
            .box-down{
              margin: 0 auto;
              width: 69px; 
              font-weight: 600;
            }
          }
          .box-center{ 
            .aCenter();
            .box-top-num{
              font-size: 18px; 
              font-weight: 600; 
            }
            .box-down{ 
              font-size: 14px;  
              font-weight: 600; 
            }
          }
        }
      }
    }
  }

</style>
