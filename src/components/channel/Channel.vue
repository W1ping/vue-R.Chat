<template>
  <div id="channel">
    <div class="memberList" >
      <div class="memberData" v-for="(item,index) in channels" :key="index">
        <Members :channelName="channels[index].name" 
                 :lastMessage="channels[index].lastMessage"
                 :avatarRid="channels[index].lastMessage.rid"
                />
      </div>
      
    </div>
  </div>
</template>
 
<script>
  import { request } from 'network/request.js';
  import Members from './ChannelMembers/Members.vue'
  export default {
    name: 'Channel',
    data: function(){
      return {
        channels: [],
        channelName: [],
        lastMessage: {},
        avatars: [],
      }
    },
    components: {
      Members
    },
    mounted() {
      // console.log('111',this.$store.getters.getUserToken);
      return request({
        url: 'channels.list',
        // headers: {'X-Auth-Token':this.$store.getters.getUserToken,'X-User-Id':this.$store.getters.getUserId}
        headers: {'X-Auth-Token':localStorage.getItem("X-Auth-Token"),'X-User-Id':localStorage.getItem("X-User-Id")}
      })
      .then(res => {
        console.log(res);
        this.channels = res.channels;
        this.channelName = this.channels[0].name;
        this.lastMessage = this.channels[0].lastMessage;
        console.log(this.channels);
        // console.log(localStorage.getItem("X-Auth-Token"),localStorage.getItem("X-User-Id"))

      })
      .catch(err => {
        console.log(err);
      });
    }
  }
</script>
 
<style scoped>
  .memberData {
    padding: 5px;
    margin: 10px 0px;
  }
</style>