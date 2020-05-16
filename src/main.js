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
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
Vue.prototype.$axios = axios
Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(vCharts)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
