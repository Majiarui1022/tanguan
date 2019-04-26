<template>
  <el-container>
    <el-aside>
      <Configureside></Configureside>
    </el-aside>
    <el-main>
      <Configuremain></Configuremain>
    </el-main>
    <ConfigureEnit></ConfigureEnit>
  </el-container>
</template>

<script>
    import Configureside from "@/view/Configure/Configureside";
    import Configuremain from "@/view/Configure/Configuremain";
    import ConfigureEnit from "@/view/Configure/enit";
    export default {
        name: "Configure",
      components: {ConfigureEnit, Configuremain, Configureside}
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
