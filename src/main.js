import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import codeCarbon from 'code-carbon'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.component('codeCarbon', codeCarbon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
