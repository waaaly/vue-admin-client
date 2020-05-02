<template>
  <div >
    <el-row >
		<el-breadcrumb separator="/">
		    <el-breadcrumb-item>
		        <i class="el-icon-set-up"></i> 制造商管理
		    </el-breadcrumb-item>
		</el-breadcrumb>
		<el-col class="manufacturer-box">
			<manufacturer-table></manufacturer-table>
		</el-col>
	</el-row>
	<el-row>
		<el-breadcrumb>
			<el-breadcrumb-item>
				<i class="el-icon-mobile-phone"></i> 手机商品管理
			</el-breadcrumb-item>
		</el-breadcrumb>
	</el-row>
  </div>
</template>

<script>
	import manufacturerTable from '../components/table/ManufacturerTable.vue'
export default {
  name: 'Table',
  data(){
	  return{
		  
	  }
  },
  components:{
	  manufacturerTable,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.manufacturer-box{
	background-color: #fff;
	margin: 10px;
	padding-left: 10px;
	border-radius: 5px;
}
</style>
