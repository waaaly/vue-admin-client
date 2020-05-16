<template>
	<div class="shareTitle">
	    <div class="ui label" >
	        <p >文章详情</p>
			<header>
			    <h1>			 
			       {{article.title}}
			    </h1>
			    <div>
			        <i class="el-icon-user-solid"></i>发表于
			        <i class="el-icon-time"></i>{{article.createDate}} •
			        <i class="el-icon-view"></i>{{article.viewNum}} 次围观 •
			        <i class="el-icon-chat-dot-round"></i>活捉 {{article.commetnNum}} 条 •
			        <span class="rateBox">
			            <i class="el-icon-medal"></i>{{article.likeNum}}点赞 •
			            <i class="el-icon-star-on"></i>{{article.collectNum}}收藏
			        </span>
			    </div>
			</header>
	    </div>
	    <mavon-editor
	    	defaultOpen=preview
	    	:subfield="false"
	    	:value="article.content"
	    	:toolbarsFlag='false'>
	    </mavon-editor>
	</div>
</template>

<script>
	import { findByArticleId } from '@/utils/http/api/article.js'
	
	export default{
		data(){
			return{
				article:{}
			}
		},
		created(){
			console.log(this.$route)
			findByArticleId({id:this.$route.params.id}).then(res=>{
					this.article = res;
				}).catch(err=>{
					
				})
			}
	}
</script>

<style>
</style>
