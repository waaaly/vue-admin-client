<template>
 <el-row>
	  <el-col >
		  <h2>
			  房间列表
			  <el-link type="primary" href="/webchat/addroom">创建房间</el-link>
		  </h2>
	  </el-col>
	  <el-table :show-header="false" :data="rooms">
		  <template slot="actions" scope="row">
		    <b-btn size="sm" @click.stop="join(row.item._id)">Join</b-btn>
		  </template>
		  <el-table-column label="房间名" >
		    <template slot-scope="scope">
		    	{{scope.row.room_name}}
		    </template>
		  </el-table-column>
		  <el-table-column label="创建时间" >
		    <template slot-scope="scope">
		    	{{scope.row.created_date}}
		    </template>
		  </el-table-column>
		  <el-table-column label="加入房间" align="right">
		    <template slot-scope="scope">
		        <el-button
		            type="text"
		            icon="el-icon-edit"
		            @click="join(scope.row._id)"
		        >点击进入</el-button>
		    </template>
		  </el-table-column>
	  </el-table>
  </el-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'RoomList',
  data () {
    return {
      rooms: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/webchat/roomlist`)
    .then(response => {
      this.rooms = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    join (id) {
      console.log(id)
      this.$router.push({
        path: '/webchat/joinroom',
        query: { id: id }
      })
    }
  }
}
</script>
