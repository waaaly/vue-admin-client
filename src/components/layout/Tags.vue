<template>
	<div class="tags" v-if="showTags">
		<draggable v-model="tagsList" >
			<transition-group>
				<li class="tags-li" v-for="(item,index) in tagsList"
					:key="index"
					:class="{active:isActive(item.path)}">
					<router-link :to="item.path" class="tags-li-title">
						{{item.title}}
					</router-link>
					<span class="tags-li-icon" @click="closeTags(index)">
						<i class="el-icon-close"></i>
					</span>
				</li>
			</transition-group>
		</draggable>
		
		<div class="tags-close-box">
			<el-dropdown @command="handleTags">
				<el-button size="mini" type="primary">
					标签选项<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<el-dropdown-menu size="small" solt="dropdown">
					<el-dropdown-item command="other">关闭其他</el-dropdown-item>
					<el-dropdown-item command="left">关闭左侧</el-dropdown-item>
					<el-dropdown-item command="right">关闭右侧</el-dropdown-item>
					<el-dropdown-item command="all">关闭所有</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import draggable from "vuedraggable"
	import bus from './EventBus'
	export default{
		name:'Tags',
		data(){
			return {
				tagsList:[]
			}
		},
		components:{
			draggable
		},
		methods:{
			isActive(path){
				return path === this.$route.fullPath;
			},
			handleTags(command){
				switch(command){
					case 'other':{
						this.colseOther();
						break ;
					}
					case 'left':{
						this.colseLeft();
						break ;
					}
					case 'right':{
						this.colseRight();
						break ;
					}
					case 'all':{
						this.colseAll();
						break ;
					}
				}
			},
			colseOther(){
				const curItem = this.tagsList.filter(item => {
				    return item.path === this.$route.fullPath;
				})
				this.tagsList = curItem;
			},
			colseLeft(){
				
			},
			colseRight(){
				
			},
			colseAll(){
				this.tagsList = [];
				this.$router.push('/');
			},
			// 关闭单个标签
			closeTags(index) {
				if(this.tagsList.length==1){
					this.$message.success('就只剩她了，你忍心关掉嘛~~')
					return
				}
			    const delItem = this.tagsList.splice(index, 1)[0];
			    const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
			    if (item) {
			        delItem.path === this.$route.fullPath && this.$router.push(item.path);
			    }else{
			        this.$router.push('/');
			    }
			},
			// 设置标签
			setTags(route){
			    const isExist = this.tagsList.some(item => {
			        return item.path === route.fullPath;
			    })
			    if(!isExist){
			        if(this.tagsList.length >= 8){
			            this.tagsList.shift();
			        }
			        this.tagsList.push({
			            title: route.meta.title,
			            path: route.fullPath,
			            name: route.matched[1].components.default.name
			        })
			    }
			    bus.$emit('tags', this.tagsList);
			},
		},
		created(){
			//创建tagslist
			this.setTags(this.$route);
			//监听关闭当前标签页面，并控制路由跳转
			bus.$on('close_current_tag',()=>{ 
				for(let index in this.tagsList){
					let item = this.tagsList[index];
					let len = this.tagsList.length;
					if(item.path === this.$route.fullPath){
						if(index < len - 1){
							this.$rouer.push(this.tagsList[index+1].path);
						}else if(index > 0){
							this.$route.push(this.tagsList[index-1].path);
						}else{
							this.$route.push('/');
						}
						this.tagsList.splice(index,1);
						break;
					}
				}
			})
		},
		computed: {
		    showTags() {
		        return this.tagsList.length > 0;
		    }
		},
		watch:{
		    $route(newValue, oldValue){
		        this.setTags(newValue);
		    }
		},
	}
</script>

<style>
	.tags {
	    position: relative;
	    height: 30px;
	    overflow: hidden;
	    background: #fff;
	    padding-right: 120px;
	    box-shadow: 0 10px 10px #d0d0d0;
		border-bottom: 1px solid #55aaff;
	}
	
	.tags ul {
	    box-sizing: border-box;
	    width: 100%;
	    height: 100%;
	}
	
	.tags-li {
	    float: left;
	    margin: 3px 5px 2px 3px;
	    border-radius: 3px;
	    font-size: 12px;
	    overflow: hidden;
	    cursor: pointer;
	    height: 23px;
	    line-height: 23px;
	    border: 1px solid #e9eaec;
	    background: #fff;
	    padding: 0 5px 0 12px;
	    vertical-align: middle;
	    color: #666;
	    -webkit-transition: all .3s ease-in;
	    -moz-transition: all .3s ease-in;
	    transition: all .3s ease-in;
	}
	
	.tags-li:not(.active):hover {
	    background: #f8f8f8;
	}
	
	.tags-li.active {
	    color: #fff;
		border: 1px solid #409eff;
		background-color: #409eff;
	}
	
	.tags-li-title {
	    float: left;
	    max-width: 80px;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    margin-right: 5px;
	    color: #666;
	}
	
	.tags-li.active .tags-li-title {
	    color: #fff;
		border: 1px solid #409EFF;
		background-color: #409EFF;
		
	}
	
	.tags-close-box {
	    position: absolute;
	    right: 0;
	    top: 0;
	    box-sizing: border-box;
	    padding-top: 1px;
	    text-align: center;
	    width: 110px;
	    height: 30px;
	    background: #fff;
	    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
	    z-index: 10;
	}
</style>
