import Vue from 'vue'
import Router from 'vue-router'
import layout from '../../src/components/layout/layout'

Vue.use(Router)

export default new Router({
  linkActiveClass:'router-link-active',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path: '/Configure',
          name: 'Configure',
          component:() => import('@/view/Configure/Configure'),
        },
        {
          path: '/DBCAnalysis',
          name: 'DBCAnalysis',
          component:() => import('@/view/DBCAnalysis/DBCAnalysis'),
        }
      ]
    }
  ]
})
