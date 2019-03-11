import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'
import Test from '@/pages/Test'
import Main from '@/pages/main/Main'
import Error from '@/pages/error/Error'
import ErrorList from '@/pages/error/ErrorList'
import ErrorDetail from '@/pages/error/ErrorDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      children: [
        {
          path: 'test',
          name: 'test',
          component: Test
        },
        {
          path: 'main',
          name: 'main',
          component: Main
        },
        {
          path: 'error',
          name: 'error',
          component: Error,
          children: [
            {
              path: 'list',
              name: 'errorList',
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
