<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu"
			:default-active="onRoutes"
			:collapse="isCollapse"
			background-color="#5a5a5a"
			text-color="#bac7ca"
			active-text-color="#20a0ff"
			unique-opened
			router
			>		
			<template v-for="(item,index) in items" >
				<template v-if="item.subs">
					<el-submenu :index="item.index" :key="index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title">{{item.title}}</span>
						</template>
						<template v-for="subItem in item.subs" >
							<el-submenu v-if="subItem.subs" :index="subItem.index" 
								:key="subItem.index">
								<template slot="title">{{subItem.title}}</template>
								<el-menu-item v-for="(threeItem,threeIndex) in subItem.subs" 
								:key="threeIndex" :index="threeItem.index">
									{{threeItem.title}}
								</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index" >
								{{subItem.title}}
							</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index">		
						<i :class="item.icon"></i>
						<span slot="title">{{item.title}}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
	import bus from './EventBus.js'
	export default{
		name:'Sidebar',
		data(){
			return{
				isCollapse:false,
				items:[
					{
						title:'系统首页',
						index:'/admin/dashboard',
						icon:'el-icon-s-home'
					},
					{
						title:'基础表格',
						index:'/admin/table',
						icon:'el-icon-menu'
					},
					{
						title:'选项卡',
						index:'/admin/tabs',
						icon:'el-icon-set-up'
					},
					{
						title:'表单',
						index:'/admin/table',
						icon:'el-icon-notebook-1',
						subs:[
							{
								title:'基本表单',
								index:'/admin/form'
							},
							{
								title:'文件上传',
								index:'/admin/upload'
							},
							{
							    index: '3-2',
							    title: '三级菜单',
							    subs: [
							        {
							            index: '/admin/editor',
							            title: '富文本编辑器'
							        },
							        {
							            index: '/admin/markdown',
							            title: 'markdown编辑器'
							        }
							    ]
							},
						]
					},
					{
						title:'图表',
						index:'/admin/charts',
						icon:'el-icon-pie-chart'
					},
					{
						title:'拖曳列表',
						index:'/admin/draglist',
						icon:'el-icon-monitor'
					},
					{
						title:'拖曳弹框',
						index:'/admin/dragdialog',
						icon:'el-icon-rank'
					},
					
				]
			}
		},
		components:{
			
		},
		computed:{
			onRoutes(){
				return this.$route.path;
			}
		},
		created(){
			//通过eventbus 进行组件通信，折叠侧边栏
			bus.$on('collapse', msg => {
			    this.isCollapse = msg;
			    bus.$emit('collapse-content', msg);
			});
		}
	}
</script>

<style>
	.sidebar {
	    display: block;
	    position: absolute;
	    left: 0;
	    top: 70px;
	    bottom: 0;
	    overflow-y: scroll;
	}
	.sidebar::-webkit-scrollbar {
	    width: 0;
	}
	.sidebar-el-menu:not(.el-menu--collapse) {
	    width: 250px;
	}
	.sidebar > ul {
	    height: 100%;
	}
</style>
