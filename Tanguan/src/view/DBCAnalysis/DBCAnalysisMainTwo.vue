<template>
  <div class="DBCAnalysisMainTwo_BigBox" :class="this.$store.state.ShowDBCMainTwo == true?'':'hide'">
    <div class="DBCA_mebu">
      <div class="DBCA_content">
        <!--        头部公用-->
        <div class="DBCA_content_Tit">
          <div class="DBCA_zhi">
            <div class="DBCA_word_Box">
              <span class="fl checked_dui">
                <i class="el-icon-check"></i>
              </span>
              <div class="DBCA_CAN fl">
                <span class="fl">CAN_SEND_ID</span>
                <input type="text" class="fl">
                <span class="fl marginss">一 一</span>
                <input type="text" class="fl">
                <div class="botelv fl">
                  <span class="fl">波特率</span>
                  <div class="bote_num fl">500K</div>
                  <span class="fl">&nbsp;&nbsp;&nbsp;K</span>
                </div>
              </div>
              <div class="DBCA_but_box">
                <div class="DBCjiexi_but fl">DBC解析</div>
                <div class="daochu_but fl">导出协议</div>
              </div>
            </div>
          </div>
        </div>
        <!--        表格数据-->
        <div class="DBCA_con_tab">
          <div class="table_Box">
            <table>
              <tbody>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                  <td class="table_num"></td>
                  <td class="table_Part_NO"></td>
                  <td class="table_CAN_SEND_ID"></td>
                  <td class="table_Message_send"></td>
                  <td class="table_CAN_REV_ID"></td>
                  <td class="table_Length_SEND"></td>
                  <td class="table_Message_REV"></td>
                </tr>
                <tr>
                <td class="table_num"></td>
                <td class="table_Part_NO"></td>
                <td class="table_CAN_SEND_ID"></td>
                <td class="table_Message_send"></td>
                <td class="table_CAN_REV_ID"></td>
                <td class="table_Length_SEND"></td>
                <td class="table_Message_REV"></td>
              </tr>
              </tbody>
            </table>
          </div>
<!--          底部-->
          <footer>
            <div class="DBC_bottom">
              <div class="DBC_Tit_Bot">
                <span>DBC解析</span>
              </div>
