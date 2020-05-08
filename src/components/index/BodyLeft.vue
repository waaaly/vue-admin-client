<template>
	<div class="container">
	    <el-row>
	        <el-col :span="24" class="s-item tcommonBox" v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10]" :key="'like'+index">
	            <span class="s-round-date">
	                <span class="month">5月</span>
					<span class="day">6</span>
	            </span>
	            <header>
	                <h1>
	                    <a :href="'#/DetailShare?aid='+articleList.id" target="_blank">
	                        {{articleList.title}}
	                    </a>
	                </h1>
	                <h2>
	                    <i class="el-icon-user-solid"></i>发表于
	                    <i class="el-icon-time"></i>{{articleList.create_time}} •
	                    <i class="el-icon-view"></i>{{articleList.browse_count}} 次围观 •
	                    <i class="el-icon-chat-dot-round"></i>活捉 {{articleList.comment_count}} 条 •
	                    <span class="rateBox">
	                        <i class="el-icon-medal"></i>{{articleList.like_count?articleList.like_count:0}}点赞 •
	                        <i class="el-icon-star-on"></i>{{articleList.collect_count?articleList.collect_count:0}}收藏
	                    </span>
	                </h2>
					<div class="label">
					    <a :href="'#/Share?classId='+item.class_id">原创</a>
					</div>
	            </header>
	            <div class="article-content">
	                <p style="text-indent:2em;">
	                    {{articleList.description}}
	                </p>
	                <p style="max-height:300px;overflow:hidden;text-align:center;">
	                    <img :src="articleList.image" alt="" class="maxW">
	                </p>
	            </div>
	            <div class="viewdetail">
	                <a class="cancelbtn tcolors-bg" href="javascript:void(0);" >取消{{like==1?'喜欢':'收藏'}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
	                <a class="tcolors-bg" :href="'#/DetailShare?aid='+articleList.id" target="_blank">
	                    阅读全文>>
	                </a>
	            </div>
	        </el-col>
	        <el-col class="viewmore">
	            <a v-show="hasMore" class="tcolors-bg" href="javascript:void(0);">点击加载更多</a>
	            <a v-show="!hasMore" class="tcolors-bg" href="javascript:void(0);">暂无更多数据</a>
	        </el-col>
	    </el-row>
	</div>
</template>

<script>
	export default {
	    data() { //选项 / 数据
	        return {
				articleList:{
					id:11,
					create_time:'2018年07月16日',
					title:'helloworld',
					browse_count:233,
					comment_count:534,
					like_count:123,
					collect_count:856,
					description:'mpvue 同事打包成H5和微信小程序',
					image:'http://mangoya.cn/upload/project/20180925/dc98df7ef7f58883c6de11d94a45273b.jpg'
				},
	            artId:0,//文章id
	            hasMore:true,//是否还有更多数据
	            like:1,//
	            articleName:'',
	            userId:''
	        }
	    },
	    methods: { //事件处理器
	        
	    },
	    components: { //定义组件
	
	    },
	    watch: {
	      
	     },
	    created() { //生命周期函数
	       
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
