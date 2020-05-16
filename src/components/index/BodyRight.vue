<template>
	<div class="rightlistBox" ref='bodyright'>
	    <section :class="fixDo?'avatar-fixed':'avatar'">
	        <div class="r1-head">
	            <img src="../../assets/img/right-logo.jpg" alt="">
	            <h1 >
	                <span>Waaaly</span>
	            </h1>
	        </div>
	        <div class="r1-body">
	            <p>可以在这里遇见我呢~</p>
	            <div class="catch-me" >
	                <div >
	                    <el-tooltip  class="item"  content="Github" placement="top" >
	                        <a  :href="waaaly.git" target="_blank" ><i class="">G</i></i></a>
	                    </el-tooltip>
	                    <el-tooltip class="item" effect="dark" content="QQ" placement="top">
	                        <a  :href="waaaly.qq" target="_blank"><i class="">Q</i></a>
	                    </el-tooltip>
	                    <el-tooltip class="item" effect="dark" content="微博" placement="top">
	                        <a :href="waaaly.sina" target="_blank"><i class="">W</i></a>
	                    </el-tooltip>
	                </div>
	                <div >
	                    <el-tooltip class="item" effect="dark" content="微信" placement="top">
	                        <a :href="waaaly.wechat" target="_blank"><i class="">V</i></a>
	                    </el-tooltip>
	                    <el-tooltip class="item" effect="dark" content="CSDN" placement="top">
	                        <a :href="waaaly.csdn" target="_blank"><i class="">C</i></a>
	                    </el-tooltip>
	                    <!-- <el-tooltip class="item" effect="dark" content="简历" placement="top">
	                        <a :href="waaaly.job" target="_blank"><i class="fa fa-fw fa-file-word-o"></i></a>
	                    </el-tooltip> -->
	                    <el-tooltip class="item" effect="dark" content="更多" placement="top">
	                        <a href="/Aboutme" ><i class="el-icon-more"></i></a>
	                    </el-tooltip>
	                </div>
	            </div>
	        </div>
	    </section>
	    <section :class="fixDo?'rs2 fixed':'rs2'" @click="lovemeFun">
	        <p>
	            可以给我一颗小心心嘛❤~~
	        </p>
	        <div class="">
	            <i :class="loveme?'heart active':'heart'" ></i>
	            <span>999</span>
	        </div>
	    </section>
		<!-- 右侧上滑小图片 -->
		<div :class="gotoTop?'toTop hidden':'toTop goTop hidden'" @click="toTopfun">
		    <img src="../../assets/img/long.png" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				waaaly:{
				    git: 'https://github.com/Aimee1608',
				    qq: 'static/img/aimee/QQ.jpg',
				    sina: 'https://weibo.com/u/2242812941',
				    wechat: 'static/img/aimee/erwm.jpg',
				    csdn: 'http://blog.csdn.net/Aimee1608',
				    job: 'http://aimee.mangoya.cn'
				},
				going:false,//是否正在执行上滑动作
				fixDo:false,
				gotoTop:false,//返回顶部
				loveme:false,
			}
		},

		mounted(){
			 window.addEventListener('scroll', this.handleScroll, true); 
		},
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll, true)
		},
		methods:{
			handleScroll(){
				var t = document.getElementById('bodyright').getBoundingClientRect().top ;
				if(!this.going){
				    if(t<56){
				        this.gotoTop = true;
				    }else{
				        this.gotoTop = false;
				    }
				}
				if(t<56){
				    this.fixDo = true;
				}else{
				    this.fixDo = false;
				}
			},
			lovemeFun:function(){
			    var that = this;
		
			    this.loveme = true;
			    var timer = setTimeout(function(){
			        that.loveme = false;
			        clearTimeout(timer);
			    },3000)
			},
			toTopfun:function(e){
			    var that = this;
			    this.gotoTop = false;
			    this.going = true;
			    var timer = setInterval(function(){
			          //获取滚动条距离顶部高度
			          var osTop = document.documentElement.scrollTop || document.body.scrollTop;
					  console.log(osTop)
					 // var osTop = document.getElementById('bodyright').getBoundingClientRect().top
			          var ispeed = Math.floor(-osTop / 7);
			          document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
			          //到达顶部，清除定时器
			          if (osTop == 0) {
			              that.going = false;
			            clearInterval(timer);
			            timer = null;
			          };
			    },30);
			},
		}
	}
</script>

