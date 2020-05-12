<template>
  <el-row>
	  <el-col>
		  加入房间
		  <el-link type="primary" href="/webchat/roomlist">返回房间列表</el-link>
	  </el-col>
	  <el-form :model="chat">
	  		  <el-form-item label="用户昵称">
	  		     <el-input placeholder="请输入昵称"
	  				v-model="chat.nickname"></el-input>
	  		  </el-form-item>
	  		  <el-form-item>
	  		      <el-button type="primary" @click="onSubmit">立即加入</el-button>
	  		      <el-button>取消返回</el-button>
	  		  </el-form-item>
	  </el-form>
  </el-row>
</template>

<script>

import axios from 'axios'
import * as io from 'socket.io-client'

export default {
  name: 'JoinRoom',
  data () {
    return {
      chat: {
		  nickname:''
	  },
      socket: io('http://localhost:3000')
    }
  },
  mounted(){
	console.log(this.$route)  
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.chat.room = this.$route.query.id
      this.chat.message = this.chat.nickname + '加入房间'
      axios.post(`http://localhost:3000/api/webchat/chat`, this.chat)
      .then(response => {
        this.socket.emit('save-message', { 
			room: this.chat.room, 
			nickname: this.chat.nickname, 
			message: '加入房间', 
			created_date: new Date() });
        this.$router.push({
          path: '/webchat/chatroom',
          query: { id: this.$route.query.id, nickname: response.data.nickname }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
