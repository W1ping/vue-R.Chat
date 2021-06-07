<template>
  <div id="auth">
    <el-container class="wrapper">

      <!-- <el-header>Rocket.Chat demo/Login</el-header> -->

      <el-main>
        <div class="banner">
          <i class="el-icon-user"></i>
          <span>R.Chat</span>
        </div>
        <div class="fields">
          <div class="auth_group">
            <div class="auth_login" v-if="isLogin">
              <Login />
            </div>
            <div class="auth_register" v-if="!isLogin">
              <Register/>
            </div>
          </div>
          <div class="info_group">
            <span>{{isLogin ? "Don't" : "Already"}} have an account? </span> 
            <span  class="register_link" @click="changeIsLogin">{{isLogin ? "Register" : "Login"}} Here</span>
          </div>
        </div>
        
      </el-main>
      
      <el-footer>
        
      </el-footer>
    </el-container>
  </div>
</template>
 
<script>
  import Login from 'components/auth/Login.vue';
  import Register from 'components/auth/Register.vue';
  export default {
    name: 'auth',
    data: function() {
      return {
        isLogin: true
      }
    },
    components: {
      Login,
      Register
    },
    methods: {
      changeIsLogin() {
        this.isLogin = !this.isLogin;
      }
    },
    computed: {
      
    }
  }
  
</script>
 
<style scoped>
  @import '/assets/css/auth.css';
</style>