<style >
	.rightlistBox{
		position: relative;
	}
	.rightlistBox section {
	    transition: all 0.2s linear;
	    background: #fff;
	    padding:15px;
	    margin-bottom: 20px;
	    border-radius: 5px;
	}
	.rightlistBox section:hover{
	    transform: translate(0,-2px);
	    box-shadow:0 15px 30px rgba(0,0,0,.1);
	}
	.rightlistBox .r1-head{
	    text-align: center;
	    border-radius: 4px 4px 0 0 ;
	    text-align: center;
	    position: relative;
	    /*box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);*/
	}
	.rightlistBox .r1-head img{
	    width:100%;
	    min-height: 100px;
	}
	.rightlistBox .r1-head h1{
	    position: absolute;
	    bottom:5px;
	    margin:0 0 0 -65px;
	    font-size: 20px;
	    letter-spacing:0.5px;
	    color:#fff;
	    text-shadow: 1px 1px 1px rgba(0,0,0,.7);
	    font-weight: 700;
	    width:130px;
	    left:50%;
	}
	.rightlistBox .r1-head h1 span{
	    opacity: 0.3;
	}
	.rightlistBox .r1-body p{
	    font-size: 14px;
	    margin:5px 0 8px 0;
	    font-weight: 700;
	    text-align: center;
	}
	.rightlistBox .r1-body .catch-me{
	    text-align: center;
	}
	.rightlistBox .r1-body .catch-me a{
	    display: inline-block;
	    margin-bottom: 7px;
	    position: relative;
	    text-decoration: none;
		color: #444;
		background-color: #fff;
	}
	.rightlistBox .r1-body .catch-me a:hover i{
	    color:#fff;
	    background: #F4692C;
	}
	.rightlistBox .r1-body .catch-me a i{
	    display: inline-block;
	    font-size: 18px;
	    width:42px;
	    height:42px;
	    line-height: 42px;
	    border-radius: 42px;
	    color:rgba(0,0,0,0.5);
	    background: rgba(0,0,0,0.1);
	    transition: all 0.3s ease-in-out;
	    font-style: normal;
	    margin:0 3.2px;
	}
	.avatar{
		position: relative;
	}
	.avatar-fixed{
		position: fixed;
		top:70px;
		width: 22%;
	}
	.rightlistBox .rs2{
	    position: relative;
	    min-height: 100px;
	}
	.rightlistBox .rs2.fixed{
	    position: fixed;
	    top:460px;
	    width:22%;
	}
	.rightlistBox .rs2 p{
	    color:#DF2050;
	    cursor: pointer;
	    font-size: 20px;
	    margin-bottom: 10px;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    text-align: center;
	    margin-top:10px;
	    font-weight: 500;
	}
	.rightlistBox .rs2 div{
	    color:#DF2050;
	    cursor: pointer;
	    text-align: center;
	    font-size: 40px;
	    position: absolute;
	    width:100%;
	    height:100px;
	    line-height: 100px;
	    left:0;
	    top:30px;
	}
	.rightlistBox .rs2 div i.heart{
	    display: inline-block;
	    text-align: center;
	    width: 100px;
	     height: 100px;
	     margin-left: -20px;
	     margin-top:-5px;
	     background: url(../../assets/img/heart.png) no-repeat;
	     background-position: 0 0;
	      cursor: pointer;
	      -webkit-transition: background-position 1s steps(28);
	      transition: background-position 1s steps(28);
	      -webkit-transition-duration: 0s;
	      transition-duration: 0s;
	      vertical-align: middle;
	}
	.rightlistBox .rs2 div i.heart:hover{
	    transform: scale(1.15);
	    -webkit-transform: scale(1.15);
	}
	.rightlistBox .rs2 div i.heart.active{
	    -webkit-transition-duration: 1s;
	        transition-duration: 1s;
	        background-position: -2800px 0;
	}
	.rightlistBox .rs2 div span{
	    margin-left: -30px;
	}
	/**********排队来说*************/
	.rightlistBox .rs3 .rs3-item{
	    font-size: 13px;
	    line-height: 20px;
	}
	.rightlistBox .rs3 .rs3-item a{
	    display:block;
	    padding:5px;
	    transition: all .3s ease-out;
	    border-bottom: 1px solid #ddd;
	    margin:5px 0;
	}
	.rightlistBox .rs3 .rs3-item a:hover{
	    background: rgba(230,244,250,.5);
	    border-radius: 5px;
	}
	.rightlistBox .rs3 .rs3-photo{
	    float:left;
	}
	.rightlistBox .rs3 .rs3-photo img{
	    border-radius: 50%;
	    width:32px;
	    height:32px;
	    object-fit: cover;
	}
	.rightlistBox .rs3 .rs3-inner{
	    margin-left: 40px;
	}
	.rightlistBox .rs3 .rs3-inner .rs3-author{
	    font-weight: 700;
	}
	.rightlistBox .rs3 .rs3-inner .rs3-text{
	    font-size: 12px;
	    text-align: justify;
	}
	.rightlistBox .rs3 .rs3-item:last-child a{
	    border-bottom: none;
	}
	/************排队看这些***************/
	.rightlistBox .rs4 li{
	    padding:8px 0;
	    text-align: justify;
	}
	.rightlistBox .rs4 li a{
	    font-weight: 600;
	}
	.rightlistBox .rs4 li a:hover{
	    color:#64609E;
	}
	/*回到顶部*/
	/*返回到顶部*/
	.toTop{
	    position: fixed;
	    right:40px;
	    top:60px;
	    z-index: 101;
	    width:70px;
	    height:900px;
	    transition: all .5s 0.3s ease-in-out;
	    cursor: pointer;
	}
	.goTop{
	    top:-950px;
	}
	.toTop img,.toTophui img{
	    width:100%;
	    height:auto;
	}
	.toTophui{
	    position: fixed;
	    right:10px;
	    bottom:80px;
	    z-index: 99;
	    width:120px;
	    height:120px;
	    transition: all .5s 0.3s ease-in-out;
	    cursor: pointer;
	    animation: toflow 2s ease-in-out infinite;
	}
	@keyframes toflow {
	    0%{
	        /*top:400px;*/
	        transform: scale(0.95) translate(0,10px);
	    }
	    50%{
	        /*top:410px;*/
	        transform:scale(1) translate(0,0px);
	    }
	    100%{
	        /*top:400px;*/
	        transform:scale(0.95) translate(0,10px);
	    }
	}
	.goTophui{
	    bottom:120vh;
	}
</style>
