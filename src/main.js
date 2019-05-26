import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import 'normalize.css'
import * as fundebug from '../static/fundebug.min'
import fundebugVue from 'fundebug-vue'
import { elementImport } from './utils/element.js'

fundebug.apikey = '9cfeba66bc3a4ba66ac1aa0bf29843c67371e4516df27bda37f18eeba8dc269f'
fundebugVue(fundebug, Vue)

elementImport()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
