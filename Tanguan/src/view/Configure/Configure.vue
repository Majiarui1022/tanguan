<template>
  <el-container>
    <el-aside>
      <Configureside
        :BigScriptList="BigScriptList"
        :PartLists="PartLists"
      ></Configureside>
    </el-aside>
    <el-main>
      <Configuremain></Configuremain>
    </el-main>
    <ConfigureEnit
      :BigScriptList="BigScriptList"
    ></ConfigureEnit>
  </el-container>
</template>

<script>
    import Configureside from "@/view/Configure/Configureside";
    import Configuremain from "@/view/Configure/Configuremain";
    import ConfigureEnit from "@/view/Configure/enit";
    export default {
        name: "Configure",
      components: {ConfigureEnit, Configuremain, Configureside},

      data(){
        return{
          BigScriptList:[],
          PartLists:[]
        }
      },



      methods:{
          // 请求本地协议列表
        getScriptList(){
          let that = this
          this.$api.ScriptList({
          }).then(res=>{
            console.log(res)
            this.BigScriptList = res;
            that.$store.commit("SCRIPT_ID",res[0].id)              //存入vuex协议ID
            this.getPartList()
          })
        },

        // 请求本地Part列表
        getPartList(){
          let that = this
          this.$api.ParstList({
          }).then(res=>{
            console.log(res)
            this.PartLists = res;
            that.$store.commit("PART_ID",res[0].id)              //存入vuex协议ID
          })
        }
      },
      created() {
          this.getScriptList()
      }
    }
</script>

<style lang="scss" scoped>
  .el-aside{
    width: 5.76rem !important;
  }
  .el-main{
    padding: 0;
    background: #071225;
  }
</style>
