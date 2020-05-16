<template>
	<div class="header">
		<div class="collapse-btn" @click="collapseChage">
		    <i v-if="!collapse" class="el-icon-s-fold"></i>
		    <i v-else class="el-icon-s-unfold"></i>
		</div>
		<div class="logo">后台管理系统Beta</div>
		<div class="right">
			<el-row :gutter="20" type="flex" justify="end">
				<el-col :span="3" >
					  <el-tooltip effect="dark"
						:content="fullscreen?`取消全屏`:`全屏`"
						placement="top">
						<i class="el-icon-full-screen" @click="handleFullScreen"></i>
					  </el-tooltip>
				</el-col>
				<el-col :span="3" class="bell-badge">
					  <el-tooltip effect="dark"
						:content="message?`您有${message}条未读消息`:`消息中心`"
						placement="top">
						<i class="el-icon-bell"></i>
					  </el-tooltip>
					  <span class="btn-bell-badge" v-if="message"></span>
				</el-col>
				<el-col :span="3">
					<img class="avatar" src="../../assets/img/avatar.jpg" />			  	
				</el-col >
				<el-col :span="6" >
					<el-dropdown class="flex-center" trigger="click" @command="onCommand">
						<span class="el-dropdown-link">
						    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
						  </span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="loginout">注销登出</el-dropdown-item>
							<el-dropdown-item command="sysout">退出系统</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import bus from './EventBus.js'
	export default{
		name:'Header',
		data(){
			return{
				collapse: false,
				fullscreen:false,
				message:99,
			}
		},
		computed:{
			username(){
				if(!localStorage.getItem('userInfo')) return false;
				let userInfo = JSON.parse(localStorage.getItem('userInfo'));
				return userInfo.name;
			}
		},
		methods:{
			onCommand(cmd){
				if(cmd=="loginout"){
					localStorage.removeItem('userInfo');
					this.$router.push("/admin/login");
				}
				if(cmd=="sysout"){
					this.$router.push("/");
				}
			},
			// 侧边栏折叠
			collapseChage() {
			    this.collapse = !this.collapse;
			    bus.$emit('collapse', this.collapse);
			},
			// 全屏事件
			handleFullScreen() {
				console.log('handleFullScreen')
			    let element = document.documentElement;
			    if (this.fullscreen) {
			        if (document.exitFullscreen) {
			            document.exitFullscreen();
			        } else if (document.webkitCancelFullScreen) {
			            document.webkitCancelFullScreen();
			        } else if (document.mozCancelFullScreen) {
			            document.mozCancelFullScreen();
			        } else if (document.msExitFullscreen) {
			            document.msExitFullscreen();
			        }
			    } else {
			        if (element.requestFullscreen) {
			            element.requestFullscreen();
			        } else if (element.webkitRequestFullScreen) {
			            element.webkitRequestFullScreen();
			        } else if (element.mozRequestFullScreen) {
			            element.mozRequestFullScreen();
			        } else if (element.msRequestFullscreen) {
			            // IE11
			            element.msRequestFullscreen();
			        }
			    }
			    this.fullscreen = !this.fullscreen;
			}
		}
	}
</script>

<style>
	.header {
	    position: relative;
	    box-sizing: border-box;
	    width: 100%;
	    height: 70px;
	    font-size: 22px;
	    color: #55aaff;
		background-color: #242f42;
	}
	.collapse-btn {
	    float: left;
	    padding: 0 21px;
	    cursor: pointer;
	    line-height: 70px;
	}
	.logo{
		float: left;
		padding-left: 50px;
		height: 70px;
		line-height: 70px;
		margin: 0;
		padding: 0;
	}
	.right {
	    float: right;
		width: 33%;
		height: 70px;
		margin: 0;
		padding: 0;
		line-height: 70px;
	}
	.flex-center{
		display: flex;
		align-items: center;
	}
	.text-center{
		text-align: center;
	}
	.avatar  {
	    display: block;
	    width: 40px;
	    height: 40px;
	    border-radius: 50%;
		margin-top: 15px;
	}
	.el-dropdown-link{
		color: #20A0FF;
	}
	.bell-badge{
		position: relative;
	}
	.btn-bell-badge {
	    position: absolute;
	    right: 30px;
	    top: 20px;
	    width: 8px;
	    height: 8px;
	    border-radius: 4px;
	    background: #f56c6c;
	    color: #fff;
	}
</style>
