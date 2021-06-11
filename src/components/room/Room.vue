<template>
  <div id="room">
    <el-container>
      <el-container>

        <el-header>Room-Header</el-header>
        <el-main>

          <ul class="msgList">
            <li class="message" v-for="(item,index) in msgList" :key="index">
              <Message :messages="messages[index]"/>
            </li>
          </ul>
          
        </el-main>
        <el-footer>Room-Footer</el-footer>

      </el-container>
  </el-container>
  </div>
</template>
 
<script>
  import { request } from 'network/request.js';

  import Message from 'components/message/Message.vue';

  export default {
    name: 'Room',
    data() {
      return {
        msgList: [1,2,3,4,5,6],
        messages: []
      }
    },
    components: {
      Message
    },
    mounted() {
      return request({
        url: 'channels.history?roomId=GENERAL',
        headers: {'X-Auth-Token':localStorage.getItem("X-Auth-Token"),'X-User-Id':localStorage.getItem("X-User-Id")}
      })
      .then(res => {
        console.log(res);
        this.messages = res.messages;
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
</script>
 
<style scoped>
  @import "~assets/css/elLayout.css";
  .msgList {
    list-style: none;
  }
  .message {
    padding: 8px 50px 4px 50px;
    margin-bottom: 10px;
  }
</style>