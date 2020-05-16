<template>
	<div >
		<div class="shareTitle">
		    <div class="ui label" >
		        <a  :href="'#/Share?classId='+classId">文章列表</a>
		    </div>
		    <ul class="shareclassTwo" >
		        <li v-for="(citem,index) in detshare">
		            <a :href="'#/Share?classId='+classId+'&classtwoId='+citem.class_id" 
					:class="citem.class_id==classtwoId?'active':''">{{citem.name}}</a>
		        </li>
		    </ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				detshare:[
				    {classId:5,name:'移动端H5',pid:1},
				    {classId:6,name:'pc端web',pid:1},
				    {classId:7,name:'小程序',pid:1},
				    {classId:8,name:'php',pid:1},
				    {classId:9,name:'nodejs',pid:1},
				    {classId:10,name:'软件',pid:1},
				    {classId:11,name:'其他',pid:1}
				],
			}
		}
	}
</script>

<style>
	.shareTitle{
	    margin-bottom: 40px;
	    position: relative;
	    border-radius: 5px;
	    background: #fff;
	    padding:15px;
	}
	.shareclassTwo{
	    width:100%;
	}
	.shareclassTwo li{
	    display: inline-block;
	}
	.shareclassTwo li a{
	    display: inline-block;
	    padding:3px 7px;
	    margin:5px 10px;
	    color:#fff;
	    border-radius: 4px;
	    background: #64609E;
	    border: 1px solid #64609E;
	    transition: transform 0.2s linear;
	    -webkit-transition: transform 0.2s linear;
	}
	.shareclassTwo li a:hover{
	    transform: translate(0,-3px);
	    -webkit-transform: translate(0,-3px);
	}
	.shareclassTwo li a.active{
	    background: #fff;
	    color:#64609E;
	
	}
</style>
