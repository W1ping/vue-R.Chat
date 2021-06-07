import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from 'vue-router'

// 懒加载
const Auth = () => import('views/auth/Auth.vue')
const Home = () => import('views/home/Home.vue')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/auth',
    component: Auth,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router