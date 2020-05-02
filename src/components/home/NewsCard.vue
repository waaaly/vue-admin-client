<template>
	<el-row :gutter="20">
		<el-col :span="8">
			<el-card shadow="hover" :body-style="{padding: '0px'}">
				<div class="news-content content-1">
					<i class="el-icon-view icon"></i>
					<div class="content-right">
						<div class="num">9547</div>
						<div>用户访问量</div>
					</div>
				</div>
			</el-card>		
		</el-col>
		<el-col :span="8">
			<el-card shadow="hover" :body-style="{padding: '0px'}">
				<div class="news-content content-2">
					<i class="el-icon-bell icon"></i>
					<div class="content-right">
						<div class="num">4396</div>
						<div>系统消息</div>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :span="8">
			<el-card shadow="hover" :body-style="{padding: '0px'}">
				<div class="news-content content-3">
					<i class="el-icon-coin icon"></i>
					<div class="content-right">
						<div class="num">5426</div>
						<div>数量</div>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.news-content{
		display: flex;
		align-items: center;
		height: 120px;
	}
	.content-right{
		flex:1;
		text-align: center;
		font-size: 15px;
		color: #999;
	}
	.icon{
		font-size: 50px;
		width: 120px;
		height: 120px;
		text-align: center;
		line-height: 120px;
		color:#fff;
	}
	.num{
		font-size: 30px;
		font-weight: bold;
	}
	.content-1 .icon {
		background: rgb(45, 140, 240);
	}
	
	.content-1 num {
		color: rgb(45, 140, 240);
	}
	
	.content-2 .icon {
		background: rgb(100, 213, 114);
	}
	
	.content-2 num {
		color: rgb(45, 140, 240);
	}
	
	.content-3 .icon {
		background: rgb(242, 94, 67);
	}
	
	.content-3 num {
		color: rgb(242, 94, 67);
	}
</style>
