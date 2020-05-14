<template>
	<el-container>
	  <el-header>欢迎使用网页音乐播放器</el-header>
	  <el-main>
		  <aplayer  :music="currentMusic"
			:list="listData">
		  </aplayer>
		  <!-- <el-table
			  :data="listData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			  :stripe="true"
			  :current-page.sync="currentPage"
			  style="width: 100%">
			  <el-table-column
				  prop="name"
				  label="曲名">
			   </el-table-column>
			   <el-table-column label="播放地址">
				   <template slot-scope="scope">
				       <el-button
				           type="text"
				           icon="el-icon-video-play"
				           @click="handlePaly(scope.row)"
				       >播放</el-button>
				   </template>
			   </el-table-column>
		  </el-table>
		   <el-pagination
				  @size-change="handleSizeChange"
				  @current-change="handleCurrentChange"
				  :page-sizes="[5,10, 15, 20]"
				  :page-size="pagesize"
				  layout="total, sizes, prev, pager, next, jumper"
				  :total="total">
		  </el-pagination> -->
	  </el-main>
	  <el-footer>
		  <p>
		      © 2020 <a href="/">Waaaly</a>. 由 
			  <a href="https://aplayer.netlify.app/" target="_blank">Vue-Player</a> 提供支持. 
		  </p>
	  </el-footer>
	</el-container>
</template>

<script>
	import {list} from "@/utils/oss/api.js"
	import Aplayer from 'vue-aplayer'
	export default{
		data(){
			return{
				listData:[],
				currentPage:1,
				pagesize:5,
				total:0,
				currentMusic:{
					title:'当前无歌曲',
					author: '周杰伦',
					url:'xxx.mp3',
				}
			}
		},
		components:{
			Aplayer
		},
		methods:{
			handleSizeChange(val) {
				this.pagesize=val;
			},
			handleCurrentChange(val) {
				this.currentPage = val;
			},
			handlePaly(val){
				this.currentMusic.title = val.name;
				this.currentMusic.url = val.url
			}
		},
		mounted(){
			list().then(res=>{
				let obj ;
				//修改曲目
				obj = JSON.parse(JSON.stringify(res.objects).replace(/name/g,"title"));
				//修改url
				this.listData = JSON.parse(JSON.stringify(obj).replace(/url/g,"src"));
				this.total = res.objects.length - 1;
			})
		}
	}
</script>

<style>
	.el-container{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.el-header{
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	} 
	.el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
</style>
