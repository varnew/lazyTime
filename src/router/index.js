import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'
import Test from '@/pages/Test'
import Error from '@/pages/error/Error'
import ErrorList from '@/pages/error/ErrorList'
import ErrorDetail from '@/pages/error/ErrorDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          component: Error
        },
        {
          path: 'test',
          name: 'test',
          component: Test
        },
        {
          path: 'error',
          component: Error,
          children: [
            {
              path: '',
              component: ErrorList
            },
            {
              path: 'detail',
              name: 'errorDetail',
              component: ErrorDetail
            }
          ]
        }
      ]
    }
  ]
})
