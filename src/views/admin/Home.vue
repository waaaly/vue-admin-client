<template>
	<div class="home-container">
		<v-header></v-header>
		<v-sidebar></v-sidebar>
		<div class="home-main-container" :class="{'content-collapse':isCollapse}">
			<v-tags></v-tags>
			<div class="home-main-content">
				<transition name="move" mode="out-in">
					<keep-alive :include="tagsList">
						<router-view></router-view>
					</keep-alive>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
	import vSidebar from "@/components/layout/Sidebar.vue"
	import vHeader from "@/components/layout/Header.vue"
	import vTags from "@/components/layout/Tags.vue"
	import bus from "@/components/layout/EventBus.js"
	export default{
		components:{
			vSidebar,
			vHeader,
			vTags,
		},
		data(){
			return {
				tagsList:[],
				isCollapse:false
			}
		},
		created(){
			//监听侧边栏
			bus.$on('collapse-content',msg=>{
				this.isCollapse = msg
			});
		}
	}
</script>

<style>
.content-collapse {
    left: 65px;
}
.move-enter-active,
.move-leave-active {
    transition: opacity .5s;
}

.move-enter,
.move-leave {
    opacity: 0;
}
</style>