<template>
  <div >
	<el-row :gutter="20">
		<el-col :span="8">
			<user-card></user-card>
			<progress-card></progress-card>
		</el-col>
		<el-col :span="16">
			<news-card></news-card>
			<todo-card></todo-card>
		</el-col>
	</el-row>
	<el-row  >
		<el-col :span="12" class="charts-line-box">
			<ve-line :data="chartData" :settings="chartSettings"></ve-line>
		</el-col>
		<el-col :span="10" :push="1" class="charts-pie-box">
			<ve-pie :data="chartData1" ></ve-pie>
		</el-col>
	</el-row>
  </div>
</template>

<script>
	import userCard from '../components/home/UserCard.vue'
	import newsCard from '../components/home/NewsCard.vue'
	import progressCard from '../components/home/ProgressCard.vue'
	import todoCard from '../components/home/TodoCard.vue'
export default {
  name: 'Dashboard',
  data(){
	  return {
		 chartData: {
		           columns: ['日期', '访问用户', '下单用户', '下单率'],
		           rows: [
		             { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
		             { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
		             { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
		             { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
		             { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
		             { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
		           ]
		 },
		 chartData1: {
		           columns: ['日期', '访问用户'],
		           rows: [
		             { '日期': '中', '访问用户': 1393 },
		             { '日期': '美', '访问用户': 3530 },
		             { '日期': '日', '访问用户': 2923 },
		             { '日期': '韩', '访问用户': 1723 },
		             { '日期': '英', '访问用户': 3792 },
		             { '日期': '法', '访问用户': 4593 }
		           ]
		         },
		  chartSettings: {
		          axisSite: { right: ['下单率'] },
		          yAxisType: ['KMB', 'percent'],
		          yAxisName: ['数值', '比率']
		        }
	  }
  },
   components:{
	   userCard,
	   newsCard,
	   progressCard,
	   todoCard
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.charts-line-box{
	background-color: #fff;
	margin-top: 20px;
	border-radius: 4px;
	margin-left: 10px;
}
.charts-pie-box{
	background-color: #fff;
	margin-top: 20px;
	border-radius: 4px;
}
</style>
