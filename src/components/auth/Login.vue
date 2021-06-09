<template>
  <div id="login">
    <el-alert
      v-if="isAlert"
      title="Error"
      type="error"
      description="User does not exist or worng password"
      show-icon
      @close="closeAlert">
  </el-alert>
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
        password:'',
        isAlert: false
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
        .then(res => {
          this.$store.dispatch('saveToken', res.data.authToken);
          this.$store.dispatch('saveUserId', res.data.userId);
          this.$router.push({
              path: 'home'
          });
        })
        .catch(err => {
          console.log(err);
          this.isAlert = true;
        });
      },
      closeAlert() {
        this.isAlert = false;
      }
    }

  }
  
</script>
 
<style scope>
  @import "~assets/css/auth.css";
</style>