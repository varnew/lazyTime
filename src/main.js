import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import VeHistogram from 'v-charts/lib/histogram.common'
import VeLine from 'v-charts/lib/line.common'
import 'normalize.css'
import codeCarbon from 'code-carbon'
import 'element-ui/lib/theme-chalk/index.css'
import * as fundebug from '../static/fundebug.min'
import fundebugVue from 'fundebug-vue'

fundebug.apikey = '9cfeba66bc3a4ba66ac1aa0bf29843c67371e4516df27bda37f18eeba8dc269f'
fundebugVue(fundebug, Vue)

Vue.use(ElementUI)
Vue.component('codeCarbon', codeCarbon)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
