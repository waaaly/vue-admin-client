<template>
	<div class="container">
	    <el-row>
	        <el-col :span="24" class="s-item tcommonBox" v-for="(item,index) in articles" :key="index">
				<!-- <div v-if="item"></div> -->
	            <span class="s-round-date">
	                <span class="month">{{item.monthDate}}月</span>
					<span class="day">{{item.dayDate}}</span>
	            </span>
	            <header>
	                <h1>
	                    <a :href="'/detail?id='+item.articleId" target="_blank">
	                        {{item.title}}
	                    </a>
	                </h1>
	                <h2>
	                    <i class="el-icon-user-solid"></i>发表于
	                    <i class="el-icon-time"></i>{{item.createDate}} •
	                    <i class="el-icon-view"></i>{{item.viewNum}} 次围观 •
	                    <i class="el-icon-chat-dot-round"></i>活捉 {{item.commetnNum}} 条 •
	                    <span class="rateBox">
	                        <i class="el-icon-medal"></i>{{item.likeNum}}点赞 •
	                        <i class="el-icon-star-on"></i>{{item.collectNum}}收藏
	                    </span>
	                </h2>
					<div class="label">
					    <p >原创</p>
					</div>
	            </header>
	            <div class="article-content">
	                <p style="text-indent:2em;">
	                    {{item.description}}
	                </p>
	                <p style="max-height:300px;overflow:hidden;text-align:center;">
	                    <img :src="item.image" alt="" class="maxW">
	                </p>
	            </div>
	            <div class="viewdetail">
	                <a class="tcolors-bg" @click="onDetail(item.articleId)">
	                    阅读全文>>
	                </a>
	            </div>
	        </el-col>
	        <el-col class="viewmore">
	             <div class="block">
	                <el-pagination
						  @current-change="handleCurrentChange"
						  :current-page.sync="currentPage"
						  :page-size="5"
						  layout="prev, pager, next, jumper"
						  :total="articleList.length">
					</el-pagination>
	              </div>
	        </el-col>
	    </el-row>
	</div>
</template>

<script>
	import { findArticle } from "@/utils/http/api/article.js"
	export default {
	    data() { //选项 / 数据
	        return {
				articleList:[],
	            artId:0,//文章id
	            articleName:'',
	            userId:'',
				currentPage:1,
	        }
	    },
	    methods: { //事件处理器
	        handleCurrentChange(val){
				this.currentPage = val
			},
			onDetail(id){
				this.$router.push({
					path:`/detail/${id}`
				})
			}
	    },
	    computed:{
			articles(){
				return this.articleList.slice((this.currentPage - 1) * 5 , this.currentPage * 5)
			}
		},
	    watch: {
	      
	    },

	    created() { //生命周期函数
	       findArticle().then(res=>{
			   this.articleList = res
		   }).catch(err=>{
			   console.log(err)
		   })
	    }
	}
</script>

<style>
	.container{
		
	}
	.tcommonBox {
	  white-space: normal;
	  word-wrap: break-word;
	  word-break: break-all;
	  position: relative;
	  background: #fff;
	  padding: 15px;
	  border-radius: 5px;
	  margin-bottom: 40px;
	  font-size: 15px;
	}
	.tcommonBox header {
	  white-space: normal;
	  word-wrap: break-word;
	  word-break: break-all;
	}
	.tcommonBox header h1 {
	  margin: 10px 0;
	  font-size: 25px;
	  font-weight: 700;
	  text-align: center;
	  line-height: 30px;
	}
	.tcommonBox header h2 {
	  margin: 10px 0;
	  line-height: 24px;
	  text-align: center;
	  color: #555;
	  font-size: 14px;
	}
	.tcommonBox section p {
	  line-height: 24px;
	  margin: 10px 0;
	}
	.tcommonBox header h2 .el-rate,
	.rateBox {
	  display: inline-block;
	}
	.tcommonBox header h2 .el-rate i {
	  font-size: 16px;
	}
	
	.label{
		border-color: #97dffd;
		-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
		background-color: #97dffd;
		margin: 5px 0 15px 2px;
		font-size: 14px;
		position: relative;
		left: -32px;
		border-radius: 0 4px 4px 0;
		padding: 7px 11.2px 7px 32px;
		display: inline-block;
		color: #fff;
	}
	.label::after {
	    position: absolute;
	    content: '';
	    top: 100%;
	    left: 0;
	    border-top: 0 solid transparent;
	    border-right-width: 1em;
	    border-right-color: #48456D;
	    border-right-style: solid;
	    border-bottom: 1em solid transparent;
	    border-left: 0 solid transparent;
	    width: 0;
	    height: 0;
	}
	.s-round-date {
	  position: absolute;
	  top: -20px;
	  left: -35px;
	  height: 60px;
	  width: 70px;
	  padding-top: 10px;
	  border-radius: 100px;
	  color: #fff;
	  background: #97dffd;
	  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
	          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
	}
	.s-round-date span {
	  text-align: center;
	  display: block;
	}
	.s-round-date .day {
	  font-size: 30px;
	  font-weight: 700;
	}
	
	.s-item .article-coontent {
	  font-size: 15px;
	  white-space: normal;
	  word-wrap: break-word;
	  word-break: break-all;
	}
	.s-item .article-content p {
	  margin: 10px 0;
	  line-height: 24px;
	}
	.s-item .viewdetail {
	  margin: 10px 0 ;
	  line-height: 24px;
	  text-align: center;
	}
	.s-item .viewdetail a {
	  color: #fff;
	  font-size: 12px;
	  padding: 5px 10px;
	  border-radius: 5px;
	}
	.viewmore{
		text-align: center;
		background: #fff;  
		border-radius: 5px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		display: block;
	}

	a:hover  {
		background: #18ffe4;
	}
	.tcolors-bg {
		background: #97dffd;   
	    -webkit-transition: all 0.3s ease-in-out;
	    transition: all 0.3s ease-in-out;
	}
	.likeBoxTitle{
	    text-align: center;
	    padding:40px 0;
	    font-size: 25px;
	    font-weight: 700;
	    margin-bottom: 40px;
	    background: #fff;
	    border-radius: 5px;
	}
	.likeBoxTitle h1{
	    font-weight: 700;
	}
	.likeBoxTitle h1 i{
	    color:#DF2050;
	    margin-right: 10px;
	    font-size: 30px;
	}
	.cancelbtn{
	    background: #ddd;
	}
</style>
