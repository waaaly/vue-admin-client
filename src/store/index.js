import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  todoList: [{
	  		title: '搭建后台',
			time:'2019-05-01 10:21:33',
	  		status: false
	  	},
	  	{
	  		title: '创建数据库',
			time:'2019-05-01 10:21:33',
	  		status: false
	  	},
	  	{
	  		title: '完成图表组件',
			time:'2019-05-01 10:21:33',
	  		status: false
	  	},
	  	{
	  		title: '完成仪表盘',
			time:'2019-05-01 10:21:33',
	  		status: false
	  	},
	  	{
	  		title: '完成路由导航',
			time:'2019-05-01 10:21:33',
	  		status: true
	  	},
	  	{
	  		title: '完成页面布局',
			time:'2019-05-01 10:21:33',
	  		status: true
	  	}
	  ],
  },
  mutations: {
	  addTodo(state,payload){
		  console.log(payload)
		  //首部插入
		  if(payload.insertType=='unshift')
		  state.todoList.unshift(payload.item);
		  else{
			  //尾部插入
			  state.todoList.push(payload.item);
		  }
	  },
	  delTodo(state,payload){
		  state.todoList.splice(payload.index,1);
	  }
  },
  actions: {
  },
  modules: {
  }
})
