<template>
  <div id="room">
    <el-container>

      <el-aside>
        <SideBar />
      </el-aside>

      <el-container>
        <el-header class="room-header">
          <div class="roomAvatar">
            <img :src="roomAvatarUrl" alt="">
          </div>
          <div class="roomTitle">
            <span>{{roomTitle}}</span>
          </div>
        </el-header>

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
        roomAvatarUrl: 'assets/logo.png',
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
          url: 'channels.history?roomId='+this.roomId,
          headers: {'X-Auth-Token':localStorage.getItem("X-Auth-Token"),'X-User-Id':localStorage.getItem("X-User-Id")}
        })
        .then(res => {
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
        this.roomAvatarUrl = "";
        this.messages= [];
        this.userName= [];
        this.ts= [];
        this.msg= [];
      },
      getRoomInfo() {
        this.$bus.$on("roomInfo",  res=> {
          this.roomTitle = res.title;
          this.roomAvatarUrl = res.avatarRid;
          console.log(this.roomTitle,this.roomAvatarUrl);
        })
      },
      
    },
    watch: { 
      $route: { 
        handler: function() { 
          this.roomId = this.$route.query.roomId;
          this.dataInit()
          this.getRoomData(); 
          this.getRoomInfo();
        } 
      } 
    },
    mounted() {
      
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
  .room-header {
    text-align: initial;
    line-height: normal;
    padding: 0px 24px;
    font-weight: bolder;
  }
  .room-header div {
    float: left;
    margin: 10px 5px;
  }
  .roomAvatar img {
    width: 36px;
    height: 36px;
    align-items: center;
    margin: 4px;
  }
  .roomTitle {
    line-height: 40px;
  }
</style>