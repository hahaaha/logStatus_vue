import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Status from './components/Status.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '',
        component: Status
      },
      {
        path: 'list',
        component: () => import('./components/List.vue')
      },
      {
        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('./views/Login.vue')
    }
  ]
})
