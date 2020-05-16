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
		<el-menu-item index="/list">文章列表</el-menu-item>
		<el-menu-item index="/assets">资源整理</el-menu-item>
	  </el-submenu>
	  <el-submenu index="3">
		  <template slot="title"><i  class="el-icon-s-opportunity"></i>实验中心</template>
		  <el-menu-item index="/admin">VueAdmin</el-menu-item>
		  <el-menu-item index="/webchat">WebChat</el-menu-item>
		  <el-menu-item index="/webplayer">WebPlayer</el-menu-item>
	  </el-submenu>
	  <el-menu-item index="/message" ><i  class="el-icon-chat-dot-square"></i>留言墙</el-menu-item>
	  <el-menu-item index="/manage" ><i  class="el-icon-setting"></i>站长中心</el-menu-item>
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
