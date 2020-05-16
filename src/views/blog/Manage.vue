<template>
	<div>
		<el-form label-position="top" label-width="80px" :model="article">
		  <el-form-item label="文章标题">
		    <el-input v-model="article.name"></el-input>
		  </el-form-item>
		  <el-form-item label="文章概述">
		    <el-input v-model="article.region"></el-input>
		  </el-form-item>
		  <el-form-item label="文章主图">
		    <el-input v-model="article.type"></el-input>
		  </el-form-item>
		  <el-form-item>
			  <mavon-editor v-model="article.content"></mavon-editor>
		  </el-form-item>
		</el-form>		
	</div>
</template>

<script>
	export default{
		name:'Manage',
		data(){
			return{
				article:{}
			}
		}
	}
</script>

<style>
</style>
