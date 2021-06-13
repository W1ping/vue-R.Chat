<template>
  <div id="SendMsg">
    <div class="msgBox">
      <label for="msg" class="msgBoxContainer">
        <span class="msgBox_icon emojiPicker">
          <img src="~assets/img/emoji.svg" alt="">
        </span>
        <textarea aria-label="message" name="msg" rows="1" placeholder="Enter messsages here" class="msgBoxText" dir="ltr"
          v-model="msg" @keydown.enter="submit">
        </textarea>
        <span class="msgBoxSend" @click="submit">
          <img src="~assets/img/send.svg" alt="">
        </span>
      </label>
    </div>
  </div>
</template>
 
<script>
  import { request } from 'network/request.js';
  export default {
    
    name: 'SendMsg',
    data() {
      return {
        msg: '',
      }
    },
    props: ['roomId'],
    methods: {
      sendMsg(rid,msg) {
          return request({
          url: '/chat.sendMessage',
          headers: {'X-Auth-Token':localStorage.getItem("X-Auth-Token"),'X-User-Id':localStorage.getItem("X-User-Id")},
          
          data: {
            message: {"rid": rid,"msg":msg}
          },
          method: 'post'
        })
        .then(res => {
          console.log(res);
          if(res){
            this.$emit("isUpdate",true)
          }
          
        })
        .catch(err => {
          console.log(err);
        })
      },
      submit(e) {
        // 浏览器阻止默认事件兼容
        if(this.msg){
          if (e.preventDefault) {
            e.preventDefault();
          }
          else window.event.value = false;
          this.sendMsg(this.roomId,this.msg);
          this.msg = "";
        }
        
      }
    },
    
  }
</script>
 
<style scoped>
  .msgBox {
    position: relative;
    width: 100%;
    padding: 24px;
    font-size: .875rem;
  }

  .msgBoxContainer {
    display: flex;
    cursor: text;
    transition: background-color .3s;
    align-items: center;
    font-size: 14px;
    padding: .75rem 0;
    /* border-color: #cbced1; */
    border-radius: 2px;
    /* border-width: 2px; */
    border: 2px solid #cbced1;
  }

  .msgBox_icon {
    display: flex;
    flex: auto 0 0;
    box-flex: 1;
  }

  .msgBoxText {
    overflow: hidden;
    height: 23px;
    font-size: 14px;
    font-stretch: 100%;
    height: 23px;
    line-height: 21px;
    max-height: 155px;
    min-height: 23px;
    box-sizing: border-box;
    white-space: pre-wrap;
    text-align: start;
    overflow-wrap: break-word;
    width: 100%;
    resize: none;
    border: 0;
    outline: none;
  }

  .msgBoxSend {
    flex: auto 0 0;
    display: flex;
    width: 50px;
    height: 21px;
  }

  img{
    height: 21px;
    width: 50px;
  }

  
</style>