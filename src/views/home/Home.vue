<template>
  <div id="Home">

  <el-container>
      <el-aside >
        <SideBar />
      </el-aside>
      <el-container>
        <el-header>Home-Header</el-header>
        <el-main></el-main>
        <el-footer>Home-Footer</el-footer>
      </el-container>
  </el-container>


  </div>
</template>
 
<script>
  import SideBar from 'components/layout/SideBar.vue';
  export default {
    name: 'Home',
    components: {
      SideBar,
    },
    beforeDestroy: function (){
      // localStorage.clear();
      console.log('beforeDestroy');
    }
  }
</script>
 
<style scoped>
  #Home {
    position: relative;
  }
  .wrapper {
  height: 100vh;
  background-color: rgb(47, 52, 61);
  /* // background-color: #606266; */
}
.banner {
  width: 100vh;
  margin: 20px auto;
  font-size: 100px;
  color: rgb(245, 69, 92);
}
.fields {
    width: 100vh;
    /* // height: 250px; */
    background-color: white;
    padding: 20px;
    margin: 20px auto;
}
.login_card {
  padding: 40px;
}

.rc-button_group {
  display: flex;
}
.rc-button {
  flex: 1;
}
.info_group{
  padding: 5px;
}
.register_link{
  color: rgb(245, 69, 92);
}
.info_group span{
  margin-right: 8px;
}
</style>