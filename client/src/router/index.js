import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue'),
    children: [
      {
        path: 'hello',
        name: 'hello',
        component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
      }
    ]
  },
  {
    path: '/posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue'),
    children: [
      {
        path: '',
        name: 'posts',
        component: () => import(/* webpackChunkName: "default" */ '../components/Default.vue')
      },
      {
        path: ':id',
        name: 'post detail',
        component: () => import(/* webpackChunkName: "single post" */ '../views/SinglePost.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
