import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import("@/views/home/home.vue")
  },
  {
    path: '/message',
    component: () => import("@/views/message/message.vue")
  },
  {
    path: "/favor",
    component: () => import("@/views/favor/favor.vue")
  },
  {
    path: "/order",
    component: () => import("@/views/order/order.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router