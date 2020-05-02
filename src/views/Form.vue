<template>
  <div >
	  <el-row :gutter="20">
		  <el-breadcrumb separator="/">
		      <el-breadcrumb-item>
		          <i class="el-icon-edit-outline"></i> 新增今日待办
		      </el-breadcrumb-item>
		  </el-breadcrumb>
		<el-col :span="10" class="form-add-todo-box">
			<todo-form></todo-form>
		</el-col>
	  </el-row>
  </div>
</template>

<script>
	import todoForm from "../components/form/TodoForm.vue"
export default {
  name: 'From',
  data(){
	  return{
		  
	  }
  },
  components:{
	  todoForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-add-todo-box{
	background-color: #fff;
	border-radius: 5px;
	margin: 10px;
	padding-top:5px;
}
</style>
