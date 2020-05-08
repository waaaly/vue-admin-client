<template>
	<div >
		<div class="scene">
			<div><span id="luke" @click="onClickLuke"></span></div>
		</div>
		<div class="user-info">
			<a href="#/Aboutme">
				<img src="../../assets/img/avatar.jpg" alt="">
			</a>
			<h2 class="h-description">
				  <a href="/Aboutme">
					  "人生三大憾事：海棠无香，鲫鱼多骨，代码Bug"
				  </a>
			</h2>
		</div>
	</div>
</template>

<script>
	import {Typeit} from '@/utils/typeit.js'
	export default{
		name:'HeaderUser',
		methods:{
			onClickLuke(){
				var that = this;
				var timer = setTimeout(function() {
					Typeit('Hello Wrold', "#luke"); //打字机效果
					clearTimeout(timer);
				}, 500);
			}
		},
		mounted() {
			var that = this;
			var timer = setTimeout(function() {
				Typeit('Waaaly', "#luke"); //打字机效果
				clearTimeout(timer);
			}, 500);
		}
	}
</script>

<style>
	 .scene {
		width: 80%;
		/*height:300px;*/
		text-align: center;
		font-size: 100px;
		font-weight: 200;
		color: #fff;
		position: absolute;
		left: 10%;
		top: 200px;
		font-family: 'Sigmar One', Arial;
		text-shadow: 0 2px 2px #47456d;
	
	}
	
	.scene span {
		transform: matrix(1, 0, 0, 1, 0, 0);
		-webkit-transform: matrix(1, 0, 0, 1, 0, 0);
		text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
	}
	
	
	.user-info {
		text-align: center;
		width: 70%;
		margin: auto;
		position: relative;
		top: 480px;
		padding: 40px 0;
		font-size: 16px;
		opacity: 0.98;
		background: rgba(230, 244, 249, 0.8);
		border-radius: 5px;
		z-index: 1;
		animation: b 1s ease-out;
		-webkit-animation: b 1s ease-out;
	}
	
	@-webkit-keyframes b {
		0% {
			-webkit-transform: translateY(90px);
			transform: translateY(90px);
		}
		80% {
			-webkit-transform: translateY(5px);
			transform: translateY(5px)
		}
		90% {
			-webkit-transform: translateY(-5px);
			transform: translateY(-5px)
		}
		to {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
	}
	
	@keyframes b {
		0% {
			-webkit-transform: translateY(90px);
			transform: translateY(90px);
		}
		80% {
			-webkit-transform: translateY(5px);
			transform: translateY(5px)
		}
		90% {
			-webkit-transform: translateY(-5px);
			transform: translateY(-5px)
		}
		to {
			-webkit-transform: translateY(0);
			transform: translateY(0)
		}
	}
	
	.user-info img {
		width: 100px;
		height: 100px;
		border-radius: 100%;
		transition: all .4s ease-in-out;
		-webkit-transition: all .4s ease-in-out;
		object-fit: cover;
	}
	
	.user-info img:hover {
		transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
	}
	
	.user-info h2 {
		margin-top: 20px;
		font-size: 18px;
		font-weight: 700;
		/*font-family: 'Sigmar One';*/
	}
	.user-info h2  a{
		background: linear-gradient(to right, #DF2050, #48456D);
		-webkit-background-clip: text;
		color: transparent;
	}
</style>
