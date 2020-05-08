<template>
	<el-menu
	  :default-active="activeIndex"
	  class="el-menu-demo"
	  mode="horizontal"
	  @select="handleSelect"
	  background-color="#8c8c8f"
	  text-color="#fff"
	  :router="true"
	  active-text-color="#ff00ff">
	  <el-menu-item index="/"><i  class="el-icon-s-home"></i>首页</el-menu-item>
	  <el-submenu index="2">
		<template slot="title"><i  class="el-icon-menu"></i>分类</template>
		<el-menu-item index="2-1">技术分享</el-menu-item>
		<el-menu-item index="2-2">资源整合</el-menu-item>
		<el-menu-item index="2-3">选项3</el-menu-item>
	  </el-submenu>
	  <el-submenu index="3">
		  <template slot="title"><i  class="el-icon-s-opportunity"></i>实验中心</template>
		  <el-menu-item index="/admin">后台管理系统</el-menu-item>
		  <el-menu-item index="/webchat">WebChat</el-menu-item>
		  <el-menu-item index="3-3">选项3</el-menu-item>
	  </el-submenu>
	  <el-menu-item index="4" ><i  class="el-icon-chat-dot-square"></i>给我留言</el-menu-item>
	  <el-menu-item index="5"><a href="https://www.ele.me" target="_blank"><i  class="el-icon-trophy"></i>小伙伴们</a></el-menu-item>
	</el-menu>
</template>

<script>
	
export default{
	data() {
		  return {
			activeIndex: '/',
		  };
	},
	methods: {
	  handleSelect(key, keyPath) {
		console.log(key, keyPath);
	  }
	},
	
}
</script>

<style>
	.el-submenu__title i {
	    color: #fff;
	}
	.el-menu-item i {
	    color: #fff;
	}

	
</style>
