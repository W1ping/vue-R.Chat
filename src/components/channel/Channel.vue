<template>
  <div id="channel">
    <div class="memberList" >
      <div class="memberData" v-for="(item,index) in channels" :key="index" >
        <router-link 
        :to="{ path:'/room', query:{roomId:channels[index]._id}}" 
        @click.native="roomMsg(index)">
          <Members :channelName="channelName[index]" 
                  :lastMessage="lastMessage[index]"
                  :avatarRid="avatars[index]"/>
         </router-link>
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
        lastMessage: [],
        avatars: [],
      }
    },
    components: {
      Members
    },
    methods: {
      getChannelsListJoined() {
        return request({
          url: 'channels.list.joined',
          // headers: {'X-Auth-Token':this.$store.getters.getUserToken,'X-User-Id':this.$store.getters.getUserId}
          headers: {'X-Auth-Token':localStorage.getItem("X-Auth-Token"),'X-User-Id':localStorage.getItem("X-User-Id")}
        })
        .then(res => {
          this.channels = res.channels;
          this.channels.map(item => {
            this.channelName.push(item.name);
            this.lastMessage.push(item.lastMessage);
            this.avatars.push(item.lastMessage.rid);
          })
        })
        .catch(err => {
          console.log(err);
        });
      },
      roomMsg(index) {
        this.$bus.$emit('roomInfo',{
          'title': this.channelName[index],
          'avatarRid': 'http://106.55.131.112:3000/avatar/room/'+this.avatars[index]
          }
        );
      }
    },
    mounted() {
      this.getChannelsListJoined();
    }
  }
</script>
 
<style scoped>
  .memberData {
    padding: 5px;
    margin: 10px 0px;
  }
</style>