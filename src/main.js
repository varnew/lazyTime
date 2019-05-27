/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import 'normalize.css'
import './assets/css/main.css'
import * as fundebug from '../static/fundebug.min'
import fundebugVue from 'fundebug-vue'
fundebug.apikey = '9cfeba66bc3a4ba66ac1aa0bf29843c67371e4516df27bda37f18eeba8dc269f'
fundebugVue(fundebug, Vue)
Vue.config.productionTip = false
router.afterEach((to, from, next) => { // 让页面跳转后滚动顶部，已在路由中配置实现，此处无需再次执行
  window.scrollTo(0, 0)
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
