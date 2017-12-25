import Vue from 'vue'
import Router from 'vue-router'
import OrgTree from '@/components/org/OrgTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrgTree',
      component: OrgTree
    }
  ]
})
