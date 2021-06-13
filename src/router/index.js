import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from 'vue-router'

// 懒加载
const Auth = () => import('views/auth/Auth.vue')
const Home = () => import('views/home/Home.vue')
const Room = () => import('views/room/Room.vue')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/auth',
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
  },
  {
    path: '/room',
    // path: '/room/:roomId',
    name: 'Room',
    component: Room
  },
  {
    path: '/sendMsg',
    name: 'SendMsg',
    component: () => import('components/message/SendMsg.vue') 
  },
  {
    path: '/404',
    component: () => import('components/error/NotFound.vue')
}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router