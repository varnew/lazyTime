import Vue from 'vue'
import Router from 'vue-router'
const Default = () => import('@/layouts/Default')
const Test = () => import('@/pages/Test')
const Error = () => import('@/pages/error/Error')
const ErrorList = () => import('@/pages/error/ErrorList')
const ErrorDetail = () => import('@/pages/error/ErrorDetail')

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
          redirect: '/error'
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
