<template>
  <div id="room">
    <el-container>
      <el-container>

        <el-header>Room-Header</el-header>
        <el-main>

          <ul class="msgList">
            <li class="message" v-for="(item,index) in messages" :key="index">
              <Message :userName="userName[index]" :ts="ts[index]" :msg="msg[index]"  />
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
  import { formatData } from 'assets/js/timeZoneFormat.js'
  import Message from 'components/message/Message.vue';

  export default {
    name: 'Room',
    data() {
      return {
        msgList: [1,2,3,4,5,6],
        messages: [],
        userName: [],
        ts: [],
        msg: []
      }
    },
    components: {
      Message
    },
    mounted() {
      return request({
        // url: 'channels.history?roomId=kD8vwKzpBnaRQhNBb',
        url: 'channels.history?roomId=GENERAL&inclusive=true',
        headers: {'X-Auth-Token':localStorage.getItem("X-Auth-Token"),'X-User-Id':localStorage.getItem("X-User-Id")}
      })
      .then(res => {
        console.log(res);
        this.messages = res.messages.reverse();
        this.messages.map(item => {
          this.userName.push(item.u.username);
          // this.ts.push(new Date(Date.parse(item.ts)).toLocaleTimeString());
          this.ts.push(formatData(item.ts));
          this.msg.push(item.msg);
        })
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