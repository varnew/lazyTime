import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
// import ElementUI from 'element-ui'
// import VCharts from 'v-charts'
import 'normalize.css'
import codeCarbon from 'code-carbon'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)
// Vue.use(VCharts)
Vue.component('codeCarbon', codeCarbon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
