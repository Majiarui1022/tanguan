<template>
  <div class="Configiremaxin-menu">
    <div class="Config-tit">
      <span>System</span>
    </div>
    <div class="menu_box">
      <div class="tab_data">
        <div class="tab_data_scroll">
          <table>
        <tbody>
          <tr>
            <td class="Num fl">1</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">2</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">3</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">4</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">5</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">6</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">7</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">8</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">9</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">10</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">11</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">12</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">13</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
          <tr>
            <td class="Num fl">14</td>
            <td class="Name fl">Name</td>
            <td class="Nature fl">Nature</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
      <div class="tab_qie">
<!--        支架   勿删-->
        <div class="cheng">
<!--          选择器-->
          <div class="tab_select">
            <div class="select_System fl but" :class="isSystem == 0?'active':''" v-on:click="changeBg(0)">System</div>
            <div class="select_Pary fl but" :class="isSystem == 1?'active':''" v-on:click="changeBg(1)">Pary</div>
            <div class="select_CAN fl but" :class="isSystem == 2?'active':''" v-on:click="changeBg(2)">CAN</div>
          </div>
          <div class="new_script">新建脚本</div>
<!--            System-->
          <div class="System tab_fix" :class="isSystem == 0?'':'hide'">
            <div class="pro_name">
              <span class="fl">项目名称：</span>
              <input type="text"placeholder="请输入项目名称" class="fl">
            </div>
            <div class="set_time_Num">
              <div class="setTime fl">
                <el-radio v-model="timeORnum" label="0" class="fl">设定时间：</el-radio>
                <input type="number" placeholder="请输入设定时间" class="fl">
              </div>
              <div class="setNum fl">
                <el-radio v-model="timeORnum" label="1" class="fl">设定次数：</el-radio>
                <input type="number" placeholder="请输入设定次数" class="fl">
              </div>
            </div>
            <div class="runFshi">
              <span class="fl">间隔运行</span>
              <el-radio v-model="ONOFF" label="1" class="fl marginR">ON</el-radio>
              <el-radio v-model="ONOFF" label="2" class="fl">OFF</el-radio>
            </div>
            <div class="restTimer">
              <span class="fl">休息时间：</span>
              <input type="text" placeholder="请输入休息时间" class="fl">
            </div>
            <div class="runTimer">
              <span class="fl">运行时间：</span>
              <input type="text" placeholder="请输入运行时间" class="fl">
            </div>
          </div>
<!--          Part-->
          <div class="Part tab_fix" :class="isSystem == 1?'':'hide'">
            <div class="Part_part">
              <span class="fl">Part</span>
              <input type="text" class="Part_Num fl">
              <input type="text" placeholder="请输入名称" class="fl">
            </div>
          </div>
<!--          CAN-->
          <div class="CAN tab_fix" :class="isSystem == 2?'':'hide'">
            <div class="CAN_BOX">
              <span class="fl">Part NO</span>
              <input type="text" class="Part_NO fl">
              <span class="fl">CAN_SEND</span>
              <span class="fl">ID</span>
              <input type="text" class="ID_WEI fl">
              <span class="fl">长度</span>
              <input type="text" class="lang fl">
              <span class="fl">报文</span>
              <input type="text" class="bao_words fl">
              <span class="fl">Timeout(ms)</span>
              <input type="text" class="TimeOut fl">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Configuremain",
      data(){
          return{
            isSystem:0,
            timeORnum:'1',
            ONOFF:'1'
          }
      },
      methods:{
          // 切换选项卡
        changeBg(i){
          this.isSystem = i;
        }
      }
    }
</script>

