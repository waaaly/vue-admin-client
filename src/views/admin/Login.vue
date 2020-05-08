<template>
	<div class="login-container">
		<div class="login-main-box">
			<div class="login-title" v-if="submitType=='login'">欢迎登录后台管理系统(Vue3.0)</div>
			<div class="login-title" v-if="submitType=='signin'">欢迎注册后台管理系统(Vue3.0)</div>
				<el-form :model="param" :rules="rules" :status-icon="true" ref='login' class="login-content">
					<el-form-item prop="name" >
						<el-input v-model="param.name" :placeholder=" submitType=='signin' ? '账号长度为4-8位' : '账号' ">
							<el-button slot="prepend" icon="el-icon-user"></el-button>
						</el-input>
					</el-form-item>
					<el-form-item prop="pwd" >
						<el-input v-model="param.pwd"
							type="password"
							:placeholder=" submitType=='signin' ? '密码长度为4-8位' : '密码' "
							@keyup.enter.native="submitForm('login')">
							<el-button slot="prepend" icon="el-icon-lock"></el-button>
						</el-input>
					</el-form-item>
					<el-form-item label="注册为" v-if=" submitType=='signin' " class="el-form-item__label">
					    <el-radio-group v-model="param.role" size="medium">
					      <el-radio border label="管理员"></el-radio>
					      <el-radio border label="普通用户"></el-radio>
					    </el-radio-group>
					  </el-form-item>
					<div class="login-btn">
						<el-button type="primary" @click="submitForm('login')">登录</el-button>
					</div>
					<div class="login-btn">
						<el-button type="success" @click="submitForm('signin')">注册</el-button>
					</div>
					<p class="login-tips">Tips:admin和user账号密码一致可直接登录</p>
				</el-form>
			</div>
		</div>	
	</div>
</template>

<script>
	import {login,signin} from "@/http/api/user.js"
	export default{
		name:"Login",
		data(){
			return{
				submitType:'login',
				param:{
					name:'',
					pwd:'',
					role:''
				},
				rules:{
					name:[{
						required:true,
						message:'请输入账号',
						trigger:'blur',
					}],
					pwd:[{
						required:true,
						message:'请输入密码',
						trigger:'blur'
					}]
				}
			}
		},
		methods:{
			submitForm(type){
				if(this.submitType == type){
					this.$refs.login.validate(vaild=>{
						if(vaild){
							type == 'login'	? this.login() : this.signin()	
						}else{
							this.$message.error('请输入账号和密码!');
							return false;
						}
					})
				}else{
					this.submitType = type;
				}				
			},
			login(){
				login(this.param).then(res=>{
					console.log(res)
					if(res.code==1){
						this.$message.success(res.msg)
						localStorage.setItem('userInfo',JSON.stringify(res.userInfo));
						this.$router.push('/');
					}else{
						this.$message.error(res.msg)
					}
				})
			},
			signin(){
				signin(this.param).then(res=>{
					console.log(res)
					if(res.code==1){
						this.$alert(res.msg,'注册成功',{
							confirmButtonText:'前往登录',
							callback:(res=>{
								this.submitType='login'
							})
						})
					}else{
						this.$message.error(res.msg)
					}
				})
			}
		}
	}
</script>

<style >
.login-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.login-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.login-main-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(238, 238, 238, 0.5);
    overflow: hidden;
}
.login-content {
    padding: 30px 30px;
}
.el-form-item__label{
	color: #20A0FF;
	margin-top: -10px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>