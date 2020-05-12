<template>
	<el-container>
	  <el-header>欢迎使用网页实时聊天室</el-header>
	  <el-main>	 
	   <router-view></router-view>
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
				textarea:'',
				userNum:0,
				userList:[]
			}
		},
		methods:{
			onLogin(){		
				this.socket.emit('join',this.form.name)
			},
			onSignOut(){
				console.log(this.socket.id)
				this.socket.disconnect()
				this.$router.replace('/')
			},
			onSendMsg(value){
				var msg = {
					time:this.$moment(new Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
					content:this.textarea
				}
				this.socket.emit('send_msg',msg)
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
				this.userNum == 0? this.userNum = 1:''
				this.userNum == 0? this.userList= [{name:data.userName}]:''
				this.login = true
			})
			this.socket.on('user_joined',(data)=>{
				console.log('userjoined')
				console.log(data)
				this.userNum = data.userNum
				this.userList = data.userList
				this.$message.info(data.msg)
			})
			this.socket.on('user_lfet',(data)=>{
				console.log('user_lfet')
				this.userNum = data.userNum
				this.userList = data.userList
				this.$message.info(data.msg)
			})
			this.socket.on('bro_msg',(data)=>{
				console.log('msg:',data)
			})
		}
	}
</script>

<style>
	.el-container{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
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
