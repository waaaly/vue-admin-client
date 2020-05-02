import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
	  path:'/',
	  component:() => import(/* webpackChunkName:"home" */ '../views/Home.vue'),
	  children:[
		  {
			path:'/index',
			component:()=>import(/* webpackChunkName:"dashboard" */ '../views/Dashboard.vue'),
			meta:{title:'系统首页'} 
		  },
		  {
			  path:'/table',
			  component:()=>import(/* webpackChunkName:'table' */ '../views/Table.vue'),
			  meta:{title:'基础表格'}
		  },
		  {
			  path:'/icon',
			  component:()=>import(/* webpackChunkName:'icon'*/ '../views/Icon.vue'),
			  meta:{title:'基础图表'}
		  },
		  {
			  path:'/tabs',
			  component:()=>import(/*webpackChunkName:'tabs'*/ '../views/Tabs.vue'),
			  meta:{title:'选项卡'}
		  },
		  {
			  path:'/form',
			  component:()=>import(/*webpackChunkName:'form'*/ '../views/Form.vue'),
			  meta:{title:'基础表单'}
		  },
		  {
		      // 富文本编辑器组件
		      path: '/editor',
		      component: () => import(/* webpackChunkName: "editor" */ '../views/Editor.vue'),
		      meta: { title: '富文本编辑器' }
		  },
		  {
		      // markdown组件
		      path: '/markdown',
		      component: () => import(/* webpackChunkName: "markdown" */ '../views/Markdown.vue'),
		      meta: { title: 'markdown编辑器' }
		  },
		  {
		      // 图片上传组件
		      path: '/upload',
		      component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue'),
		      meta: { title: '文件上传' }
		  },
		  {
		      // vue-schart组件
		      path: '/charts',
		      component: () => import(/* webpackChunkName: "chart" */ '../views/Charts.vue'),
		      meta: { title: 'schart图表' }
		  },
		  {
		      // 拖拽列表组件
		      path: '/draglist',
		      component: () => import(/* webpackChunkName: "drag" */ '../views/DragList.vue'),
		      meta: { title: '拖拽列表' }
		  },
		  {
		      // 拖拽Dialog组件
		      path: '/dragdialog',
		      component: () => import(/* webpackChunkName: "dragdialog" */ '../views/DragDialog.vue'),
		      meta: { title: '拖拽弹框' }
		  },
		  {
		      path: '/404',
		      component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
		      meta: { title: '404' }
		  },
	  ]
  },
  {
    path: '/login',
    name: 'Login',
	component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
	meta:{title:'登录'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
	NProgress.start()
	document.title = `后台管理系统 | ${to.meta.title}`;
	const userInfo = JSON.parse(localStorage.getItem('userInfo'))
	if(!userInfo && to.path !== '/login'){
		next('/login')
	}else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
})

router.afterEach((to,from,next)=>{
	NProgress.done()
})
export default router
