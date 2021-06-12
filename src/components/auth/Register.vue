<template>
  <div id="Register">
    <el-alert
      v-if="isAlert"
      title="Error"
      type="error"
      description="Username or email is already in use"
      show-icon
      @close="closeAlert">
  </el-alert>
    <!-- "Username or email is already in use" -->
    <form @submit.prevent="handleSubmit" class="login-card">
      <div class="rc-input_group">

        <div class="rc-input">
          <el-input v-model="username" placeholder="username" class="el-input" 
          required></el-input>
        </div>
        <br/>

        <div class="rc-input">
          <el-input v-model="email" placeholder="email" class="el-input" type="email"
          required></el-input>

        </div>
        <br/>

        <div class="re-input">
          <el-input v-model="pass" placeholder="password" class="el-input"
          required show-password></el-input>
        </div>

      </div> 
      
      <br/><br/>
      <div class="rc-button_group">
        <el-button type="primary" class="rc-button" native-type="sumbit" round>Register</el-button>
      </div>
    </form>

        
  </div>
</template>
 
<script>
  import { request } from 'network/request.js';
  export default {
    name: 'Register',
    data: function() {
      return {
        username: '',
        email: '',
        pass: '',
        name: '',
        isAlert: false
      };
    },
    methods: {
       handleSubmit() {
        return request({
          url: '/users.register',
          data: {
            username: this.username,
            email: this.email,
            name: this.name,
            pass: this.pass
          },
          method: 'post'
        })
        .then(res =>{
          if(res){
            console.log(res);
          }
          else {
            this.isAlert = true;
          }
        })
        .catch(err =>{
          console.log(err)
        });
      },
      closeAlert() {
        this.isAlert = false;
      }
      
    },
    
    beforeCreate() {
      localStorage.clear();
    }
  }
</script>
 
<style scoped>
@import "~assets/css/auth.css";
</style>