import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component:() => import(/* webpackChunkName:"index" */'../views/Index.vue'),
	meta:{title:'网站首页'}
  },
  {
	  path:'/admin',
	  component:() => import(/* webpackChunkName:"home" */ '../views/admin/Home.vue'),
	  redirect:'/admin/dashboard',
	  children:[
		  {
		    path: '/admin/login',
		    name: 'Login',
		  	component: () => import(/* webpackChunkName: "login" */ '../views/admin/Login.vue'),
		  	meta:{title:'登录',admin:true}
		  },
		  {
			path:'/admin/dashboard',
			component:()=>import(/* webpackChunkName:"dashboard" */ '../views/admin/Dashboard.vue'),
			meta:{title:'系统首页',admin:true} 
		  },
		  {
			  path:'/admin/table',
			  component:()=>import(/* webpackChunkName:'table' */ '../views/admin/Table.vue'),
			  meta:{title:'基础表格',admin:true}
		  },
		  {
			  path:'/admin/icon',
			  component:()=>import(/* webpackChunkName:'icon'*/ '../views/admin/Icon.vue'),
			  meta:{title:'基础图表',admin:true}
		  },
		  {
			  path:'/admin/tabs',
			  component:()=>import(/*webpackChunkName:'tabs'*/ '../views/admin/Tabs.vue'),
			  meta:{title:'选项卡',admin:true}
		  },
		  {
			  path:'/admin/form',
			  component:()=>import(/*webpackChunkName:'form'*/ '../views/admin/Form.vue'),
			  meta:{title:'基础表单',admin:true}
		  },
		  {
		      // 富文本编辑器组件
		      path: '/admin/editor',
		      component: () => import(/* webpackChunkName: "editor" */ '../views/admin/Editor.vue'),
		      meta: { title: '富文本编辑器' ,admin:true}
		  },
		  {
		      // markdown组件
		      path: '/admin/markdown',
		      component: () => import(/* webpackChunkName: "markdown" */ '../views/admin/Markdown.vue'),
		      meta: { title: 'markdown编辑器' ,admin:true}
		  },
		  {
		      // 图片上传组件
		      path: '/admin/upload',
		      component: () => import(/* webpackChunkName: "upload" */ '../views/admin/Upload.vue'),
		      meta: { title: '文件上传' ,admin:true}
		  },
		  {
		      // vue-schart组件
		      path: '/admin/charts',
		      component: () => import(/* webpackChunkName: "chart" */ '../views/admin/Charts.vue'),
		      meta: { title: 'schart图表' ,admin:true}
		  },
		  {
		      // 拖拽列表组件
		      path: '/admin/draglist',
		      component: () => import(/* webpackChunkName: "drag" */ '../views/admin/DragList.vue'),
		      meta: { title: '拖拽列表' ,admin:true}
		  },
		  {
		      // 拖拽Dialog组件
		      path: '/admin/dragdialog',
		      component: () => import(/* webpackChunkName: "dragdialog" */ '../views/admin/DragDialog.vue'),
		      meta: { title: '拖拽弹框' ,admin:true}
		  },
	  ]
  },
  {
	path:'/webchat',
	component:()=>import(/* webpackChunkName:"webchat" */ '../views/webchat/Index.vue'),
	redirect:'/webchat/roomlist',
	children:[
		{
			path:'/webchat/roomlist',
			component:()=>import(/* webpackChunkName:"roomlist" */ '../views/webchat/RoomList'),
		},
		{
			path:'/webchat/addroom',
			component:()=>import(/* webpackChunkName:"roomlist" */ '../views/webchat/AddRoom'),
		},
		{
			path:'/webchat/joinroom',
			component:()=>import(/* webpackChunkName:"roomlist" */ '../views/webchat/JoinRoom'),
		},
		{
			path:'/webchat/chatroom',
			component:()=>import(/* webpackChunkName:"roomlist" */ '../views/webchat/ChatRoom'),
		},
	]
  },
  {
		path:'/webplayer',
		component:()=>import(/* webpackChunkName:'playerindex' */ '../views/webplayer/Index'),
  },
  {
      path: '*',
      component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
      meta: { title: '404' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
	NProgress.start()
	console.log(to.meta)
	if(to.meta.admin){
		console.log('admin')
		document.title = `后台管理系统 | ${to.meta.title}`;
		const userInfo = JSON.parse(localStorage.getItem('userInfo'))
		if(!userInfo && to.path !== '/admin/login'){
			next('/admin/login')
		}else {
		    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
		    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/admin/editor') {
		        Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
		            confirmButtonText: '确定'
		        });
		    } else {
		        next();
		    }
		}
	}else{
		console.log('home')
		next();
	}
})

router.afterEach((to,from,next)=>{
	NProgress.done()
})
export default router