<!--              DPC解析头部下底部box-->
              <div class="DBX_BOX">
                <div class="Select_message_REV_Box">
                <div class="Select_message_word">
                  <p>
                    <span class="fl">Part.NO:</span>
                    <span class="fl">1</span>
                  </p>
                  <table>
                    <tbody>
                      <tr>
                        <td class="name">Message_REV</td>
                        <td>OF</td>
                        <td>01</td>
                        <td>5F</td>
                        <td>11</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>01</td>
                      </tr>
                      <tr>
                        <td class="name">二进制数</td>
                        <td>0000 1111</td>
                        <td>0000 1111</td>
                        <td>0000 1111</td>
                        <td>0000 1111</td>
                        <td>0000 1111</td>
                        <td>0000 1111</td>
                        <td>0000 1111</td>
                        <td>0000 1111</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                <div class="addDBC_Jiexi_Box">
                  <div class="addDBC_Left fl">
                    <p>DBC解析</p>
                    <table>
                      <tbody>
                        <tr>
                          <th>Signel.&nbsp;Name</th>
                          <th>起始段</th>
                          <th>起始位</th>
                          <th>位数</th>
                          <th></th>
                          <th>单位</th>
                          <th>Max</th>
                          <th>Min</th>
                          <th><img src="../../assets/img/add.png" alt=""></th>
                        </tr>
                        <tr>
                          <td class="Signel_Name">
                            <input type="text">
                          </td>
                          <td class="start_duan">1</td>
                          <td class="end_duan">2</td>
                          <td class="weishu">
                            <input type="number">
                          </td>
                          <td class="checkeds_DBC">
                            <span>
                              <i class="el-icon-check"></i>
                            </span>
                          </td>
                          <td class="unit">
                            <input type="text">
                          </td>
                          <td class="Max">
                            <input type="text">
                          </td>
                          <td class="Min">
                            <input type="text">
                          </td>
                          <td class="Delete"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="showDBC_Right fl">
                    <div class="DBC_Nmae_Zhi">
                      <span class="Name fl">名称</span>
                      <span class="Num fl">数值</span>
                      <span class="unit fl">单位</span>
                      <span class="states fl">状态</span>
                    </div>
                    <div class="Table_scrollY">
                      <div class="Table_scroll_Box">
                        <table>
                          <tr>
                            <td class="Name fl">燃油压力计量</td>
                            <td class="Num fl">63</td>
                            <td class="unit fl">kpa</td>
                            <td class="states fl">
                              <span class="reds"></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="Name fl">燃油压力计量</td>
                            <td class="Num fl">63</td>
                            <td class="unit fl">kpa</td>
                            <td class="states fl">
                              <span class="greens"></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="Name fl"></td>
                            <td class="Num fl"></td>
                            <td class="unit fl"></td>
                            <td class="states fl"></td>
                          </tr>
                          <tr>
                            <td class="Name fl"></td>
                            <td class="Num fl"></td>
                            <td class="unit fl"></td>
                            <td class="states fl"></td>
                          </tr>
                          <tr>
                            <td class="Name fl"></td>
                            <td class="Num fl"></td>
                            <td class="unit fl"></td>
                            <td class="states fl"></td>
                          </tr>
                          <tr>
                            <td class="Name fl"></td>
                            <td class="Num fl"></td>
                            <td class="unit fl"></td>
                            <td class="states fl"></td>
                          </tr>
                          <tr>
                            <td class="Name fl"></td>
                            <td class="Num fl"></td>
                            <td class="unit fl"></td>
                            <td class="states fl"></td>
                          </tr>
                          <tr>
                            <td class="Name fl"></td>
                            <td class="Num fl"></td>
                            <td class="unit fl"></td>
                            <td class="states fl"></td>
                          </tr>
                          <tr>
                            <td class="Name fl"></td>
                            <td class="Num fl"></td>
                            <td class="unit fl"></td>
                            <td class="states fl"></td>
                          </tr>
                          <tr>
                            <td class="Name fl"></td>
                            <td class="Num fl"></td>
                            <td class="unit fl"></td>
                            <td class="states fl"></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div class="but" v-on:click="aaaa">
            确定
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DBCAnalysisMainTwo",
      methods:{
        aaaa(){
          console.log(123)
        }
      },
      destroyed() {
        this.$store.commit('SHOWDBC_MAINTWO',false)
      }
    }
</script>


