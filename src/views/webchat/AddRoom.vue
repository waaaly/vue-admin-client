<template>
  <el-row>
	  <el-col>
		  创建房间
		  <el-link type="primary" href="/webchat/roomlist">返回房间列表</el-link>
	  </el-col>
	  <el-form :model="room">
		  <el-form-item label="活动名称">
		     <el-input placeholder="请输入房间名"
				v-model="room.room_name"></el-input>
		  </el-form-item>
		  <el-form-item>
		      <el-button type="primary" @click="onSubmit">确认创建</el-button>
		      <el-button>取消返回</el-button>
		    </el-form-item>
	  </el-form>
  </el-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'AddRoom',
  data () {
    return {
      room: {
		  room_name:'',	  
	  }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/api/webchat/room`, this.room)
      .then(response => {
        this.$router.push({
          path: '/webchat/roomlist'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
