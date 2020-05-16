<template>
	<div>
		<el-form label-position="top" label-width="80px" :model="article">
		  <el-form-item label="文章标题">
		    <el-input v-model="article.title" :autofocus="true"></el-input>
		  </el-form-item>
		  <el-form-item label="文章概述">
		    <el-input v-model="article.description"></el-input>
		  </el-form-item>
		  <el-form-item label="文章标签(多标签请用逗号分隔)">
		    <el-input v-model="tagstr" @blur="onTags"></el-input>
		  </el-form-item>
		  <el-form-item label="文章主图">
		    <el-upload
			  :class="{hide:hideUpload}"
		      action="http://vue-blog-oss.oss-cn-shenzhen.aliyuncs.com/blog-image"
		      list-type="picture-card"
			  :auto-upload="false"
		      :on-preview="handlePicturePreview"
		      :on-remove="handleRemove"
			  :on-change="upload">
		      <i  class="el-icon-plus"></i>
		    </el-upload>
		    <el-dialog :visible.sync="dialogVisible">
		      <img width="100%" :src="dialogImageUrl" alt="">
		    </el-dialog>
		  </el-form-item>
		  <el-form-item>
			  <mavon-editor 
				ref=md
				:autofocus="false"
				v-model="article.content"
				@imgAdd="onImgAdd">
			</mavon-editor>
		  </el-form-item>
		  <el-form-item>
		      <el-button type="primary" @click="onSubmit">发布文章</el-button>
		      <el-button>取消</el-button>
		    </el-form-item>
		</el-form>		
	</div>
</template>

<script>
	const { put }  = require("@/utils/oss/api.js") 
	import {createArticle} from "@/utils/http/api/article.js"
	import {mavonEditor} from 'mavon-editor'
	const moment = require("moment");
	export default{
		name:'Manage',
		data(){
			return{
				tagstr:'',
				article:{
					tags:[]
				},
				dialogImageUrl: '',
				dialogVisible: false,
				hideUpload:false,
			}
		},
		computed:{
		},
		methods:{
			onTags(event){
				this.article.tags= event.target.value.split("，");
			},
			handleRemove(file, fileList) {
				this.$message.warning('删除文章主图！');
				this.article.image = "";
				this.hideUpload = false;
			},
			handlePicturePreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			upload(file){
				put(`blog-image/${file.name}`,file.raw).then(res=>{
					this.$message.success('文章主图上传成功！');
					this.hideUpload = true;
					this.article.image = res.url;
				}).catch(err=>{
					console.log(err)
				})
			},
			onImgAdd(filename,imgfile){
				put(`blog-image/${imgfile.name}`,imgfile).then(res=>{
					// 第二步.将返回的url替换到文本原位置
					//$vm 指为mavonEditor实例，
					this.$refs.md.$img2Url(filename, res.url);
				}).catch(err=>{
					console.log(err)
				})
			},
			onSubmit(){
				var date = new Date();
				this.article.monthDate = date.getMonth() + 1;
				this.article.dayDate = date.getDate();
				this.article.createDate = moment().format('LLL');
				console.log(JSON.stringify(this.article))
				createArticle({json:JSON.stringify(this.article)}).then(res=>{
					console.log(res)
					this.$message.success("文章发布成功！")
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
	/*
	## 一、mpvue只打包小程序
	通过mpvue 官方文档 构建项目
	![image.png](1)
	## 二、添加打包成H5配置
	安装
	安装对应的module vue 、vuex、vue-loader、vue-style-loader、vue-template-compiler、webpack-dev-server等 
	具体配置文件如下：*/
</script>

<style>
	.hide .el-upload--picture-card {
	  display: none;
	}
</style>
