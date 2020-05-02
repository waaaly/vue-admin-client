<template>
  <div >
    <el-row :gutter="20" type="flex" justify="space-around">
		<el-col :span="10" class="charts-box">
			<el-breadcrumb separator="/">
			    <el-breadcrumb-item>
			        <i class="el-icon-loading"></i> 条形图
			    </el-breadcrumb-item>
			</el-breadcrumb>
			<v-bar></v-bar>
		</el-col>
		<el-col :span="10" class="charts-box">
			<el-breadcrumb separator="/">
			    <el-breadcrumb-item>
			        <i class="el-icon-loading"></i> 地图
			    </el-breadcrumb-item>
			</el-breadcrumb>
			<v-map></v-map>
		</el-col>
	</el-row>
	<el-row :gutter="20" type="flex" justify="space-around" style="margin-top: 20px;">
		<el-col :span="10" class="charts-box">
			<el-breadcrumb separator="/">
			    <el-breadcrumb-item>
			        <i class="el-icon-loading"></i> 柱状图
			    </el-breadcrumb-item>
			</el-breadcrumb>
			<v-histogram></v-histogram>
		</el-col>
		<el-col :span="10" class="charts-box">
			<el-breadcrumb separator="/">
			    <el-breadcrumb-item>
			        <i class="el-icon-loading"></i> 云词图
			    </el-breadcrumb-item>
			</el-breadcrumb>
			<word-cloud></word-cloud>
		</el-col>
	</el-row>
  </div>
</template>

<script>
	import vBar from "../components/charts/Bar.vue"
	import vMap from "../components/charts/Map.vue"
	import vHistogram from "../components/charts/Histogram.vue"
	import wordCloud from "../components/charts/WordCloud.vue"
export default {
  name: 'Charts',
  data(){
	  return{
		  
	  }
  },
  components:{
	  vBar,
	  vMap,
	  vHistogram,
	  wordCloud
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.charts-box{
	background-color: #fff;
	border-radius: 5px;
	
}
</style>
