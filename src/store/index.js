import Vue from 'vue'
import Vuex from 'vuex'
import form from './modules/form.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form
  }
})
