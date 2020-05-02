<template>
	<el-card shadow="hover" class="progress-box">
		<div slot="header" class="progress-header">
			世界GDP总量（虚拟数据，切勿当真！）
		</div>
		中国
		<el-progress :percentage="90.4" color="#aa0000"></el-progress>
		美国
		<el-progress :percentage="84.8" color="#0055ff"></el-progress>
		俄罗斯
		<el-progress :percentage="61.1" color="#42b983"></el-progress>
		日本
		<el-progress :percentage="37.9" color="#00ff00"></el-progress>
	</el-card>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.progress-box{
		height: 298px;
	}
</style>
