<template>
	<div  class="body-box">
		<el-row :gutter="20" type="flex" justify="space-between">
			<el-col >
				<body-left-index v-if="title=='博客首页'"></body-left-index>
				<body-left-list v-if="title=='文章列表'"></body-left-list>
				<body-left-detail v-if="title=='文章详情'"></body-left-detail>
				<body-left-assets v-if="title=='资源整理'"></body-left-assets>
				<body-left-message v-if="title=='留言墙'"></body-left-message>
			</el-col>
			<el-col :span="10" id="bodyright">
				<body-right></body-right>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import BodyRight from "@/components/index/BodyRight.vue"
	import BodyLeftAssets from "@/components/index/BodyLeftAssets.vue"
	import BodyLeftDetail from "@/components/index/BodyLeftDetail.vue"
	import BodyLeftIndex from "@/components/index/BodyLeftIndex.vue"
	import BodyLeftList from "@/components/index/BodyLeftList.vue"
	import BodyLeftMessage from "@/components/index/BodyLeftMessage.vue"
	export default{
		name:"Body",
		data(){
			return{
				
			}
		},
		components:{
			BodyRight,
			BodyLeftIndex,
			BodyLeftList,
			BodyLeftAssets,
			BodyLeftMessage,
			BodyLeftDetail,
		},
		watch:{
			$route(to,from){
				console.log(to.path);
			}
		},
		computed:{
			title(){
				return this.$route.meta.title;
			}
		}
	}
</script>

<style>
	.body-box{
		max-width: 80%;
		margin: 0 auto;
		padding: 0 10px;
	}
</style>
