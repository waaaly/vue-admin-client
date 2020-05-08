<template>
	<el-container>
	  <el-header>欢迎使用网页实时聊天室</el-header>
	  <el-main>	 
	   <div v-if="!login">
		   <el-form  label-width="80px" :model="form">
				<el-form-item label="名称">
				  <el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="性别">
				  <el-radio-group v-model="form.sex">
						<el-radio label="小公举"></el-radio>
						<el-radio label="小公主"></el-radio>
				  </el-radio-group>
				</el-form-item>
				<el-form-item>
				  <el-button type="primary" @click="onLogin">进入聊天室</el-button>
				</el-form-item>
		   </el-form>
	   </div> 
		<div v-if="login">
			<el-button @click="onSignOut">退出聊天室</el-button>
		</div>
	  </el-main>
	</el-container>
</template>

<script>
	import socketio from 'socket.io-client'
	
	export default{
		name:'ChatIndex',
		data(){
			return{
				form:{
					name:'',
					sex:''
				},
				socket:{},
				login:false,
			}
		},
		methods:{
			onLogin(){
				
				this.socket.emit('join',this.form.name)
			},
			onSignOut(){
				console.log(this.socket.id)
				this.socket.emit('signout')
			}
		},
		computed:{
			
		},
		mounted(){
			this.socket = socketio('http://localhost:3000')
			//设置监听器订阅后台方法
			this.socket.on('login',(data)=>{
				console.log('login')
				console.log(data)
				this.login = true
			})
			this.socket.on('user_joined',(data)=>{
				console.log('userjoined')
				console.log(data)
			})
			this.socket.on('signout',(data)=>{
				console.log('signout')
				this.socket.disconnect()
				this.$router.replace('/')
			})
			this.socket.on('disconnect',(data)=>{
				console.log('disconnect')				
			})
		}
	}
</script>

<style>
	.el-header {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	.el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 160px;
		height: 100vh;
		/* background-image: url(../../assets/img/right-logo.jpg);
		background-size: 100% 100%;
		overflow-y: hidden; */
	  }
</style>
