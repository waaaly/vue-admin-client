<template>
	<el-card shadow="hover" class="user-card-box">
		<div class="user-card-info">
			<img src="../../assets/img/avatar.jpg" class="info-avatar"/>
			<div class="info-content">
				<div class="info-name">{{user.name}}</div>
				<div class="info-role">{{user.role}}</div>
			</div>
		</div>
		<div class="login-info">
			上次登录时间：
			<span>{{user.logintime}}</span>
		</div>
		<div class="login-info">
			上次登录地点：
			<span>{{user.loginlocation}}</span>
		</div>
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			user(){
				return JSON.parse(localStorage.getItem('userInfo')) 
			}
		}
	}
</script>

<style scoped>
	.user-card-box{
		margin-bottom: 20px;
		height: 225px;
	}
	.user-card-info{
		display: flex;
		align-items: center;
		padding-bottom: 10px;
		border-bottom: 2px solid #cdcdcd;
		margin-bottom: 10px;
	}
	.info-avatar{
		width: 120px;
		height: 120px;
		border-radius: 50%;
	}
	.info-content{
		padding-left: 50px;
		flex:1;
		font-size: 15px;
		color:#666;
	}
	.login-info{
		font-size: 14px;
		color: #999;
		line-height: 25px;
	}
	.info-name{
		color:#20A0FF
	}
	.info-role{
		margin-top: 10px;
	}
</style>
