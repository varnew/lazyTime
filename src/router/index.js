import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      children: [
        {
          path: '/test',
          name: 'test',
          component: Test
        }
      ]
    }
  ]
})
