import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'
import Test from '@/pages/Test'
import Main from '@/pages/main/Main'

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
        },
        {
          path: '/main',
          name: 'main',
          component: Main
        }
      ]
    }
  ]
})
