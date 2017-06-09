import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import demo from '@/demos/Demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      component: App
    },
    {
      path: '/demo',
      component: demo
    },
  ]
})
