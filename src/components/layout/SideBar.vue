<template>
  <div id="SideBar">
    <el-container>

      <el-header>Header</el-header>

      <el-main>Main</el-main>

      <el-footer>
          <i class="el-icon-user"></i>
          <router-link to="/home">R.Chat</router-link>
      </el-footer>
      
    </el-container>   
  </div>
</template>
 
<script>
  export default {
    name: 'SideBar',
  }
</script>
 
<style scoped>
  #SideBar {
    background-color: rgb(47, 52, 61);
  }
  .el-container { 
    height: 100vh;
  }
  .el-footer {
    color: rgb(245, 69, 92);
    margin: auto 20px;
    height: 48px;
  }
</style>