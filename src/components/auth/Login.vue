<template>
  <div id="login">
    <form @submit.prevent="handleSubmit" class="login-card">
      <div class="rc-input_group">
        <div class="rc-input">
        <el-input v-model="user" placeholder="username or email" class="el-input"
        required></el-input>
        </div>
        <br/>
        <div class="re-input">
          <el-input v-model="password" placeholder="pawword" class="el-input"
          required show-password></el-input>
        </div>
      </div> 
      <br/><br/>
      <div class="rc-button_group">
        <el-button type="primary" class="rc-button" native-type="sumbit" round>Login</el-button>
      </div>
    </form>
  </div>
</template>
 
<script>

  import { request } from 'network/request.js';

  export default {
    name: 'Login',

    data: function() {
      return {
        user:'',
        password:''
      };
    },

    methods: {

      handleSubmit() {
        return request({
          url: '/login',
          data: {
              user:this.user,
              password:this.password
          },
          method: 'post'
        })
        .then(function(res){
          console.log(res)
          localStorage.setItem('authToken', res.data.authToken);
          this.$router.push({
              name: 'home',
              // params: { handle: res.data.user.handle }
          });
        })
        .catch(function(err){
          console.log(err)
        });
      },

      

    }

  }
  
</script>
 
<style scope>
  @import "../../assets/css/auth.css";
</style>