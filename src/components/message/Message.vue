<template>
  <div id="message">
    <div class="msgTab">

      <div class="avatar">
        <img :src="avatarUrl" alt="">
      </div>

      <div class="perMsg">
        
        <div class="msgTitle">
          <span>{{userName}}</span>
          <span>{{ts}}</span>
        </div>

        <div class="msg">
          <p>{{msg}}</p>
        </div>

      </div>

    </div>
    

  </div>
</template>
 
<script>
  export default {
    name: 'Message',
    data() {
      return {
        avatarUrl: 'http://106.55.131.112:3000/avatar/'+this.userName,
      }
    },
    props: ['userName','ts','msg'],
  }
</script>
 
<style scoped>
  .msgTab {
    font-size: 14px;
    line-height: normal;
  }
  .msgTab::after {
    display: block;
    content: '';
    clear: both;
  }
  .avatar {
    float: left;
    margin-right: 5px;
  }
  .avatar img{
    width: 36px;
    height: 36px;
  }

  .perMsg {
    float: left;
  }
  .msgTitle span{
    margin: 3px;
  }
  
  .msg {
    text-align: initial;
  }
</style>