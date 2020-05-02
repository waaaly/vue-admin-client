<template>
	<el-form ref="form" :model="form" label-width="80px">
	  <el-form-item label="待办事项">
		<el-input v-model="form.name"></el-input>
	  </el-form-item>
	  <el-form-item label="完成时间">
		<el-col :span="11">
		  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
		</el-col>
	  </el-form-item>
	  <el-form-item label="添加方式">
		<el-select v-model="form.insertType" placeholder="请选择添加方式">
		  <el-option label="首部添加" value="unshift"></el-option>
		  <el-option label="尾部添加" value="push"></el-option>
		</el-select>
	  </el-form-item>
	  <el-form-item>
		<el-button type="primary" @click="onSubmit">立即添加</el-button>
		<el-button @click="onCancel">取消</el-button>
	  </el-form-item>
	</el-form>
</template>

<script>
	export default{
		data(){
			return {
				form: {
					  name: '',
					  date2: '',
					  insertType: '',
				}
			}
		},
		methods:{
			onSubmit(){
				let time = this.form.date2.toLocaleString();
				let todoItem = {
					title:this.form.name,
					time:time,
					status:false
				} 
				this.$store.commit('addTodo',{
					item:todoItem,
					insertType:this.form.insertType
				})
				this.$message.success('添加成功！')
				this.form = {}
			},
			onCancel(){
				this.form = {}
			}
		}
	}
</script>

<style>
</style>
