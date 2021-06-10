<template>
  <div id="SideBar">
    <el-container>

      <el-header>SideBar-Header</el-header>

      <el-main>
        <Channel/>
      </el-main>

      <el-footer>
          <i class="el-icon-user"></i>
          <router-link to="/home">SideBar-Footer -- R.Chat</router-link>
      </el-footer>  

  </el-container> 

  </div>
</template>
 
<script>
  import Channel from 'components/channel/Channel.vue'
  export default {
    name: 'SideBar',
    components: {
      Channel
    }
  }
</script>
 
<style scoped>
  #SideBar {
    background-color: white
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
    overflow: hidden;
  }
  .el-container { 
    height: 100vh;
  }
  .el-footer {
    color: rgb(245, 69, 92);
    margin: auto 20px;
    height: 48px;
  }
  .el-side {
    overflow: hidden;
  }
</style>