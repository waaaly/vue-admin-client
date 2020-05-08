<template>
	<div  class="body-box">
		<el-row :gutter="20" type="flex" justify="space-between">
			<el-col >
				<body-left></body-left>
			</el-col>
			<el-col :span="10" id="bodyright">
				<body-right></body-right>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import BodyRight from "@/components/index/BodyRight.vue"
	import BodyLeft from "@/components/index/BodyLeft.vue"
	export default{
		name:"Body",
		data(){
			return{
				
			}
		},
		components:{
			BodyRight,
			BodyLeft
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
