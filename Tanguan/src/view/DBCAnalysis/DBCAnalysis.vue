<template>
  <el-container>
    <el-aside>
      <DBCAnalysisSide></DBCAnalysisSide>
    </el-aside>
    <el-main>
      <DBCAnalysisMain></DBCAnalysisMain>
      <DBCAnalysisMainTwo></DBCAnalysisMainTwo>
<!--      <router-view></router-view>-->
    </el-main>
  </el-container>
</template>

<script>
    import DBCAnalysisSide from "@/view/DBCAnalysis/DBCAnalysisSide";
    import DBCAnalysisMain from "@/view/DBCAnalysis/DBCAnalysisMain";
    import DBCAnalysisMainTwo from "@/view/DBCAnalysis/DBCAnalysisMainTwo";
    export default {
        name: "DBCAnalysis",
      components: {DBCAnalysisMainTwo, DBCAnalysisMain,DBCAnalysisSide}
    }
</script>

<style scoped lang="scss">
  .el-aside{
    width: 5.76rem !important;
  }
  .el-main{
    padding: 0;
    background: #071225;
  }
</style>