<style lang="scss" scoped>

  .Configiremaxin-menu{
    height: $height;
    .Config-tit{
     width: $width;
      height:.4rem;
      margin-bottom: .22rem;
      span{
        width: 1.3rem;
        height:.4rem;
        background: url("../../assets/img/tag.png") no-repeat;
        background-size: cover;
        font-size:.17rem;
        color:rgba(13,105,119,1);
        display: block;
        text-align: center;
        line-height: .4rem;
        margin-left: -.17rem;
        margin-top: -.05rem;
      }
    }
    .menu_box{
      margin: 0 .41rem 0 .17rem;
      width: 12.84rem;
      height:7.92rem;
      border:1px solid #1E2D71;
      .tab_data{
        width:$width;
        height: 5.59rem;
        border-bottom: 1px solid  #1E2D71;
        overflow: hidden;
        .tab_data_scroll{
          width:$width;
          height:$height;
          overflow: auto;
          table{
            width: 12.65rem;
            height: 5.59rem;
            tr{
              height:.37rem;
              font-size:$Littleize;
              color:SiceColor();
              overflow: hidden;
              td{
                text-align: center;
                line-height: .37rem;
                border-right:1px solid #1E2D71;
                border-bottom: 1px solid #1E2D71;;
              }
              .Num{
                width: 3.5%;
              }
              .Name{
                width: 5%;
                text-align: left;
                text-indent: 5px;
              }
              .Nature{
                width: 91.1%;
                text-align: left;
                text-indent: 14px;
              }
            }
          }

        }
      }


      /*底部切换*/
      .tab_qie{
        width: $width;
        height:2.33rem;
        .cheng{
          width: $width;
          height:$height;
          position: relative;
          /*tab切换*/
          .tab_select{
            width: 1.6rem;
            height:.24rem;
            .but{
              /*padding:8px 15px 7px 16px;*/
              width: 31.5%;
              height:$height;
              font-size: $Littleize;
              color:SiceColor();
              text-align: center;
              line-height: .24rem;
              border:1px solid SiceColor();
              cursor: pointer;
              &.active{
                color:#fff;
                background:rgba(18,49,95,1);
              }
            }
          }
          /*新建脚本*/
          .new_script{
            cursor: pointer;
            width:.97rem;
            height:.32rem;
            border:1px solid rgba(32,39,189,1);
            border-radius:2px;
            text-align: center;
            line-height: .32rem;
            font-size:$MiddSize;
            font-family:MicrosoftYaHei;
            color:SiceColor();
            position: absolute;
            right: .27rem;
            top:0;
          }
          /*集体样式*/
          .tab_fix{
            width: $width;
            height:$height;
            padding-top:.17rem;
            padding-left: .15rem;
            box-sizing: border-box;
            input{
              width: 2.29rem;
              height:.24rem;
              color:SiceColor();
              font-size: $Littleize;
              text-indent: .17rem;
              line-height: .24rem;
              outline: none;
              border:1px solid SiceColor();
              background: transparent;
            }
            input::-webkit-input-placeholder {
              color:SiceColor();
            }
          }
          /*System*/
          .System{

            .pro_name{
              overflow: hidden;
              span{
                font-size: $Littleize;
                color:SiceColor();
                line-height: .24rem;
              }
              input{
                width: 2.14rem;
              }
            }
            .set_time_Num{
              overflow: hidden;
              margin-top:.25rem;
                input[type="number"] {
                  -moz-appearance: textfield;
                }
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
                .setTime{
                  overflow: hidden;
                  margin-right: .45rem;
                }
                .setNum{
                  overflow: hidden;
                }
              }
            .runFshi{
              overflow: hidden;
              margin-top:.12rem;
              span{
                font-size: $Littleize;
                color:SiceColor();
                margin-right: .19rem;
                margin-left: .25rem;
              }
              .marginR{
                margin-right: .42rem;
              }
            }
            .restTimer{
              overflow: hidden;
              margin-top:.08rem;
              span{
                font-size:$Littleize;
                color:SiceColor();
                line-height: .24rem;
                margin-left: .32rem;
              }
            }
            .runTimer{
              overflow: hidden;
              margin-top:.08rem;
              span{
                font-size:$Littleize;
                color:SiceColor();
                line-height: .24rem;
                margin-left: .32rem;
              }
            }
            &.hide{
              display: none;
            }
          }
          /*Part*/
          .Part{

            .Part_part{
              overflow: hidden;
              span{
                font-size: $Littleize;
                font-family:MicrosoftYaHei;
                color:SiceColor();
                line-height: .24rem;
                margin-right:.1rem;
              }
              input{
                width:1.94rem
              }
              .Part_Num{
                width: .64rem;
                margin-right:.12rem;
              }
            }
            &.hide{
              display: none;
            }
          }
          .CAN{
            .CAN_BOX{
              overflow: hidden;
              span{
                font-size: $Littleize;
                line-height: .24rem;
                color:SiceColor();
              }
              .Part_NO{
                width: .45rem;
                text-indent: 0;
                text-align: center;
                margin-left:.07rem;
                margin-right:.13rem;
              }
              .ID_WEI{
                width:1.53rem;
                margin-left:.07rem;
                margin-right:.29rem;
              }
              .lang{
                width:.45rem;
                margin-left:.07rem;
                margin-right:.28rem;
              }
              .bao_words{
                width:1.91rem;
                margin-left:.07rem;
                margin-right:.36rem;
              }
              .TimeOut{
                width: 1.16rem;
                margin-left:.11rem;
              }
            }
            &.hide{
              display: none;
            }
          }
        }
      }
    }
  }
</style>
