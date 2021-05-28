import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Music from '../views/audio/Music.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/model',
    name: 'Model',
    // route level code-splitting
    // this generates a separate chunk (model.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "model" */ '../views/pages/Model.vue')
  },{
    path: '/form',
    name: 'Form',
    // route level code-splitting
    // this generates a separate chunk (form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "form" */ '../views/pages/Form.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: Music

  },
  {
    path: '/reaction',
    name: 'Reaction',
    // route level code-splitting
    // this generates a separate chunk (reaction.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reaction" */ '../views/pages/Reaction.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
