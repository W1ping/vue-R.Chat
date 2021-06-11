<template>
  <div id="members">
    <div class="memberTab">
      
      <div class="userAvatar memberTabFlex">
        <img :src="avatarUrl" alt="">
      </div>

      <div class="userMess memberTabFlex">
        <div class="userName userMessFlex">
          <span>O {{channelName}}</span>
        </div>
        <div class="userLastMess userMessFlex">
          <span>{{username}}:{{lastmsg}}</span>
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
        avatarUrl: 'http://106.55.131.112:3000/avatar/room/'+this.avatarRid,
        username: this.lastMessage.u.username,
        lastmsg: this.lastMessage.msg
      }
    },
    props: ['lastMessage','channelName','avatarRid']
      
  }
</script>
 
<style scoped>
  
  .memberTab {
    line-height: normal;
    color: rgb(158, 162, 168);
  }
  .memberTab::after {
    content: '';
    clear: both;
    display: block;
  }
  .userMess{
    /* width: 60px; */
    font-size: 12px;
    float: left;
    margin: 0px 5px;
    padding: 3px;
    
    display: flex;
    flex-direction: column;


  }
  .userMessFlex{
    margin: 2px 0px;
    flex: 1;  
  }

  .userName {
    /* float: left; */
    text-align:initial;
  }

  .userAvatar {
    float: left;
    margin: 0px 5px;
  }
  .userAvatar img {
    width: 44px;
    height: 44px;
  }
  .userLastMess {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>