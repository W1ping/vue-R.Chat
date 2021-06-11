<template>
  <div id="message">
    <div class="msgTab">

      <div class="avatar">
        <img src="~assets/logo.png" alt="">
      </div>

      <div class="perMsg">
        
        <div class="msgTitle">
          <span>{{messages.u.username}}</span>
          <span>{{messages.ts}}</span>
        </div>

        <div class="msg">
          <p>{{messages.msg}}</p>
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
      }
    },
    props: ['messages'],
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