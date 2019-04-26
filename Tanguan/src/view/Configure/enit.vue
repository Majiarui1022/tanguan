<template>
    <div class="addAgreement ">
      <div class="addTtit">
        <i class="el-icon-close"></i>
      </div>
      <div class="addMenu">
        <div class="Agreement_name">
          <label for="" class="fl">协议名称：</label>
          <input type="text" class="fl" placeholder="输入协议名称">
        </div>
        <div class="Select_Agreement_Box">
          <label for="" class="fl">选择已有协议:</label>
          <div class="Select_Agreement fl">
            <span>空</span>
            <img src="../../assets/img/right_down.png" alt="">

<!--              协议列表-->
            <div class="Agreement_List">
              <ul>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
                <li>
                  <i class="fl">协议1</i>
                </li>
              </ul>
            </div>




          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "enit"
    }
</script>

<style lang="scss" scoped>

  .addAgreement{
    /*整体隐藏*/
    display: none;
    /*------------*/
    width:4.32rem;
    height:2.88rem;
    position: fixed;
    top:50%;
    left: 50%;
    margin-top:-1.44rem;
    margin-left:-2.16rem;
    .addTtit{
      width: $width;
      height:.44rem;
      background:rgba(65,106,177,1);
      border-radius:5px;
      position: relative;
      .el-icon-close{
        position: absolute;
        right: .18rem;
        font-size: $GiantSize;
        color:#fff;
        line-height: .44rem;
        cursor: pointer;
      }
    }
    .addMenu{
      width: $width;
      height:2.44rem;
      background: #2C4775;
      label{
        @include text-overflow(1.09rem,block);
        line-height: .28rem;
        margin-right:.13rem;
        color:SiceColor();
        font-size: $MiddSize;
      }
      input{
        border:0;
        border-bottom:1px solid SiceColor();
        width: 2.28rem;
        height:.28rem;
        text-indent: .22rem;
        background: transparent;
        color:SiceColor();
        font-size: $MiddSize;
      }
      input::-webkit-input-placeholder {
        color:SiceColor();
      }
      .Agreement_name{
        overflow: hidden;
        padding-top:.51rem;
        margin-left:.29rem;
      }
      .Select_Agreement_Box{
        margin-top:.28rem;
        margin-left:.29rem;
        .Select_Agreement{
          width: 2.29rem;
          height:.28rem;
          border:1px solid SiceColor();
          position: relative;
          span{
            height: $height;
            width: $width;
            display: block;
            font-size: $MiddSize;
            font-family:MicrosoftYaHei;
            color:SiceColor();
            line-height:.22rem;
            text-indent: .15rem;
          }
          img{
            width:.16rem;
            height:.1rem;
            position: absolute;
            right: .1rem;
            top:50%;
            margin-top:-.05rem;
          }
          .Agreement_List{
            /*列表隐藏*/
            /*---------*/
            display: none;
            /*-----------*/
            width: $width;
            height:2rem;
            position: absolute;
            left: 0;
            top:.29rem;
            background: rgba(2, 246, 255, 0.2);
            overflow: hidden;
            ul{
              width: 100%;
              height:100%;
              overflow: auto;
              li{
                width: 100%;
                height:.35rem;
                overflow: hidden;
                text-indent: .15rem;
                i{
                  font-size: $MiddSize;
                  line-height: .35rem;
                  cursor: pointer;
                  display: inline-block;
                  color:SiceColor();
                  font-style: normal;
                }
              }
            }
            ul::-webkit-scrollbar {/*滚动条整体样式*/
              width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
              height: 4px;
            }
            ul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
              border-radius: 5px;
              -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
              background: rgba(0,0,0,0.2);
            }
            ul::-webkit-scrollbar-track {/*滚动条里面轨道*/
              -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
              border-radius: 0;
              background: rgba(0,0,0,0.1);
            }
          }
        }

      }
    }
  }
</style>
