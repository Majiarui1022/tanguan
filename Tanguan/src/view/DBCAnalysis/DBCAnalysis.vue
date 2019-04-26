<template>
  <el-container>
    <el-aside>
      <DBCAnalysisSide></DBCAnalysisSide>
    </el-aside>
    <el-main>
<!--      <DBCAnalysisMain></DBCAnalysisMain>-->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
    import DBCAnalysisSide from "@/view/DBCAnalysis/DBCAnalysisSide";
    // import DBCAnalysisMain from "@/view/DBCAnalysis/DBCAnalysisMain";
    export default {
        name: "DBCAnalysis",
      components: {DBCAnalysisSide}
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
