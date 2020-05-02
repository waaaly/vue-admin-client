<template>
	<el-card shadow="hover" style="height:403px; margin-top: 20px;">
		<div slot="header" class="clearfix">
			<span>今日待办</span>
			<el-button style="float: right; padding: 3px 0" @click="onAddTodo" type="text">添加</el-button>
		</div>
		<el-table :show-header="false" :data="todoList" max-height="320px" style="width:100%;">
			<el-table-column width="40">
				<template slot-scope="scope">
					<el-checkbox v-model="scope.row.status"></el-checkbox>
				</template>
			</el-table-column>
			<el-table-column align="left">
				<template slot-scope="scope">
					<div :class="{'todo-item-done': scope.row.status}">{{scope.row.title}}</div>
				</template>
			</el-table-column>
			<el-table-column align="right">
				<template slot-scope="scope">
					<div :class="{'todo-item-done': scope.row.status}">{{scope.row.time}}</div>
				</template>
			</el-table-column>
			<el-table-column align="right">
				<template slot-scope="scope">
					<i class="el-icon-edit"></i>
					<i class="el-icon-delete" @click="onDelTodo(scope.$index)"></i>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			todoList(){
				return this.$store.state.todoList;
			}
		},
		methods:{
			onAddTodo(){
				this.$router.push('/form')
			},
			onDelTodo(index){
				this.$store.commit('delTodo',{
					index:index
				})
			}
		}
	}
</script>

<style>
	.todo-item-done{
		text-decoration: line-through;
		 color: #999;
	}
</style>
