<template>
<el-row>
	<el-col>
		<div style="height: 100px;">
		  Chat Room - <el-button size="sm" @click.stop="logout()">Logout</el-button>
		</div>
		<div class="panel-body" v-chat-scroll>
		<div v-for="(item, index) in chatlist" class="chat">
			<div class="left clearfix" v-if="item.nickname === nickname">
				<el-image  src="http://placehold.it/50/55C1E7/fff&text=ME" />
				<div class="chat-body clearfix">
				  <div class="header">
					<strong class="primary-font">{{ item.nickname }}</strong> <small class="pull-right text-muted">
					<span class="glyphicon glyphicon-time"></span>{{ item.created_date }}</small>
				  </div>
				  <p>{{ item.message }}</p>
				</div>
			  </div>
			  <div class="right clearfix" v-else>	 
				<div class="chat-body clearfix">
					<div class="header">
						<strong class="primary-font">{{ item.nickname }}</strong> <small class="pull-right text-muted">
						<span class="glyphicon glyphicon-time"></span>{{ item.created_date }}</small>
					</div>
				  <p>{{ item.message }}</p>
				</div>
				<el-image  src="http://placehold.it/50/55C1E7/fff&text=U" />
			  </div>
			</div>			 
		</div>		  
		<el-form class="chat-form" :model="chat">
		  <el-form-item type="textarea" style="display: inline;">
			 <el-input placeholder="跟大家聊些什么吧·~"
						v-model="chat.message"></el-input>
		  </el-form-item>
		  <el-form-item>
			  <el-button type="primary" @click="onSubmit">发送</el-button>
		  </el-form-item>
		</el-form>
	</el-col>
</el-row>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import * as io from 'socket.io-client'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
const {chatbyroomid} = require('@/utils/http/api/chat.js')
export default {
  name: 'ChatRoom',
  data () {
    return {
      chatlist: [],
      errors: [],
      nickname: this.$route.query.nickname,
      chat: {
		  room:'',
		  message:'',
		  nickname:''
	  },
      socket: io('http://localhost:3000')
    }
  },
  created () {
	chatbyroomid({roomid:this.$route.query.id}).then(response => {
      this.chatlist = response
    })
    .catch(e => {
      this.errors.push(e)
    })


    this.socket.on('new-message', function (data) {
      if(data.message.room === this.$route.query.id) {
        this.chatlist.push(data.message)
      }
    }.bind(this))
  },
  methods: {
    logout () {
      this.socket.emit('save-message', { 
		  room: this.chat.room, 
		  nickname: this.chat.nickname, 
		  message: this.chat.nickname + '离开了房间', 
		  created_date: new Date() });
      this.$router.push({
        name: '/webchat/roomlist'
      })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.chat.room = this.$route.query.id
      this.chat.nickname = this.$route.query.nickname
      axios.post(`http://localhost:3000/api/webchat/chat`, this.chat)
      .then(response => {
        this.socket.emit('save-message', response.data)
        this.chat.message = ''
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .chat .left .chat-body {
    text-align: left;
    margin-left: 100px;
  }

  .chat .right .chat-body {
    text-align: right;
    margin-right: 100px;
  }

  .chat .chat-body p {
    margin: 0;
    color: #777777;
  }

  .panel-body {
    overflow-y: scroll;
    height: 350px;
  }

  .chat-form {
    margin: 20px auto;
    width: 80%;
  }
</style>
