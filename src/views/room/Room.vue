<template>
  <div id="room">
    <el-container>

      <el-aside>
        <SideBar />
      </el-aside>

      <el-container>
        <el-header>{{roomTitle}}</el-header>

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
  import { formatData } from 'assets/js/timeZoneFormat.js';
  import SideBar from 'components/layout/SideBar.vue'
  import Message from 'components/message/Message.vue';

  export default {
    name: 'Room',
    data() {
      return {
        msgList: [1,2,3,4,5,6],
        roomTitle: 'Room-Title',
        roomId: '',
        messages: [],
        userName: [],
        ts: [],
        msg: []
      }
    },
    components: {
      Message,
      SideBar
    },
    methods: {
        getRoomData() {
          return request({
          // url: 'channels.history?roomId=kD8vwKzpBnaRQhNBb',
          url: 'channels.history?roomId='+this.roomId,
          headers: {'X-Auth-Token':localStorage.getItem("X-Auth-Token"),'X-User-Id':localStorage.getItem("X-User-Id")}
        })
        .then(res => {
          // console.log(res);
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
      },
      dataInit() {
        this.messages= [];
        this.userName= [];
        this.ts= [];
        this.msg= [];
      }
    },
    created() {
      this.roomId = this.$route.query.roomId;
      // this.roomId = this.$route.params.roomId;
      // console.log(this.$route.params.roomId);
      console.log(this.roomId);
    },
    watch: { 
      $route: { 
        handler: function() { 
          this.roomId = this.$route.query.roomId;
          // this.roomTitle = this.$route.query.roomTitle;
          this.dataInit()
          this.getRoomData(); 
        } 
      } 
    },
    mounted() {
      this.getRoomData();
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