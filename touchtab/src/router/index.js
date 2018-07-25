import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import one from '@/page/one'
import tow from '@/page/tow'
import three from '@/page/three'
import four from '@/page/four'
import five from '@/page/five'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/tow',
      name: 'tow',
      component: tow
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/five',
      name: 'five',
      component: five
    }
  ]
})
