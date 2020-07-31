import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/filter',
    name: 'Filter',
    component: () => import(/* webpackChunkName: "filter" */ '../views/Filter.vue')
  },
  {
    path: '/line',
    name: 'Line',
    component: () => import(/* webpackChunkName: "line" */ '../components/charts/line-chart/Line.vue')
  },
  {
    path: '/doughnut',
    name: 'Doughnut',
    component: () => import(/* webpackChunkName: "doughnut" */ '../components/charts/doughnut-chart/Doughnut.vue')
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => import(/* webpackChunkName: "doughnut" */ '../components/charts/bar-chart/Bar.vue')
  }    
]

const router = new VueRouter({
  linkExactActiveClass: 'active-router',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
