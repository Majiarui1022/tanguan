<template>
  <el-container>
    <el-aside>
      <Configureside></Configureside>
    </el-aside>
    <el-main>
      <Configuremain></Configuremain>
    </el-main>
  </el-container>
</template>

<script>
    import Configureside from "@/view/Configure/Configureside";
    import Configuremain from "@/view/Configure/Configuremain";
    export default {
        name: "Configure",
      components: {Configuremain, Configureside}
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
