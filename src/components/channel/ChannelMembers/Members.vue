<template>
  <div id="members">
    <div class="memberTab">

      <div class="userAvatar memberTabFlex">
        <img :src="avatarUrl" alt="">
      </div>

      <div class="userMess memberTabFlex">
        <div class="userName">
          <span>O {{channelName}}</span>
        </div>
        <div class="userLastMess">
          <span>{{lastMessage.u.username}}:{{lastMessage.msg}}</span>
        </div>
      </div>

    </div>
  </div>
</template>
 
<script>
  import { avatarRequest } from 'network/avatarRequest.js'
  export default {
    name: 'Members',
    data: function(){
      return {
        avatarUrl: 'http://106.55.131.112:3000/avatar/room/'+this.avatarRid+'?format=png'
      }
    },
    props: ['lastMessage','channelName','avatarRid']
      
  }
</script>
 
<style scoped>
  
  .memberTab {
    line-height: normal;
  }
  .memberTab::after {
    content: '';
    clear: both;
    display: block;
  }
  .userMess{
    float: left;
    margin: 0px 5px;
    padding: 3px;
  }
  .userAvatar {
    float: left;
  }
  .userAvatar img {
    width: 44px;
    height: 44px;
  }
  .userLastMess {
    width: 100px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>