<template>
  <div id="SendMsg">
    <div @click="sendMsg">123</div>
  </div>
</template>
 
<script>
  import { request } from 'network/request.js';
  export default {
    
    name: 'SendMsg',
    methods: {
      sendMsg() {
          return request({
          url: '/chat.sendMessage',
          headers: {'X-Auth-Token':localStorage.getItem("X-Auth-Token"),'X-User-Id':localStorage.getItem("X-User-Id")},
          
          data: {
            message: {"rid": "kD8vwKzpBnaRQhNBb","msg":"This is a test!"}
          },
          method: 'post'
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>
 
<style scoped>
  
</style>