<style lang="scss" scoped>

  .DBCAnalysisMainTwo_BigBox{
    width: $width;
    height:$height;
    .DBCA_mebu{
      width: $width;
      height:$height;
      padding:.13rem .41rem .23rem .17rem;
      box-sizing: border-box;
      .DBCA_content{
        width: $width;
        height:$height;
        .DBCA_content_Tit{
          width: 100%;
          height:.55rem;
          border:1px solid rgba(30,45,113,1);
          /*padding支架*/
          .DBCA_zhi{
            padding: .09rem .28rem .15rem .15rem;
            .DBCA_word_Box{
              height: .34rem;
              overflow: hidden;
              position: relative;
              /*checked*/
              .checked_dui{
                width: .15rem;
                height:.15rem;
                border:1px solid SiceColor();
                position: relative;
                margin-top: .05rem;
                .el-icon-check{
                  font-size: $MiddSize;
                  color:SiceColor();
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
              .DBCA_CAN{
                span{
                  font-size:$Littleize;
                  color:SiceColor();
                  line-height:.26rem;
                  margin-right: .11rem;
                }
                margin-left: .25rem;
                input{
                  width:.8rem;
                  height:.24rem;
                  border:1px solid SiceColor();
                  outline: none;
                  text-indent: .1rem;
                  font-size: $Littleize;
                  background: transparent;
                  color:SiceColor();
                }
                .marginss{
                  margin: 0 .05rem;
                }
                .botelv{
                  overflow: hidden;
                  margin-left: .29rem;
                  .bote_num{
                    width:.7rem;
                    height:.24rem;
                    border:1px solid SiceColor();
                    font-size: $Littleize;
                    line-height: .24rem;
                    text-indent: .12rem;
                    color:SiceColor();
                  }
                }
              }
              .DBCA_but_box{
                overflow: hidden;
                position: absolute;
                right: 0;
                top:.04rem;
                div{
                  width:.81rem;
                  height:.27rem;
                  border-radius:5px;
                  color:#fff;
                  line-height: .27rem;
                  text-align: center;
                  font-family:MicrosoftYaHei;
                  font-size: .14rem;
                  margin-left: .17rem;
                }
                .DBCjiexi_but{
                  background:rgba(8,201,121,1);
                }
                .daochu_but{
                  background:rgba(8,194,201,1);
                }
              }
            }
          }
        }
        .DBCA_con_tab{
          width: $width;
          height:9.09rem;
          border:1px solid rgba(30,45,113,1);
          overflow: hidden;
          position: relative;
          .table_Box{
            /*width: 14.45rem;*/
            width: $width;
            height: 3.41rem;
            border-bottom: 1px solid #1E2D71;
            overflow: auto;
            table{
              width: $width;
              height:$height;
              tbody{
                tr{
                  border-bottom: 1px solid #1E2D71;
                  height:.37rem;
                  td{
                    height:.37rem;
                    border-right: 1px solid #1E2D71;
                  }
                  .table_num{
                    width:addWidth(.42rem,12.45);
                  }
                  .table_Part_NO{
                    width:addWidth(1.33rem,12.45);
                  }
                  .table_CAN_SEND_ID{
                    width:addWidth(2.31rem,12.45);
                  }
                  .table_Message_send{
                    width:addWidth(2.27rem,12.45);
                  }
                  .table_CAN_REV_ID{
                    width:addWidth(1.9rem,12.45);
                  }
                  .table_Length_SEND{
                    width:addWidth(2.2rem,12.45);
                  }
                  .table_Message_REV{
                    width:addWidth(2.01rem,12.45);
                  }
                }
              }
            }
            &::-webkit-scrollbar {/*滚动条整体样式*/
              width: 20px;     /*高宽分别对应横竖滚动条的尺寸*/
              height: 4px;
            }
            &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
              border-radius: 5px;
              -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
              background: #06A9AF;
            }
            &::-webkit-scrollbar-track {/*滚动条里面轨道*/
              -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
              border-radius: 0;
              background: rgba(0,0,0,0.1);
            }
          }
          /*底部FOOTER*/
          footer{
            width: $width;
            .DBC_bottom{
              width: $width;
              .DBC_Tit_Bot{
                span{
                  @include SizeStyle(#FEFFFF);
                  width:.87rem;
                  height:.24rem;
                  background:rgba(18,49,95,1);
                  text-align: center;
                  line-height: .24rem;
                }
              }
              .DBX_BOX{
                padding: 0 .12rem .1rem .24rem;
                .Select_message_REV_Box{
                  width: $width;
                  .Select_message_word{
                    width: $width;
                    p{
                      overflow: hidden;
                      span{
                        @include SizeStyle();
                        line-height: .55rem;
                        margin-right: .1rem;
                      }
                    }
                    table{
                      height: .65rem;
                      tr{
                        margin-bottom: .21rem;
                        td{
                          width: .8rem;
                          text-align: center;
                          font-size: $Littleize;
                          color:SiceColor();
                        }
                        .name{
                          text-align: left;
                          width: .1rem;
                        }
                      }
                    }
                  }
                }
                .addDBC_Jiexi_Box{
                 overflow: hidden;
                  margin-top: .23rem;
                  .addDBC_Left{
                    /*width: 5.95rem;*/
                    height:3.05rem;
                    width: 45%;
                    border:1px solid SiceColor();
                    p{
                      font-size:.23rem;
                      font-family:MicrosoftYaHei;
                      color:SiceColor();
                      line-height:.58rem;
                      text-indent: .27rem;
                      border-bottom: 2px solid #057D8C;
                    }
                    table{

                      tr{
                        th,td{
                          text-align: center;
                          font-size: .14rem;
                          height:.31rem;
                          line-height: .31rem;
                          color:SiceColor();
                          white-space: nowrap;
                          input{
                            border: 0;
                            background: transparent;
                            border-bottom: 1px solid #057D8C;
                            outline: none;
                            color:SiceColor();
                            input::-webkit-input-placeholder {
                              color:SiceColor();
                            }
                            text-align: center;
                          }
                          input[type="number"] {
                            -moz-appearance: textfield;
                          }
                          input[type="number"]::-webkit-inner-spin-button,
                          input[type="number"]::-webkit-outer-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                          }
                          img{
                            width: .27rem;
                            height:.27rem;
                            display: block;
                          }
                        }
                        /*Signel_Name   start_duan   end_duan  weishu    checkeds_DBC   unit  Max  Min  Delete*/
                        .Signel_Name{
                          width:25%;
                          input{
                            width: 100%;
                          }
                        }
                        .start_duan{
                          width:10%;
                        }
                        .end_duan{
                          width:10%;
                        }
                        .weishu{
                          width:10%;
                          input{
                          width: 100%;
                        }
                        }
                        .checkeds_DBC{
                          width:10%;
                          span{
                            width: .2rem;
                            height:.2rem;
                            display: block;
                            border:1px solid SiceColor();
                            position: relative;
                            i{
                              position: absolute;
                              font-size: $BigSize;
                              color:SiceColor();
                              left: 0;
                              top: 0;
                            }
                          }
                        }
                        .unit{
                          width:5%;
                          input{
                          width: 100%;
                        }
                        }
                        .Max{
                          width:10%;
                          input{
                            width: 100%;
                          }
                        }
                        .Min{
                          width:10%;
                          input{
                            width: 100%;
                          }
                        }
                        .Delete{
                          width:10%;
                        }
                      }
                      & tr:first-child{
                        td{
                          background: #152D58;
                        }
                      }
                    }
                  }
                  .showDBC_Right{
                    /*width: 6.49rem;*/
                    width: 45%;
                    height:3.05rem;
                    border:1px solid SiceColor();
                    margin-left: .05rem;
                    background: #0E163A;
                    .DBC_Nmae_Zhi{
                      width:100%;
                      height:.35rem;
                      border-bottom: 1px solid #0B365A;
                      overflow: hidden;
                      span{
                        height:100%;
                        border-right: 1px solid #0B365A;
                        font-size: .14rem;
                        text-align: center;
                        line-height: .35rem;
                        color:#00FCFF;
                      }
                      .Name{
                        width: 38.4%;
                      }
                      .Num{
                        width: 19.2%;
                      }
                      .unit{
                        width: 19.3%;
                      }
                      .states{
                        width: 18.3%;
                      }
                    }
                    .Table_scrollY{
                      height:2.69rem;
                      overflow: hidden;
                      .Table_scroll_Box{
                        height:$height;
                        overflow: auto;
                        overflow-x: hidden;
                        &::-webkit-scrollbar {/*滚动条整体样式*/
                          width: 20px;     /*高宽分别对应横竖滚动条的尺寸*/
                          height: 4px;
                        }
                        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                          border-radius:2px;
                          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                          background: #0F64AB;
                        }
                        &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                          border-radius: 0;
                          background:#0E163A;
                        }
                        table{
                          width: 100%;
                          table-layout:fixed;
                          word-break:break-all;
                          tr{
                            overflow: hidden;
                            td{
                              height:.35rem;
                              border-right: 1px solid #0B365A;
                              border-bottom: 1px solid #0B365A;
                              font-size: .14rem;
                              color:#1C83D0;
                              text-align: center;
                              line-height: .35rem;
                            }
                            .Name{
                              width: 40%;
                            }
                            .Num{
                              width: 20%;
                            }
                            .unit{
                              width:20%;
                            }
                            .states{
                              width: 19%;
                            }
                              .reds{
                                width:16px;
                                height:16px;
                                background:rgba(255,3,9,1);
                                border-radius:50%;
                                display: block;
                                margin:0 auto;
                                margin-top:.11rem;
                              }
                              .greens{
                                width:16px;
                                height:16px;
                                background:rgba(3,255,33,1);
                                border-radius:50%;
                                display: block;
                                margin:0 auto;
                                margin-top:.11rem;
                              }
                          }
                        }

                      }
                    }
                  }
                }
              }

            }
          }
          .but{
            width:1.19rem;
            height:.4rem;
            background:rgba(8,194,201,1);
            border-radius:5px;
            position: absolute;
            right: .56rem;
            bottom:.1rem;
            font-size:$MiddSize;
            font-family:MicrosoftYaHei;
            color:rgba(255,255,255,1);
            line-height:.4rem;
            text-align: center;
            cursor: pointer;
            span{
              width: $width;
              height:$height;
              display: block;
              position: relative;
              top: -.4rem;
              border-radius:5px;
            }
            &:hover{
              span{
                background: #fff;
                opacity: .2;
              }
            }
          }
        }
      }
    }
    &.hide{
      display: none;
    }
  }
</style>
