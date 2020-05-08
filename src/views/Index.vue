<template>	
	<div >
		<el-row :gutter="20" type="flex" justify="center" class="header-container">
			<v-header></v-header>	
		</el-row>
		<el-row class="head-img">
			<header-user></header-user>
		</el-row>
		<el-row class="body-container">
			<v-body></v-body>		
		</el-row>
		<el-row type="flex" justify="center" class="foot-container">
			<v-foot></v-foot>
		</el-row>
		<canvas id="canvas" ref="canvas" class="canvas-bg"></canvas>
	</div>
</template>

<script>
	import vHeader from "@/components/index/Header.vue"
	import vFoot from "@/components/index/Foot.vue"
	import HeaderUser from "@/components/index/HeaderUser.vue"
	import vBody from "@/components/index/Body.vue"
	export default{
		name:"Index",
		components:{
			vHeader,
			HeaderUser,
			vBody,
			vFoot,
		},
		mounted(){
			var canvas = document.getElementById('canvas');
			var ctx = canvas.getContext('2d');
			canvas.height = window.innerHeight;
			canvas.width = window.innerWidth;
	 
			var texts = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ'.split('');
	 
			var fontSize = 16;
			var columns = canvas.width/fontSize;
			// 用于计算输出文字时坐标，所以长度即为列数
			var drops = [];
			//初始值
			for(var x = 0; x < columns; x++){
				drops[x] = 1;
			}
	 
			function draw(){
				//让背景逐渐由透明到不透明
				ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				//文字颜色
				ctx.fillStyle = '#0F0';
				ctx.font = fontSize + 'px arial';
				//逐行输出文字
				for(var i = 0; i < drops.length; i++){
					var text = texts[Math.floor(Math.random()*texts.length)];
					ctx.fillText(text, i*fontSize, drops[i]*fontSize);
	 
					if(drops[i]*fontSize > canvas.height || Math.random() > 0.95){
						drops[i] = 0;
					}
	 
					drops[i]++;
				}
			}
			setInterval(draw, 33);
		}
	}
</script>

<style>
	.header-container{
		background-color: #8c8c8f; 
		opacity: 0.7;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 100;
	}
	
	.head-img{
		position: relative;
		width: 100%;
		height: 600px;
		background-image: url(../assets/img/home-bg.png);
		background-size:100% 100%;
	}
	.body-container{
		margin-top: 120px;
	}
	.canvas-bg{
		    position: fixed;
		    left: 0px;
		    top: 0px;
		    z-index: -100;
		    pointer-events: none;
		width: 100%;
	}
	.foot-container{
		background-color: #232323;	
		text-align: center;
		z-index: 100;
	}
</style>
