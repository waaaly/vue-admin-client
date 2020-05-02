import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vCharts from 'v-charts'
import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vCharts)
// Vue.use(VueAxios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
