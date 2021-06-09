<template>
  <div id="Home">

    <el-container>
    <el-aside width="200px"><SideBar /></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>


  </div>
</template>
 
<script>
  import SideBar from 'components/layout/SideBar.vue';
  export default {
    name: 'Home',
    components: {
      SideBar
    }
  }
</script>
 
<style scoped>
  .el-container{
    height: 100vh;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    /* color: #333; */
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>