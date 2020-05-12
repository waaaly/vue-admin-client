import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vCharts from 'v-charts'
import axios from 'axios'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import moment from 'moment'
 // const SocketInstance = socketio('http://localhost:3000');
 // Vue.use(new VueSocketIO, SocketInstance)
// Vue.use(new VueSocketIO({debug: true, }),SocketInstance)

// Vue.use(new VueSocketIO({  
// debug: true,  
// // 服务器端地址  
// connection: 'http://localhost:3000',  
// vuex: {  
// }  
// }),SocketInstance)  
Vue.prototype.$moment = moment
Vue.prototype.$axios = axios
Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(vCharts)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
