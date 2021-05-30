import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
 mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
